import { createHash } from "node:crypto";
import { store } from "./store";
import { HttpError } from "./http";

const WINDOW_MS = 15 * 60 * 1000;
// attempts (successful or not) allowed per window, per key
const LIMITS = { ip: 20, account: 5, email: 10 };
const h = (s) => createHash("sha256").update(s).digest("hex").slice(0, 32);

const keysFor = (ip, email) => [
  { key: "ip:" + h(ip), max: LIMITS.ip },
  { key: "acct:" + h(ip + "|" + email), max: LIMITS.account },
  { key: "email:" + h(email), max: LIMITS.email }, // survives IP rotation
];

/**
 * Atomically counts this attempt BEFORE the password is checked (no read-modify-write race,
 * and over-limit requests never reach the expensive scrypt step).
 */
export async function checkLoginAttempt(ip, email) {
  let retry = 0;
  for (const { key, max } of keysFor(ip, email)) {
    const { count, firstAt } = await store.bumpAttempt(key, WINDOW_MS);
    if (count > max) retry = Math.max(retry, Math.ceil((new Date(firstAt).getTime() + WINDOW_MS - Date.now()) / 1000));
  }
  if (retry > 0) throw new HttpError(429, "Too many attempts. Try again later.", { retryAfter: Math.max(retry, 1) });
}

export async function clearFailures(ip, email) {
  const [, acct, em] = keysFor(ip, email);
  await store.delAttempt(acct.key);
  await store.delAttempt(em.key);
}
