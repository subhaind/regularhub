import { route, clientIp } from "@/lib/server/http";
import { togglePublishStatus } from "@/lib/server/posts";

export default route({ methods: ["POST"] }, async (req, _res, session) => ({
  post: await togglePublishStatus(String(req.query.id), { email: session.email, ip: clientIp(req) }),
}));
