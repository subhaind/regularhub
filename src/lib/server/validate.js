import { HttpError } from "./http";

// strip control chars but keep tab / newline / carriage return
// eslint-disable-next-line no-control-regex
const CTRL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const clean = (s) => String(s).replace(CTRL, "").normalize("NFC");
export const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const ID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const slugify = (s) =>
  clean(s)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);

export function assertId(id) {
  if (typeof id !== "string" || !ID_RE.test(id)) throw new HttpError(400, "Invalid post id");
  return id;
}

/** Whitelists + validates post fields. Unknown keys (id, status, publishedAt...) are ignored. */
export function validatePost(body, { partial = false } = {}) {
  if (!body || typeof body !== "object" || Array.isArray(body)) throw new HttpError(400, "Invalid body");
  const out = {};
  const bad = (m) => {
    throw new HttpError(422, m);
  };
  const str = (k, max, { required = false, min = 0 } = {}) => {
    if (body[k] === undefined) {
      if (required && !partial) bad(`${k} is required`);
      return;
    }
    if (typeof body[k] !== "string") bad(`${k} must be text`);
    const v = clean(body[k]).trim();
    if (required && !v) bad(`${k} is required`);
    if (v.length < min) bad(`${k} must be at least ${min} characters`);
    if (v.length > max) bad(`${k} must be at most ${max} characters`);
    out[k] = v;
  };
  str("title", 200, { required: true, min: 3 });
  str("excerpt", 500);
  str("content", 100000);
  if (body.slug !== undefined || (!partial && out.title)) {
    const slug = body.slug ? clean(String(body.slug)).trim().toLowerCase() : slugify(out.title || "");
    if (!SLUG_RE.test(slug) || slug.length > 120) bad("slug must be lowercase letters, numbers and hyphens");
    out.slug = slug;
  }
  if (body.coverImage !== undefined) {
    const v = clean(String(body.coverImage)).trim();
    if (v.length > 500 || (v && !(v.startsWith("/assets/") || /^https:\/\/\S+$/i.test(v)))) bad("coverImage must be an https URL or a /assets/ path");
    out.coverImage = v;
  }
  if (body.tags !== undefined) {
    if (!Array.isArray(body.tags) || body.tags.length > 10) bad("tags must be a list of up to 10");
    out.tags = [...new Set(body.tags.map((t) => clean(String(t)).trim().toLowerCase()).filter(Boolean))];
    if (out.tags.some((t) => t.length > 40)) bad("tags must be at most 40 characters");
  }
  return out;
}
