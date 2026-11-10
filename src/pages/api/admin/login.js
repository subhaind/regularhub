import { route, HttpError, clientIp, serializeCookie } from "@/lib/server/http";
import { getConfig } from "@/lib/server/env";
import { verifyPassword } from "@/lib/server/password.mjs";
import { createSession } from "@/lib/server/session";
import { assertNotLocked, recordFailure, clearFailures } from "@/lib/server/ratelimit";
import { store } from "@/lib/server/store";

// Verified against a fixed hash when the email is wrong, so response time doesn't reveal which emails exist.
const DUMMY = "scrypt:32768:8:1:AAAAAAAAAAAAAAAAAAAAAA:" + "A".repeat(86);

export default route({ methods: ["POST"], auth: false }, async (req, res) => {
  const cfg = getConfig();
  const ip = clientIp(req);
  const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase().slice(0, 254) : "";
  const password = typeof req.body?.password === "string" ? req.body.password.slice(0, 256) : "";
  if (!email || !password) throw new HttpError(400, "Email and password are required");

  await assertNotLocked(ip, email);

  const emailOk = email === cfg.email;
  const passOk = await verifyPassword(password, emailOk ? cfg.passwordHash : DUMMY);
  if (!emailOk || !passOk) {
    await recordFailure(ip, email);
    await store.addAudit({ at: new Date().toISOString(), actor: email, action: "login.failed", target: null, ip });
    throw new HttpError(401, "Invalid email or password");
  }

  await clearFailures(ip, email);
  const s = await createSession(cfg.email, ip, req.headers["user-agent"]);
  await store.addAudit({ at: new Date().toISOString(), actor: cfg.email, action: "login.success", target: null, ip });
  res.setHeader("Set-Cookie", serializeCookie(s.token, s.maxAgeSec));
  return { ok: true };
});
