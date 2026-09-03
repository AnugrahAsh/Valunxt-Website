# VALUNXT Capital

The VALUNXT Capital website and admin panel, on Next.js 16 (App Router) and
TypeScript.

This is a direct port of the PHP build that preceded it. **The rendered page is
the same page**: the same Elementor markup, the same stylesheets in the same
order, the same scripts, the same copy, the same URLs. The whole of the PHP
source is kept verbatim in [`_php-backup/`](_php-backup) so any question about
"what did it used to do?" has an answer in the repository.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # tsc --noEmit
```

---

## How the site is put together

### Two editions, one set of pages

The site is published once per market, on its own URL prefix:

| Prefix    | Market                                        |
| --------- | --------------------------------------------- |
| `/en-in/` | India (the default)                           |
| `/en-ae/` | United Arab Emirates                          |

Only the home page genuinely differs per market, so only the home page has two
templates ([`HomeInBody`](src/components/pages/HomeInBody.tsx) and
[`HomeAeBody`](src/components/pages/HomeAeBody.tsx)). Every other page is one
component rendered under `src/app/[region]/…`, region-aware through
[`rurl()`](src/lib/region.ts) — which is why the header, the footer and every
in-page link keep the visitor in the market they arrived in.

A bare URL — the root, an old inbound link, a bookmark from before the split —
is forwarded to the visitor's edition by [`src/middleware.ts`](src/middleware.ts):
their last choice (cookie), then the country the host reports, then India. It is
a 302, because the answer depends on the visitor.

### Sections, not micro-components

Each page is the sequence of sections the PHP template required, in the same
order. A route file reads like the `index.php` it replaces:

```tsx
// src/app/[region]/faq/page.tsx
const { generateMetadata, Page } = definePage('/faq/', ({ page, region }) => (
  <>
    <PageHeroSection page={page} region={region} />
    <FaqSection region={region} />
    <SubscribeSection page={page} region={region} />
  </>
));
```

| Directory                                             | What lives there |
| ----------------------------------------------------- | ---------------- |
| [`src/components/layout/`](src/components/layout)      | The chrome: preloader, the three captured headers, the two captured footers, the mega menu, the region switcher, the cookie banner, the script block |
| [`src/components/sections/`](src/components/sections)  | Sections shared by more than one page: page hero, subscribe band, FAQ, community, platform, research list and detail, industries, leadership, testimonials, track record, blog article, clients advisory |
| [`src/components/pages/`](src/components/pages)        | One component per page body, where that body is unique to the page |
| [`src/app/`](src/app)                                  | Routes — thin files that name a page and list its sections |

### One route for pages that only differ by content

Where the PHP build had several near-identical files, there is now one route:

| Was                                        | Is now |
| ------------------------------------------ | ------ |
| 4 × `blogs/<slug>/index.php`               | [`app/[region]/blogs/[slug]/page.tsx`](src/app/[region]/blogs/[slug]/page.tsx) + [`src/data/articles.ts`](src/data/articles.ts) |
| 5 × `research/<slug>/index.php`            | [`app/[region]/research/[slug]/page.tsx`](src/app/[region]/research/[slug]/page.tsx) + the page registry |
| 4 × service pages, 4 × group company pages | still one component each — their bodies genuinely differ |
| Pages created in the admin panel           | [`app/[region]/[...slug]/page.tsx`](src/app/[region]/[...slug]/page.tsx), served from the database |

### The page registry

Every page's `$PAGE` declaration — body class, Elementor stylesheet list, header
and footer template, post id, hero, path — is transcribed into
[`src/data/page-configs.json`](src/data/page-configs.json) and typed by
[`PageConfig`](src/lib/page-config.ts). Two things read it: the page itself, and
the root layout, which has to put the WordPress body class on `<body>` and so
resolves the page from the URL that `middleware.ts` publishes as `x-vxn-path`.

### Why the styles cannot drift

- Every asset — CSS, JS, fonts, images, video — moved to `public/` unchanged.
  Nothing was re-minified, re-ordered or rewritten.
- [`HeadAssets`](src/components/layout/HeadAssets.tsx) emits the 53 stylesheets
  and 9 inline `<style>` blocks in the exact order `includes/head.php` did, from
  inside the real `<head>`. That interleaving *is* the cascade: `post-*.css`
  comes after the global inline styles, `valunxt-brand.css` after both.
- `next.config.ts` sets `images.unoptimized` — a rewritten `<img src>` would
  change the DOM the theme CSS is written against.
- Navigation uses plain `<a href>`, not `next/link`, so every page load re-runs
  jQuery, SmartMenus and the Elementor bundles against a fresh document — the
  same lifecycle they had under PHP.

---

## The admin panel

`/admin` — a separate application with its own stylesheet, never indexed, and
loading none of the site's Elementor cascade.

| Screen              | Route |
| ------------------- | ----- |
| Sign in             | `/admin/` |
| Dashboard           | `/admin/dashboard` |
| Enquiries           | `/admin/enquiries` |
| Pages & SEO         | `/admin/pages` |
| Page editor         | `/admin/pages/edit?id=N` or `?new=1` |
| Sitemap settings    | `/admin/sitemap` |

Default credentials, seeded into an empty `users` table on first connection:
`admin@valunxtcapital.com` / `Admin@123`. **Change them before the panel is
reachable from the internet**, and set `ADMIN_SESSION_SECRET` (see below).

Sessions are an HMAC-signed, httpOnly cookie rather than a PHP session — there is
no server-side session store to keep. Existing accounts keep working: PHP's
`password_hash()` bcrypt digests verify unchanged.

Saving a page rewrites two files, exactly as the PHP panel did:

- `public/sitemap.xml`
- `src/data/seo-map.json` — the map the public pages read, so a page view never
  opens a database connection and the site keeps rendering if MySQL is down.

**One deliberate difference.** The PHP panel created a new page by writing a
folder and an `index.php` to disk. A Next.js route cannot appear at runtime, so a
page created in the panel is stored in the database and served by the catch-all
route instead — through the same shared page-hero + subscribe body the scaffolded
file used. The page is live the moment it is saved, with no redeploy, which is
what the scaffolding was reaching for.

---

## Configuration

Copy `.env.example` to `.env.local` and fill in what applies. Everything has a
working default, so a fresh clone runs with no configuration at all.

| Variable                 | Purpose |
| ------------------------ | ------- |
| `NEXT_PUBLIC_SITE_ORIGIN`| Canonical/OG/sitemap origin when the request host is not authoritative |
| `DB_HOST` … `DB_PASS`    | MySQL for enquiries and the admin panel |
| `ADMIN_SESSION_SECRET`   | Signs the admin session cookie |
| `ADMIN_DEFAULT_*`        | The administrator seeded into an empty `users` table |

Without `DB_*`, the credentials fall back to what the PHP build shipped:
localhost/XAMPP when served from `localhost`, the Hostinger database otherwise.

---

## What moved where

| PHP                                   | Next.js |
| ------------------------------------- | ------- |
| `config.php`, `includes/region.php`   | [`src/lib/region.ts`](src/lib/region.ts), [`region-assets.ts`](src/lib/region-assets.ts) |
| `includes/site-data.php`              | [`src/lib/site-data.ts`](src/lib/site-data.ts) |
| `includes/seo.php`                    | [`src/lib/seo.ts`](src/lib/seo.ts) |
| `includes/head.php`                   | [`HeadAssets`](src/components/layout/HeadAssets.tsx) + `src/app/layout.tsx` |
| `includes/header.php`, `footer.php`   | [`PageShell`](src/components/layout/PageShell.tsx) |
| `includes/scripts.php`                | [`SiteScripts`](src/components/layout/SiteScripts.tsx) |
| `includes/preloader.php`              | [`Preloader`](src/components/layout/Preloader.tsx) |
| `includes/partials/*`                 | `src/components/layout/`, `src/components/sections/` |
| `includes/blog-catalog.php`           | [`src/data/blog-catalog.ts`](src/data/blog-catalog.ts) |
| `data/leadership.php` etc.            | `src/data/leadership.ts`, `testimonials.ts`, `track-record.ts` |
| `data/seo/seo-map.php`                | [`src/data/seo-map.json`](src/data/seo-map.json) |
| `form-handler.php`                    | [`src/app/form-handler/route.ts`](src/app/form-handler/route.ts) |
| `.htaccess` redirects                 | `redirects()` in [`next.config.ts`](next.config.ts) |
| `admin/*`                             | `src/app/admin/`, `src/lib/admin/`, `src/components/admin/` |
| `assets/`, `LOGO/`, `icons/`          | `public/` (byte-identical) |

Three data files ship empty **on purpose** — `leadership.ts`, `testimonials.ts`
and `track-record.ts`. Each carries the reason at the top; `/about/leadership/`
and `/track-record/` return 404 until they are filled in, exactly as before.
