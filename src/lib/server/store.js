// Persistence layer. Postgres when DATABASE_URL is set (required in production);
// a JSON file under .data/ for local development only.
import fs from "node:fs";
import path from "node:path";
import { isProd } from "./env";
import { HttpError } from "./http";

const conflict = () => new HttpError(409, "A post with this slug already exists");

/* ---------------------------- file driver (dev) ---------------------------- */
const FILE = path.join(process.cwd(), ".data", "store.json");
const load = () => {
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf8"));
  } catch {
    return { posts: [], sessions: [], attempts: {}, audit: [] };
  }
};
const save = (db) => {
  fs.mkdirSync(path.dirname(FILE), { recursive: true });
  fs.writeFileSync(FILE + ".tmp", JSON.stringify(db, null, 2));
  fs.renameSync(FILE + ".tmp", FILE);
};

const matches = (p, { status, q } = {}) =>
  (!status || p.status === status) && (!q || (p.title + " " + p.excerpt).toLowerCase().includes(q.toLowerCase()));
const newest = (a, b) => (a.updatedAt < b.updatedAt ? 1 : -1);

const fileStore = {
  async listPosts(f) { return load().posts.filter((p) => matches(p, f)).sort(newest); },
  async getPostById(id) { return load().posts.find((p) => p.id === id) || null; },
  async getPostBySlug(slug) { return load().posts.find((p) => p.slug === slug) || null; },
  async insertPost(post) {
    const db = load();
    if (db.posts.some((p) => p.slug === post.slug)) throw conflict();
    db.posts.push(post);
    save(db);
    return post;
  },
  async updatePost(id, patch) {
    const db = load();
    const i = db.posts.findIndex((p) => p.id === id);
    if (i < 0) return null;
    if (patch.slug && db.posts.some((p) => p.slug === patch.slug && p.id !== id)) throw conflict();
    db.posts[i] = { ...db.posts[i], ...patch };
    save(db);
    return db.posts[i];
  },
  async deletePost(id) {
    const db = load();
    const n = db.posts.length;
    db.posts = db.posts.filter((p) => p.id !== id);
    save(db);
    return db.posts.length < n;
  },
  async putSession(s) {
    const db = load();
    db.sessions = db.sessions.filter((x) => new Date(x.expiresAt) > new Date());
    db.sessions.push(s);
    save(db);
  },
  async getSession(sid) { return load().sessions.find((s) => s.sid === sid) || null; },
  async deleteSession(sid) {
    const db = load();
    db.sessions = db.sessions.filter((s) => s.sid !== sid);
    save(db);
  },
  async getAttempt(key) { return load().attempts[key] || null; },
  async putAttempt(key, a) { const db = load(); db.attempts[key] = a; save(db); },
  async delAttempt(key) { const db = load(); delete db.attempts[key]; save(db); },
  async addAudit(e) { const db = load(); db.audit.push(e); db.audit = db.audit.slice(-1000); save(db); },
};

/* ---------------------------- postgres driver ----------------------------- */
const COLS = { title: "title", slug: "slug", excerpt: "excerpt", content: "content", coverImage: "cover_image", tags: "tags", status: "status", publishedAt: "published_at", updatedAt: "updated_at" };
const iso = (d) => (d ? new Date(d).toISOString() : null);
const toPost = (r) => r && {
  id: r.id, title: r.title, slug: r.slug, excerpt: r.excerpt, content: r.content, coverImage: r.cover_image,
  tags: r.tags, status: r.status, publishedAt: iso(r.published_at), createdAt: iso(r.created_at), updatedAt: iso(r.updated_at),
};

function pgStore() {
  const g = globalThis;
  if (!g.__rhPool) {
    // eslint-disable-next-line @next/next/no-assign-module-variable
    const { Pool } = require("pg");
    g.__rhPool = new Pool({ connectionString: process.env.DATABASE_URL, max: 5 });
    g.__rhReady = g.__rhPool.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id uuid PRIMARY KEY, title text NOT NULL, slug text NOT NULL UNIQUE, excerpt text NOT NULL DEFAULT '',
        content text NOT NULL DEFAULT '', cover_image text NOT NULL DEFAULT '', tags text[] NOT NULL DEFAULT '{}',
        status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published')), published_at timestamptz,
        created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
      CREATE INDEX IF NOT EXISTS posts_status_idx ON posts (status, updated_at DESC);
      CREATE TABLE IF NOT EXISTS admin_sessions (sid text PRIMARY KEY, email text NOT NULL, expires_at timestamptz NOT NULL, ip text, ua text);
      CREATE TABLE IF NOT EXISTS login_attempts (key text PRIMARY KEY, count int NOT NULL, first_at timestamptz NOT NULL, locked_until timestamptz);
      CREATE TABLE IF NOT EXISTS audit_log (id bigserial PRIMARY KEY, at timestamptz NOT NULL, actor text, action text, target text, ip text);
    `);
  }
  const q = async (text, params) => { await g.__rhReady; return g.__rhPool.query(text, params); };
  const dupe = (e) => { if (e.code === "23505") throw conflict(); throw e; };

  return {
    async listPosts({ status, q: term } = {}) {
      const r = await q(
        `SELECT * FROM posts WHERE ($1::text IS NULL OR status = $1) AND ($2::text IS NULL OR title ILIKE '%' || $2 || '%' OR excerpt ILIKE '%' || $2 || '%') ORDER BY updated_at DESC LIMIT 500`,
        [status || null, term ? term.replace(/[\\%_]/g, "\\$&") : null]
      );
      return r.rows.map(toPost);
    },
    async getPostById(id) { return toPost((await q("SELECT * FROM posts WHERE id = $1", [id])).rows[0]); },
    async getPostBySlug(slug) { return toPost((await q("SELECT * FROM posts WHERE slug = $1", [slug])).rows[0]); },
    async insertPost(p) {
      try {
        const r = await q(
          `INSERT INTO posts (id,title,slug,excerpt,content,cover_image,tags,status,published_at,created_at,updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`,
          [p.id, p.title, p.slug, p.excerpt, p.content, p.coverImage, p.tags, p.status, p.publishedAt, p.createdAt, p.updatedAt]
        );
        return toPost(r.rows[0]);
      } catch (e) { return dupe(e); }
    },
    async updatePost(id, patch) {
      const keys = Object.keys(patch).filter((k) => COLS[k]); // whitelist: column names never come from input
      const sets = keys.map((k, i) => `${COLS[k]} = $${i + 2}`).join(", ");
      try {
        const r = await q(`UPDATE posts SET ${sets} WHERE id = $1 RETURNING *`, [id, ...keys.map((k) => patch[k])]);
        return toPost(r.rows[0]);
      } catch (e) { return dupe(e); }
    },
    async deletePost(id) { return (await q("DELETE FROM posts WHERE id = $1", [id])).rowCount > 0; },
    async putSession(s) {
      await q("DELETE FROM admin_sessions WHERE expires_at < now()");
      await q("INSERT INTO admin_sessions (sid,email,expires_at,ip,ua) VALUES ($1,$2,$3,$4,$5)", [s.sid, s.email, s.expiresAt, s.ip, s.ua]);
    },
    async getSession(sid) {
      const r = (await q("SELECT * FROM admin_sessions WHERE sid = $1", [sid])).rows[0];
      return r && { sid: r.sid, email: r.email, expiresAt: iso(r.expires_at) };
    },
    async deleteSession(sid) { await q("DELETE FROM admin_sessions WHERE sid = $1", [sid]); },
    async getAttempt(key) {
      const r = (await q("SELECT * FROM login_attempts WHERE key = $1", [key])).rows[0];
      return r && { count: r.count, firstAt: iso(r.first_at), lockedUntil: iso(r.locked_until) };
    },
    async putAttempt(key, a) {
      await q(
        `INSERT INTO login_attempts (key,count,first_at,locked_until) VALUES ($1,$2,$3,$4)
         ON CONFLICT (key) DO UPDATE SET count = $2, first_at = $3, locked_until = $4`,
        [key, a.count, a.firstAt, a.lockedUntil]
      );
    },
    async delAttempt(key) { await q("DELETE FROM login_attempts WHERE key = $1", [key]); },
    async addAudit(e) { await q("INSERT INTO audit_log (at,actor,action,target,ip) VALUES ($1,$2,$3,$4,$5)", [e.at, e.actor, e.action, e.target, e.ip]); },
  };
}

function pick() {
  if (process.env.DATABASE_URL) return pgStore();
  if (isProd) throw new Error("DATABASE_URL is required in production");
  return fileStore;
}

// resolved per call so build-time imports never touch the database
export const store = new Proxy({}, { get: (_, k) => (...args) => pick()[k](...args) });
