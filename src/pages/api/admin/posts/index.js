import { route, clientIp } from "@/lib/server/http";
import { listPosts, createPost } from "@/lib/server/posts";

export default route({ methods: ["GET", "POST"] }, async (req, res, session) => {
  if (req.method === "GET") {
    const status = ["draft", "published"].includes(req.query.status) ? req.query.status : undefined;
    const q = typeof req.query.q === "string" ? req.query.q.slice(0, 100) : undefined;
    return { posts: await listPosts({ status, q }) };
  }
  const post = await createPost(req.body, { email: session.email, ip: clientIp(req) });
  res.status(201).json({ post });
});
