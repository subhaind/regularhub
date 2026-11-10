import AdminShell from "@/components/admin/AdminShell";
import PostForm from "@/components/admin/PostForm";
import { requireAdmin } from "@/lib/server/guard";
import { getPost } from "@/lib/server/posts";

export async function getServerSideProps(ctx) {
  const g = await requireAdmin(ctx);
  if (g.redirect) return g;
  try {
    const post = await getPost(String(ctx.params.id));
    return { props: { post, email: g.session.email, csrf: g.session.csrfToken } };
  } catch {
    return { notFound: true };
  }
}

export default function EditPost({ post, email, csrf }) {
  return (
    <AdminShell title="Edit post" email={email} csrf={csrf}>
      <h1>Edit post</h1>
      <PostForm key={post.id} post={post} csrf={csrf} />
    </AdminShell>
  );
}
