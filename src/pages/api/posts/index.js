import { route } from "@/lib/server/http";
import { listPosts } from "@/lib/server/posts";

// Public: published posts only, without the full body.
export default route({ methods: ["GET"], auth: false }, async (_req, res) => {
  const posts = await listPosts({ status: "published" });
  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return { posts: posts.map(({ content, ...rest }) => rest) };
});
