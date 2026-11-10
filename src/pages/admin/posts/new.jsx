import AdminShell from "@/components/admin/AdminShell";
import PostForm from "@/components/admin/PostForm";
import { requireAdmin } from "@/lib/server/guard";

export async function getServerSideProps(ctx) {
  const g = await requireAdmin(ctx);
  if (g.redirect) return g;
  return { props: { email: g.session.email, csrf: g.session.csrfToken } };
}

export default function NewPost({ email, csrf }) {
  return (
    <AdminShell title="New post" email={email} csrf={csrf}>
      <h1>New post</h1>
      <PostForm csrf={csrf} />
    </AdminShell>
  );
}
