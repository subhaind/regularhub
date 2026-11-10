import { route, clientIp, serializeCookie } from "@/lib/server/http";
import { destroySession } from "@/lib/server/session";
import { store } from "@/lib/server/store";

export default route({ methods: ["POST"] }, async (req, res, session) => {
  await destroySession(session.sid);
  await store.addAudit({ at: new Date().toISOString(), actor: session.email, action: "logout", target: null, ip: clientIp(req) });
  res.setHeader("Set-Cookie", serializeCookie("", 0));
  return { ok: true };
});
