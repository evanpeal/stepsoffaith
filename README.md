# Steps of Faith

A guided, story-by-story path through the Bible — lessons, tests, streaks, reflections, and deep studies, built as a lightweight web app.

## Project structure

- `index.html` — the page shell (loads fonts, styles, and the app)
- `style.css` — all app styling
- `app.js` — the entire app (React, no build step required)
- `source.html` — the original single-file version, kept for reference

## How it runs

This app currently has **no build step**. React is loaded from a CDN
(unpkg) directly in `index.html`, and `app.js` is plain JavaScript using
`React.createElement` (no JSX, so no compiler is needed). This keeps
things simple to deploy — it's just three static files.

## Running locally

Since there's no build step, you can preview it with any static file
server. From this folder:

```bash
npx serve .
```

or, if you have Python installed:

```bash
python3 -m http.server 8000
```

Then open the printed local address in a browser.

## Deploying

This is a static site, so it deploys as-is to any static host:

- **Vercel** — drag this folder into a new Vercel project, or connect
  it to a GitHub repo. No build command needed; output directory is
  the project root.
- **Netlify** — same idea; "Deploy manually" lets you drag-and-drop
  this folder directly.

Once deployed, point the domain (stepsoffaith.com) at the host by
following their custom domain instructions.

## Data storage — current state

Right now, all progress (gems, streaks, completed lessons, reflections,
etc.) is saved with the `window.storage` API, which is **local to each
browser** — it does not sync across devices and isn't tied to a real
account.

## Next step: real accounts

To support real logins and progress that syncs across devices, this
app will connect to **Supabase** (a free-tier-friendly backend). That
work is not done yet — see the project's ongoing conversation for the
plan.
