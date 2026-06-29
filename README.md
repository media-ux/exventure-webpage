# EX Venture Site

Single-page static site + article reader, built with React (via Babel standalone) and vanilla CSS.

## Local preview

Open `EX Venture Site.html` in any browser, or serve the folder with any static server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deploy to Vercel

The site is fully static — no build step required.

### Option A — Vercel CLI

```bash
# 1. install the CLI once
npm i -g vercel

# 2. inside the project folder
vercel login        # sign in (browser flow)
vercel              # first deploy → preview URL
vercel --prod       # promote to production
```

When prompted:
- **Set up and deploy?** → Y
- **Which scope?** → your account / team
- **Link to existing project?** → N (first time)
- **Project name?** → `exventure` (or whatever you want)
- **In which directory is your code?** → `./`
- **Override settings?** → N (the included `vercel.json` handles routing)

### Option B — GitHub → Vercel dashboard

1. Push the project to a GitHub repo.
2. On [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Other**. Build command: empty. Output directory: `./`.
4. Click **Deploy**.

## Contact form activation (one-time)

The Book-a-Call form delivers to `media@exventure.co` through FormSubmit.

The very first submission triggers an activation email from FormSubmit to that inbox. **Open it and click the confirmation link once** — after that, every subsequent submission delivers automatically.

To test:
1. Open the deployed site.
2. Click **Book a Call**, fill the form with a real email.
3. Check `media@exventure.co` inbox for the activation email.
4. Click the activate link. Done — the integration is live.

## File map

```
EX Venture Site.html        — home page (entry point)
article.html                — article reader (loads ?id=<slug>)
styles.css                  — all visual styles
articles-data.js            — article content
nav-hero.jsx                — nav + hero
sections.jsx                — family, thesis, track record, research
founder-news.jsx            — founder, news, CTA, footer
book-call-modal.jsx         — book-a-call modal + FormSubmit wiring
article-view.jsx            — article reader component
tweaks-panel.jsx, tweaks.jsx — in-page tweaks panel
design-system/              — fonts + color tokens
assets/                     — photos, logos, founder portrait
vercel.json                 — Vercel routing config
```

## Routing

`vercel.json` rewrites the root URL to `EX Venture Site.html` and `/article` to `article.html`, so the deployed URLs look clean:

- `https://your-domain.com/` → home
- `https://your-domain.com/article?id=operators-discount` → article reader
