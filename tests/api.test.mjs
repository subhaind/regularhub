// Integration test against a running server:
//   BASE_URL=http://localhost:3100 TEST_ADMIN_EMAIL=... TEST_ADMIN_PASSWORD=... npm test
// API tests are skipped when the env vars are absent. The per-IP limit is 20 attempts / 15 min,
// so avoid running the suite more than twice in a row against the same server/IP.
import test from "node:test";
import assert from "node:assert/strict";
import { hashPassword, verifyPassword } from "../src/lib/server/password.mjs";

test("password hash verifies and rejects", async () => {
  const h = await hashPassword("correct horse battery");
  assert.ok(h.startsWith("scrypt:") && !h.includes("$"));
  assert.equal(await verifyPassword("correct horse battery", h), true);
  assert.equal(await verifyPassword("wrong", h), false);
  assert.equal(await verifyPassword("x", "garbage"), false);
});

test("hashes are salted", async () => {
  assert.notEqual(await hashPassword("same-password-1"), await hashPassword("same-password-1"));
});

const BASE = process.env.BASE_URL;
const EMAIL = process.env.TEST_ADMIN_EMAIL;
const PASS = process.env.TEST_ADMIN_PASSWORD;
const skip = !BASE || !EMAIL || !PASS;

const call = (path, { method = "GET", body, cookie, csrf, origin = BASE } = {}) =>
  fetch(BASE + path, {
    method,
    redirect: "manual",
    headers: {
      ...(body !== undefined || method !== "GET" ? { "Content-Type": "application/json" } : {}),
      ...(cookie ? { Cookie: cookie } : {}),
      ...(csrf ? { "X-CSRF-Token": csrf } : {}),
      ...(origin ? { Origin: origin } : {}),
    },
    body: body !== undefined ? JSON.stringify(body) : method !== "GET" ? "{}" : undefined,
  });

let cookie, csrf;

test("unauthenticated access is rejected", { skip }, async () => {
  assert.equal((await call("/api/admin/posts/")).status, 401);
  assert.ok([302, 307].includes((await call("/admin/")).status));
});

test("cross-origin login blocked, wrong password 401", { skip }, async () => {
  assert.equal((await call("/api/admin/login/", { method: "POST", body: { email: EMAIL, password: "x" }, origin: "http://evil.example" })).status, 403);
  assert.equal((await call("/api/admin/login/", { method: "POST", body: { email: EMAIL, password: "definitely-wrong" } })).status, 401);
});

test("login sets a hardened cookie and the page exposes a CSRF token", { skip }, async () => {
  const r = await call("/api/admin/login/", { method: "POST", body: { email: EMAIL, password: PASS } });
  assert.equal(r.status, 200);
  const sc = r.headers.get("set-cookie");
  assert.match(sc, /HttpOnly/);
  assert.match(sc, /SameSite=Strict/);
  cookie = sc.split(";")[0];
  const html = await (await call("/admin/", { cookie })).text();
  csrf = html.match(/"csrf":"([^"]+)"/)?.[1];
  assert.ok(csrf, "csrf token in page props");
});

test("CRUD + publish toggle + public visibility", { skip }, async () => {
  const title = "Test post " + Date.now();
  assert.equal((await call("/api/admin/posts/", { method: "POST", body: { title }, cookie })).status, 403); // no CSRF
  const created = await (await call("/api/admin/posts/", { method: "POST", body: { title, content: "<b>x</b>", status: "published", id: "x" }, cookie, csrf })).json();
  const { id, slug } = created.post;
  assert.equal(created.post.status, "draft"); // mass assignment ignored
  assert.equal((await call("/api/admin/posts/", { method: "POST", body: { title }, cookie, csrf })).status, 409);
  assert.equal((await call("/api/admin/posts/", { method: "POST", body: { title: "Bad", coverImage: "javascript:alert(1)" }, cookie, csrf })).status, 422);
  assert.equal((await call(`/api/posts/${slug}/`)).status, 404); // draft hidden

  const pub = await (await call(`/api/admin/posts/${id}/publish/`, { method: "POST", cookie, csrf })).json();
  assert.equal(pub.post.status, "published");
  assert.equal((await call(`/api/posts/${slug}/`)).status, 200);

  const upd = await (await call(`/api/admin/posts/${id}/`, { method: "PUT", body: { title: title + " v2" }, cookie, csrf })).json();
  assert.equal(upd.post.title, title + " v2");

  assert.equal((await call(`/api/admin/posts/${id}/`, { method: "DELETE", cookie, csrf })).status, 200);
  assert.equal((await call(`/api/admin/posts/${id}/`, { method: "DELETE", cookie, csrf })).status, 404);
  assert.equal((await call("/api/admin/posts/not-a-uuid/", { cookie })).status, 400);
});

test("logout revokes the session server-side", { skip }, async () => {
  const old = cookie;
  assert.equal((await call("/api/admin/logout/", { method: "POST", cookie, csrf })).status, 200);
  assert.equal((await call("/api/admin/posts/", { cookie: old })).status, 401);
  assert.equal((await call("/api/admin/posts/", { cookie: "rh_admin=abc.9999999999999.sig" })).status, 401);
});

test("concurrent failures are counted atomically and lock the account", { skip }, async () => {
  const email = `lock-${Date.now()}@example.com`;
  const res = await Promise.all(Array.from({ length: 12 }, () => call("/api/admin/login/", { method: "POST", body: { email, password: "bad" } })));
  const codes = res.map((r) => r.status);
  assert.ok(codes.filter((c) => c === 401).length <= 5, "no more than 5 attempts reach the password check: " + codes);
  assert.ok(codes.includes(429), "lockout engaged: " + codes);
});
