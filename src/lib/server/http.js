import { COOKIE_NAME, isProd } from "./env";
import { readSession, csrfFor, safeEqual } from "./session";

export class HttpError extends Error {
  constructor(status, message, extra) {
    super(message);
    this.status = status;
    this.extra = extra;
  }
}

export const clientIp = (req) =>
  (req.headers["x-real-ip"] || String(req.headers["x-forwarded-for"] || "").split(",")[0] || req.socket?.remoteAddress || "unknown").toString().trim();

export const serializeCookie = (value, maxAgeSec) =>
  `${COOKIE_NAME}=${value}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAgeSec}${isProd ? "; Secure" : ""}`;

function assertSameOrigin(req) {
  const host = req.headers.host;
  const origin = req.headers.origin;
  if (origin) {
    let o;
    try { o = new URL(origin); } catch { throw new HttpError(403, "Bad origin"); }
    if (o.host !== host) throw new HttpError(403, "Cross-origin request blocked");
    return;
  }
  if (req.headers["sec-fetch-site"] !== "same-origin") throw new HttpError(403, "Cross-origin request blocked");
}

/**
 * Wraps an API route: method allowlist, JSON-only mutations, same-origin + CSRF checks,
 * session auth, and uniform error handling (no stack traces / internals to the client).
 */
export function route({ methods, auth = true }, fn) {
  return async (req, res) => {
    res.setHeader("Cache-Control", "no-store");
    try {
      if (!methods.includes(req.method)) {
        res.setHeader("Allow", methods.join(", "));
        throw new HttpError(405, "Method not allowed");
      }
      const mutating = req.method !== "GET" && req.method !== "HEAD";
      if (mutating) {
        assertSameOrigin(req);
        if (!String(req.headers["content-type"] || "").startsWith("application/json")) throw new HttpError(415, "JSON required");
      }
      let session = null;
      if (auth) {
        session = await readSession(req);
        if (!session) throw new HttpError(401, "Authentication required");
        if (mutating && !safeEqual(String(req.headers["x-csrf-token"] || ""), csrfFor(session.sid))) throw new HttpError(403, "Invalid CSRF token");
      }
      const result = await fn(req, res, session);
      if (!res.writableEnded) res.status(200).json(result ?? { ok: true });
    } catch (err) {
      if (err instanceof HttpError) {
        if (err.extra?.retryAfter) res.setHeader("Retry-After", String(err.extra.retryAfter));
        return res.status(err.status).json({ error: err.message });
      }
      console.error("[admin-api]", err);
      res.status(500).json({ error: "Internal error" });
    }
  };
}
