# Admin dashboard & blog CMS

`/admin` (sign in at `/admin/login/`). Server-rendered, so the site no longer uses `output: 'export'`; deploy on Vercel (Node runtime).

## Setup
1. `node scripts/hash-password.mjs "<12+ char password>"` -> prints `ADMIN_PASSWORD_HASH` and `SESSION_SECRET`.
2. Set in Vercel (and `.env.local` locally): `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH`, `SESSION_SECRET`, `DATABASE_URL` (Postgres; tables are created automatically). Without `DATABASE_URL`, dev uses `.data/store.json`; production refuses to start without it.

## Security model
- Passwords: scrypt (N=32768), constant-time compare, dummy hash for unknown emails (no user enumeration/timing leak).
- Sessions: random 256-bit id, HMAC-signed cookie (`__Host-` prefix, HttpOnly, Secure, SameSite=Strict, 8h absolute) **and** server-side record, so logout/expiry truly revokes. New id each login.
- CSRF: per-session HMAC token required in `X-CSRF-Token` on every mutation + same-origin (Origin / Sec-Fetch-Site) check + JSON-only bodies.
- Brute force: lockout after 5 failures per IP+email or 20 per IP (15 min), persisted in the DB (works across serverless instances).
- AuthZ: every `/api/admin/*` route and admin page verifies the session server-side; `src/proxy.js` is only a first gate.
- Input: field whitelist (no mass assignment), length limits, slug/URL/id validation, parameterised SQL, column names from a fixed map.
- Drafts are never returned by the public API (`/api/posts`, `/api/posts/[slug]`).
- Audit log table: logins (ok/failed), logout, create/update/delete/publish/unpublish.
- Headers on admin/API: no-store, noindex, X-Frame-Options DENY, CSP (frame-ancestors/base-uri/form-action/object-src), COOP.

## CRUD
`src/lib/server/posts.js`: `createPost`, `updatePost`, `deletePost`, `togglePublishStatus` -> `POST/PUT/DELETE /api/admin/posts`, `POST /api/admin/posts/:id/publish`.

## Known limits
- Post `content` is stored as plain text/Markdown and not sanitised as HTML: escape or render it with a safe Markdown renderer wherever you display it.
- Single admin account (env-configured). The themed `/blog` pages still show template content and are not yet wired to `/api/posts`.
- No MFA. Strict script-src CSP not applied (Next inline scripts would need nonces).
