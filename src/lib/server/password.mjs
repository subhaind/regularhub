// scrypt password hashing (node:crypto, no native deps). Format: scrypt:N:r:p:salt:hash (base64url).
// Colon-delimited on purpose: "$" in an .env value gets expanded by Next's dotenv-expand.
import { scrypt, randomBytes, timingSafeEqual } from "node:crypto";

const N = 32768, R = 8, P = 1, KEYLEN = 64;
const MAXMEM = 128 * N * R * 2;

const derive = (password, salt, n, r, p, keylen) =>
  new Promise((resolve, reject) =>
    scrypt(password.normalize("NFKC"), salt, keylen, { N: n, r, p, maxmem: MAXMEM }, (e, k) => (e ? reject(e) : resolve(k)))
  );

export async function hashPassword(password) {
  const salt = randomBytes(16);
  const key = await derive(password, salt, N, R, P, KEYLEN);
  return ["scrypt", N, R, P, salt.toString("base64url"), key.toString("base64url")].join(":");
}

export async function verifyPassword(password, stored) {
  try {
    const [tag, n, r, p, salt, hash] = String(stored).split(":");
    if (tag !== "scrypt" || !hash) return false;
    const expected = Buffer.from(hash, "base64url");
    const actual = await derive(password, Buffer.from(salt, "base64url"), +n, +r, +p, expected.length);
    return expected.length === actual.length && timingSafeEqual(expected, actual);
  } catch {
    return false;
  }
}
