import { route, clientIp } from "@/lib/server/http";
import { getPost, updatePost, deletePost } from "@/lib/server/posts";

export default route({ methods: ["GET", "PUT", "DELETE"] }, async (req, res, session) => {
  const id = String(req.query.id);
  const ctx = { email: session.email, ip: clientIp(req) };
  if (req.method === "GET") return { post: await getPost(id) };
  if (req.method === "PUT") return { post: await updatePost(id, req.body, ctx) };
  return deletePost(id, ctx);
});
