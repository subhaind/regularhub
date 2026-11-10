# Regularhub forms → Google Sheets (Apps Script)

Every form on the site posts to one Google Apps Script web app. It validates the
submission, appends a row to a Google Sheet, emails the team and (optionally) sends
the visitor a confirmation. Job-application CVs are saved to Google Drive.

| Form | `formType` | Sheet tab |
|---|---|---|
| Contact page | `contact` | Leads |
| Service page enquiry (every `/services/*` page + hub) | `service-enquiry` | Leads |
| Portfolio "Send me quotes" | `portfolio-quote` | Leads |
| Footer email signup | `newsletter` | Newsletter |
| Job application | `job-application` | Applications |

## Setup (5 minutes)

1. Create a Google Sheet, e.g. **Regularhub Leads**.
2. **Extensions → Apps Script**. Replace the editor contents with `Code.gs` from this folder.
3. Edit `CONFIG.NOTIFY_EMAIL` at the top if leads should go somewhere other than `hello@regularhub.in`.
4. Select the `setup` function and **Run** it once. Approve the Sheets / Mail / Drive permissions.
   It also creates the three tabs with headers.
5. *(Optional, for CVs)* create a Drive folder, copy its id from the URL, then
   **Project Settings → Script properties → Add** a property named `CV_FOLDER_ID` whose
   value is that folder id. Without it, CVs land in the root of the owner's Drive.
6. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Copy the **Web app URL** (ends in `/exec`).
7. Give the URL to the site:
   - Local: copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_GAS_URL=<url>`.
   - Production: add a GitHub repo secret `NEXT_PUBLIC_GAS_URL` (Settings → Secrets and variables → Actions).
     The workflow passes it to `npm run build`; the value is baked into the static export.
8. Open the URL in a browser — you should see `{"ok":true,...}`.

> After editing `Code.gs`, use **Deploy → Manage deployments → Edit → New version**.
> The URL stays the same.

## Behaviour worth knowing

- **Not configured?** If `NEXT_PUBLIC_GAS_URL` is empty, the contact form falls back to
  opening the visitor's email client (the previous behaviour), and other forms show a
  "email us instead" message. Nothing breaks.
- **Spam:** a hidden honeypot field, a minimum-fill-time check on the client, and a
  per-email rate limit plus formula-injection escaping on the server.
- **The URL is public** (it ships in the page). That is normal for Apps Script form
  endpoints; the protections above and the 20 s rate limit are what keep it tidy.
  Gmail quotas cap emails at ~100/day on a free account (~1,500 on Workspace).
- Requests are sent as `text/plain` so the browser needs no CORS preflight.
