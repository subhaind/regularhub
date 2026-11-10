// Usage: node scripts/hash-password.mjs "<password>"
// Prints ADMIN_PASSWORD_HASH and a fresh SESSION_SECRET for your env.
import { randomBytes } from "node:crypto";
import { hashPassword } from "../src/lib/server/password.mjs";

const pw = process.argv[2];
if (!pw || pw.length < 12) {
  console.error('Usage: node scripts/hash-password.mjs "<password of 12+ characters>"');
  process.exit(1);
}
console.log("ADMIN_PASSWORD_HASH=" + (await hashPassword(pw)));
console.log("SESSION_SECRET=" + randomBytes(48).toString("base64url"));
