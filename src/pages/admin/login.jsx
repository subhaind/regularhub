import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import s from "@/components/admin/Admin.module.css";
import { adminFetch } from "@/components/admin/adminApi";
import { readSession } from "@/lib/server/session";

export async function getServerSideProps({ req, res }) {
  res.setHeader("Cache-Control", "no-store");
  if (await readSession(req)) return { redirect: { destination: "/admin/", permanent: false } };
  return { props: {} };
}

export default function Login() {
  const router = useRouter();
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setErr("");
    const fd = new FormData(e.currentTarget);
    try {
      await adminFetch("/api/admin/login", { method: "POST", body: { email: fd.get("email"), password: fd.get("password") } });
      router.push("/admin/");
    } catch (ex) {
      setErr(ex.message);
      setBusy(false);
    }
  };

  return (
    <div className={s.wrap}>
      <Head>
        <title>Sign in · Admin</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <form className={s.login} onSubmit={submit}>
        <h1>Admin sign in</h1>
        {err && <div role="alert" className={s.alert}>{err}</div>}
        <div className={s.field}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className={s.input} autoComplete="username" required />
        </div>
        <div className={s.field}>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" className={s.input} autoComplete="current-password" required />
        </div>
        <button className={`${s.btn} ${s.primary}`} disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
      </form>
    </div>
  );
}
