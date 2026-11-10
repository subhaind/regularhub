# Manual steps to finish the admin deployment

These steps need your accounts or secrets, so they were not done automatically.
Run commands from the repo root. Prefix with `! ` if you run them inside a Claude Code session.

State at time of writing: code is on branch `worktree-service-pages-cro-redesign` (PR #1, commit `4c07fda`).
Vercel project `surangama/regularhub` has a **Preview** deployment of the new build and an older **Production** static build.
The admin cannot work until steps 1-3 are done.

## 0. Prerequisites
- Node 20+, `npm ci`, Vercel CLI logged in (`vercel whoami`), project linked (`vercel link --project regularhub --scope surangama`).

## 1. Create the admin credentials
```bash
node scripts/hash-password.mjs "<a password of 12+ characters>"
```
It prints two lines: `ADMIN_PASSWORD_HASH=...` and `SESSION_SECRET=...`. Keep them private. Remember the password: it is your login.

## 2. Create a Postgres database
Pick one:
- Vercel Marketplace: `vercel integration add neon` (accepts terms and creates a billable resource), or add it from the Vercel dashboard under Storage.
- Supabase / any Postgres: copy the **pooled** connection string (PgBouncer/pooler URL).

Tables (`posts`, `admin_sessions`, `login_attempts`, `audit_log`) are created automatically on first use. The DB role needs CREATE privilege for that first run.

## 3. Set the environment variables on Vercel
Dashboard: Project -> Settings -> Environment Variables, or CLI (each command prompts for the value):

| Name | Value | Notes |
|---|---|---|
| `ADMIN_EMAIL` | your login email, e.g. `hello@regularhub.in` | |
| `ADMIN_PASSWORD_HASH` | from step 1 | mark Sensitive |
| `SESSION_SECRET` | from step 1 | mark Sensitive, 32+ chars |
| `DATABASE_URL` | from step 2 | mark Sensitive |

```bash
vercel env add ADMIN_EMAIL production
vercel env add ADMIN_PASSWORD_HASH production --sensitive
vercel env add SESSION_SECRET production --sensitive
vercel env add DATABASE_URL production --sensitive
```
Repeat with `preview` if you want the preview deployment to work too.
`NEXT_PUBLIC_GAS_URL` is already set.

## 4. Deploy to production
```bash
vercel deploy --prod
```

## 5. Verify
1. Open `https://<your-domain>/admin/login/` and sign in.
2. Create a post, publish it, check `https://<your-domain>/api/posts/` lists it, unpublish it, delete it.
3. Sign out and confirm `/admin/` redirects to login.
4. Optional: run the automated suite against a non-production server with a throwaway account:
   `BASE_URL=... TEST_ADMIN_EMAIL=... TEST_ADMIN_PASSWORD=... npm test`
   (It deliberately triggers a login lockout for a random email; avoid pointing it at production.)

## 6. Follow-ups (not blockers)
- **Domain:** `regularhub.in` is still served by Hostinger. Add the domain in Vercel (Settings -> Domains) and update DNS when ready.
- **Auto-deploy:** connect `subhaind/regularhub` under Settings -> Git so pushes deploy automatically.
- **Merge PR #1** (base is `baseline-pre-overhaul`) and decide the repo's default branch.
- **Old workflow:** `.github/workflows/build-and-push.yml` targets the retired `imhehee/regularhub_website` repo and assumes a static export; delete or rewrite it.
- **Protection bypass token:** a `vercel curl` run created one on the project; revoke it under Settings -> Deployment Protection if unwanted.
- **Deployment Protection:** Vercel login protection is on for the deployment URLs; adjust under the same settings if the public site should be open.
- **Google Apps Script:** submit one real enquiry from the live site and confirm the Sheet row and email arrive.
- **Not implemented:** MFA, a strict `script-src` CSP (needs nonces), safe rendering of post `content` (stored as plain text/Markdown; escape or sanitize when you display it), and connecting the themed `/blog` pages to `/api/posts`.

## Troubleshooting
- `/admin` shows an error or the API returns 500: one of the four env vars is missing, or `DATABASE_URL` is unreachable. Check `vercel logs`.
- Login returns 429: lockout (5 attempts per IP+email, 10 per email, 20 per IP per 15 min). Wait 15 minutes.
- Locked out of the admin: generate a new hash (step 1), update `ADMIN_PASSWORD_HASH`, redeploy. Existing sessions end when `SESSION_SECRET` is rotated.

See `ADMIN.md` for the security model.
