import Link from "next/link";
import { useState } from "react";
import s from "@/components/admin/Admin.module.css";
import AdminShell from "@/components/admin/AdminShell";
import { adminFetch } from "@/components/admin/adminApi";
import { requireAdmin } from "@/lib/server/guard";
import { listPosts } from "@/lib/server/posts";

export async function getServerSideProps(ctx) {
  const g = await requireAdmin(ctx);
  if (g.redirect) return g;
  const posts = await listPosts();
  return { props: { posts, email: g.session.email, csrf: g.session.csrfToken } };
}

export default function Dashboard({ posts: initial, email, csrf }) {
  const [posts, setPosts] = useState(initial);
  const [filter, setFilter] = useState("all");
  const [q, setQ] = useState("");
  const [err, setErr] = useState("");
  const [busyId, setBusyId] = useState(null);

  const run = async (id, fn) => {
    setBusyId(id);
    setErr("");
    try { await fn(); } catch (e) { setErr(e.message); } finally { setBusyId(null); }
  };
  const toggle = (p) => run(p.id, async () => {
    const { post } = await adminFetch(`/api/admin/posts/${p.id}/publish`, { method: "POST", csrf });
    setPosts((l) => l.map((x) => (x.id === p.id ? post : x)));
  });
  const remove = (p) => {
    if (!window.confirm(`Delete "${p.title}"? This cannot be undone.`)) return;
    run(p.id, async () => {
      await adminFetch(`/api/admin/posts/${p.id}`, { method: "DELETE", csrf });
      setPosts((l) => l.filter((x) => x.id !== p.id));
    });
  };

  const shown = posts.filter((p) => (filter === "all" || p.status === filter) && (p.title + p.excerpt).toLowerCase().includes(q.toLowerCase()));
  const count = (st) => posts.filter((p) => p.status === st).length;

  return (
    <AdminShell title="Posts" email={email} csrf={csrf}>
      <div className={s.stats}>
        <div className={s.stat}><b>{posts.length}</b>Total</div>
        <div className={s.stat}><b>{count("published")}</b>Published</div>
        <div className={s.stat}><b>{count("draft")}</b>Drafts</div>
      </div>
      <div className={s.row}>
        <input className={`${s.input} ${s.grow}`} style={{ maxWidth: 320 }} placeholder="Search posts…" aria-label="Search posts" value={q} onChange={(e) => setQ(e.target.value)} />
        <select className={s.input} style={{ width: "auto" }} aria-label="Filter by status" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="published">Published</option>
          <option value="draft">Drafts</option>
        </select>
        <span className={s.grow} />
        <Link className={`${s.btn} ${s.primary}`} href="/admin/posts/new/">New post</Link>
      </div>
      {err && <div role="alert" className={s.alert} style={{ marginBottom: 12 }}>{err}</div>}
      <div className={s.card}>
        {shown.length === 0 ? (
          <div className={s.empty}>No posts yet.</div>
        ) : (
          <table className={s.table}>
            <thead><tr><th>Title</th><th>Status</th><th>Updated</th><th>Actions</th></tr></thead>
            <tbody>
              {shown.map((p) => (
                <tr key={p.id}>
                  <td><strong>{p.title}</strong><br /><small>/{p.slug}</small></td>
                  <td><span className={`${s.badge} ${s[p.status]}`}>{p.status}</span></td>
                  <td>{new Date(p.updatedAt).toLocaleString()}</td>
                  <td>
                    <div className={s.actions}>
                      <Link className={s.btn} href={`/admin/posts/${p.id}/`}>Edit</Link>
                      <button className={s.btn} disabled={busyId === p.id} onClick={() => toggle(p)}>{p.status === "published" ? "Unpublish" : "Publish"}</button>
                      <button className={`${s.btn} ${s.danger}`} disabled={busyId === p.id} onClick={() => remove(p)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminShell>
  );
}
