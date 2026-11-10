export const isProd = process.env.NODE_ENV === "production";

export const SESSION_TTL_MS = 8 * 60 * 60 * 1000; // absolute 8h session
export const COOKIE_NAME = isProd ? "__Host-rh_admin" : "rh_admin";

export function getConfig() {
  const secret = process.env.SESSION_SECRET || "";
  const email = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();
  const passwordHash = process.env.ADMIN_PASSWORD_HASH || "";
  if (secret.length < 32 || !email || !passwordHash) {
    throw new Error("Admin is not configured: set ADMIN_EMAIL, ADMIN_PASSWORD_HASH and SESSION_SECRET (>=32 chars). See ADMIN.md.");
  }
  return { secret, email, passwordHash };
}
