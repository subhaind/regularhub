import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import s from "./Admin.module.css";
import { adminFetch } from "./adminApi";

const slugify = (t) => t.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 120);

export default function PostForm({ post, csrf }) {
  const router = useRouter();
  const [f, setF] = useState({
    title: post?.title || "", slug: post?.slug || "", excerpt: post?.excerpt || "", content: post?.content || "",
    coverImage: post?.coverImage || "", tags: (post?.tags || []).join(", "),
  });
  const [slugTouched, setSlugTouched] = useState(!!post);
  const [msg, setMsg] = useState(null);
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => {
    const v = e.target.value;
    setF((p) => ({ ...p, [k]: v, ...(k === "title" && !slugTouched ? { slug: slugify(v) } : {}) }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const body = { ...f, tags: f.tags.split(",").map((t) => t.trim()).filter(Boolean) };
    try {
      if (post) {
        await adminFetch(`/api/admin/posts/${post.id}`, { method: "PUT", body, csrf });
        setMsg({ ok: true, text: "Saved." });
      } else {
        const { post: created } = await adminFetch("/api/admin/posts", { method: "POST", body, csrf });
        router.push(`/admin/posts/${created.id}/`);
      }
    } catch (err) {
      setMsg({ ok: false, text: err.message });
    } finally {
      setBusy(false);
    }
  };

  const field = (k, label, props = {}, hint) => (
    <div className={s.field}>
      <label htmlFor={k}>{label}</label>
      {props.as === "textarea" ? (
        <textarea id={k} className={s.input} value={f[k]} onChange={set(k)} {...props.attrs} />
      ) : (
        <input id={k} className={s.input} value={f[k]} onChange={props.onChange || set(k)} {...props.attrs} />
      )}
      {hint && <small>{hint}</small>}
    </div>
  );

  return (
    <form className={s.form} onSubmit={submit}>
      {msg && <div role="status" className={`${s.alert} ${msg.ok ? s.ok : ""}`}>{msg.text}</div>}
      {field("title", "Title", { attrs: { required: true, maxLength: 200, minLength: 3 } })}
      {field("slug", "Slug", { onChange: (e) => { setSlugTouched(true); setF((p) => ({ ...p, slug: e.target.value })); }, attrs: { required: true, maxLength: 120, pattern: "[a-z0-9]+(-[a-z0-9]+)*" } }, "Lowercase letters, numbers, hyphens.")}
      {field("excerpt", "Excerpt", { as: "textarea", attrs: { maxLength: 500, style: { minHeight: 80 } } })}
      {field("content", "Content (plain text / Markdown)", { as: "textarea", attrs: { maxLength: 100000 } })}
      {field("coverImage", "Cover image", { attrs: { placeholder: "https://… or /assets/…" } })}
      {field("tags", "Tags", {}, "Comma separated, up to 10.")}
      <div className={s.row}>
        <button className={`${s.btn} ${s.primary}`} disabled={busy}>{busy ? "Saving…" : post ? "Save changes" : "Create draft"}</button>
        <Link className={s.btn} href="/admin/">Back</Link>
      </div>
    </form>
  );
}
