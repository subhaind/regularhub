import { route, HttpError } from "@/lib/server/http";
import { store } from "@/lib/server/store";
import { SLUG_RE } from "@/lib/server/validate";

export default route({ methods: ["GET"], auth: false }, async (req, res) => {
  const slug = String(req.query.slug);
  const post = SLUG_RE.test(slug) ? await store.getPostBySlug(slug) : null;
  if (!post || post.status !== "published") throw new HttpError(404, "Post not found"); // drafts never leak
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { post };
});
