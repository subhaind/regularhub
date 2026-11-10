import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { COOKIE_NAME, SESSION_TTL_MS, getConfig } from "./env";
import { store } from "./store";

const b64 = (buf) => Buffer.from(buf).toString("base64url");
const hmac = (data) => createHmac("sha256", getConfig().secret).update(data).digest("base64url");

export function safeEqual(a, b) {
  const x = Buffer.from(a), y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export const csrfFor = (sid) => hmac("csrf:" + sid);

function parseCookies(header = "") {
  return Object.fromEntries(
    header
      .split(";")
      .map((c) => {
        const i = c.indexOf("=");
        return i < 0 ? null : [c.slice(0, i).trim(), c.slice(i + 1).trim()];
      })
      .filter(Boolean)
  );
}

/** Creates a brand-new server-side session (new id on every login = no session fixation). */
export async function createSession(email, ip, ua) {
  const sid = b64(randomBytes(32));
  const exp = Date.now() + SESSION_TTL_MS;
  await store.putSession({ sid, email, expiresAt: new Date(exp).toISOString(), ip, ua: (ua || "").slice(0, 200) });
  const body = `${sid}.${exp}`;
  return { token: `${body}.${hmac(body)}`, sid, maxAgeSec: Math.floor(SESSION_TTL_MS / 1000) };
}

/** Verifies the signed cookie AND that the session still exists server-side (so logout truly revokes). */
export async function readSession(req) {
  const raw = parseCookies(req.headers.cookie)[COOKIE_NAME];
  if (!raw) return null;
  const [sid, exp, sig] = raw.split(".");
  if (!sid || !exp || !sig) return null;
  if (!safeEqual(sig, hmac(`${sid}.${exp}`))) return null;
  if (!(Number(exp) > Date.now())) return null;
  const rec = await store.getSession(sid);
  if (!rec || new Date(rec.expiresAt).getTime() <= Date.now()) return null;
  return { sid, email: rec.email, csrfToken: csrfFor(sid) };
}

export const destroySession = (sid) => store.deleteSession(sid);
