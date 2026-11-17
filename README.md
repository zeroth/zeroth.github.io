# zeroth.me

Personal profile page for Abhishek Patil. Astro static site, deployed to GitHub Pages, editable with Pages CMS.

## Edit content

Everything on the page comes from `src/data/profile.yml`. Edit it directly, or through [Pages CMS](https://app.pagescms.org): sign in with GitHub, open this repo, and the **Profile** entry (configured in `.pages.yml`) shows a form for every field. Images upload to `public/images/`.

- `links.github` / `links.scholar`: leave empty to hide them.
- `experience`: one slide per role, newest first. `specimen` is the headline result shown on the slide; `points` are the full record.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

Uses Astro 5 (works on Node 20). Astro 6+ needs Node 22.

## Deploy (GitHub Pages)

1. Push to GitHub (branch `main` or `master`).
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. `.github/workflows/deploy.yml` builds and publishes on every push.
4. Custom domain: `public/CNAME` holds `zeroth.me`. Point DNS at GitHub Pages
   (apex `A` records 185.199.108.153, .109.153, .110.153, .111.153, or an `ALIAS`/`ANAME` to `<user>.github.io`),
   then tick **Enforce HTTPS**.
