import { readSession } from "./session";

/** getServerSideProps helper: real session check (the proxy only checks cookie presence). */
export async function requireAdmin(ctx) {
  const session = await readSession(ctx.req);
  if (!session) return { redirect: { destination: "/admin/login/", permanent: false } };
  ctx.res.setHeader("Cache-Control", "no-store");
  return { session };
}
