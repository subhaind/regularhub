import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import s from "./Admin.module.css";
import { adminFetch } from "./adminApi";

export default function AdminShell({ title, email, csrf, children }) {
  const router = useRouter();
  const logout = async () => {
    try {
      await adminFetch("/api/admin/logout", { method: "POST", csrf });
    } finally {
      router.push("/admin/login/");
    }
  };
  return (
    <div className={s.wrap}>
      <Head>
        <title>{`${title} · Admin`}</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <header className={s.bar}>
        <strong>Regularhub Admin</strong>
        <Link href="/admin/" style={{ color: "#fff" }}>Posts</Link>
        <span>{email}</span>
        <button className={s.btn} onClick={logout} style={{ background: "transparent", color: "#fff", borderColor: "#555" }}>Sign out</button>
      </header>
      <main className={s.main}>{children}</main>
    </div>
  );
}
