import { createHash } from "node:crypto";
import { store } from "./store";
import { HttpError } from "./http";

const WINDOW_MS = 15 * 60 * 1000;
const LIMITS = { account: 5, ip: 20 }; // failures per window before lockout
const LOCK_MS = 15 * 60 * 1000;
const h = (s) => createHash("sha256").update(s).digest("hex").slice(0, 32);

const keysFor = (ip, email) => [
  { key: "ip:" + h(ip), max: LIMITS.ip },
  { key: "acct:" + h(ip + "|" + email), max: LIMITS.account },
];

export async function assertNotLocked(ip, email) {
  for (const { key } of keysFor(ip, email)) {
    const a = await store.getAttempt(key);
    if (a?.lockedUntil && new Date(a.lockedUntil).getTime() > Date.now()) {
      throw new HttpError(429, "Too many attempts. Try again later.", {
        retryAfter: Math.ceil((new Date(a.lockedUntil).getTime() - Date.now()) / 1000),
      });
    }
  }
}

export async function recordFailure(ip, email) {
  const now = Date.now();
  for (const { key, max } of keysFor(ip, email)) {
    let a = await store.getAttempt(key);
    if (!a || now - new Date(a.firstAt).getTime() > WINDOW_MS) a = { count: 0, firstAt: new Date(now).toISOString(), lockedUntil: null };
    a.count += 1;
    if (a.count >= max) a.lockedUntil = new Date(now + LOCK_MS).toISOString();
    await store.putAttempt(key, a);
  }
}

export async function clearFailures(ip, email) {
  await store.delAttempt(keysFor(ip, email)[1].key);
}
