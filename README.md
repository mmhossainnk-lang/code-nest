# Vaultix

A modern marketplace for software and app licenses — design, developer, security,
business, and media software with instant activation. Built with Next.js 16,
React 19, TypeScript, and Tailwind CSS.

## Tech stack

- **Next.js 16** (App Router, Turbopack, Cache Components / PPR)
- **React 19** — including native View Transitions for the browse → detail flow
- **TypeScript**
- **Tailwind CSS v4**
- **Lemon Squeezy** for checkout (see [SETUP.md](SETUP.md))

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in the values you need:

```bash
cp .env.local.example .env.local
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Your deployed domain. Used for the sitemap, canonical links, and social-share images. Defaults to `http://localhost:3000`. |
| `NEXT_PUBLIC_LEMONSQUEEZY_STORE_SUBDOMAIN` | Optional | Enables live checkout. See [SETUP.md](SETUP.md). Without it, license buttons show a "coming soon" state. |
| `LEMONSQUEEZY_API_KEY` | Optional | Server-side only. For future API calls (e.g. looking up license keys in the webhook handler). |
| `LEMONSQUEEZY_WEBHOOK_SECRET` | Optional | Verifies incoming Lemon Squeezy webhook requests. |

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  app/
    page.tsx                 Home
    products/page.tsx        Product catalog (search, filter, sort)
    products/[slug]/page.tsx Product detail (license tiers, checkout)
    api/webhooks/lemonsqueezy Order fulfillment webhook
    sitemap.ts, robots.ts     SEO file conventions
    opengraph-image.tsx       Dynamic social-share images
    error.tsx, not-found.tsx  Error and 404 boundaries
  components/                 Navbar, ProductCard, LicenseTierCard, etc.
  lib/
    products.ts               Product catalog data
    lemonsqueezy.ts            Checkout config/helpers
    site.ts                    Site URL helper
```

## Deploying

This is a standard Next.js app and deploys cleanly to
[Vercel](https://vercel.com/new) (recommended) or any Node host that supports
Next.js.

### Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Add the environment variables from the table above in the project's
   **Settings → Environment Variables** (at minimum, set
   `NEXT_PUBLIC_SITE_URL` to your production domain once you know it).
4. Deploy. Vercel runs `npm run build` automatically.

### Other hosts

```bash
npm run build
npm run start
```

Set the same environment variables in your host's dashboard or `.env`
file before starting the server.

### Before going live

- [ ] Set `NEXT_PUBLIC_SITE_URL` to your real domain (affects sitemap, OG images, canonical URLs)
- [ ] Complete the [Lemon Squeezy setup](SETUP.md) if you want live checkout
- [ ] Replace the placeholder product catalog in `src/lib/products.ts` with your real titles
- [ ] Update contact/support details in [`Footer.tsx`](src/components/Footer.tsx)
