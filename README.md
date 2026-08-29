# Pushing Pressure LTD — Website

Production-ready marketing website for **Pushing Pressure LTD**, a pressure washing and
exterior cleaning company serving London, Surrey, Essex and Kent.

Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## Project structure

- `src/app` — routes (App Router). Every page has its own `generateMetadata`/`metadata` export
  for SEO, plus `sitemap.ts` and `robots.ts` for crawling.
- `src/components` — `layout/` (header, footer), `home/` (homepage sections), `services/`
  (service card + related UI), `forms/` (the quote/contact form), `shared/` (buttons, section
  headings, the `MediaPanel` background system, the before/after slider, etc).
- `src/lib` — `site-config.ts` (business details & nav), `services-data.ts` (the 7 services),
  `areas-data.ts` (London/Surrey/Essex/Kent + towns), `schema.ts` (JSON-LD builders).
- `src/app/api/enquiry/route.ts` — handles both the quote form and the contact form.

Services and areas each have their own dedicated, statically generated page
(`/services/[slug]`, `/areas-we-cover/[area]`) built from the data files above — add a new
entry to `services-data.ts` or `areas-data.ts` and a new page is generated automatically.

## Before you launch — placeholder content to replace

This was built without access to the client's real business details, logo file or project
photography. Everything below is a clearly-marked, professional placeholder — replace it
before going live:

1. **Phone numbers & email** (`src/lib/site-config.ts`) — currently use Ofcom's officially
   reserved fictitious ranges (`020 7946 09xx`, `07700 900xxx`) so they can't collide with a
   real subscriber. Swap in the real office/mobile numbers and inbox.
2. **Domain** (`siteConfig.url` in `site-config.ts`) — set to the real production domain. It
   feeds canonical URLs, the sitemap, Open Graph tags and JSON-LD.
3. **Logo** (`src/components/shared/Logo.tsx`) — a code-drawn wordmark + droplet mark in the
   brand colours, used because no logo file was supplied. Drop in the real logo (SVG
   preferred) and swap the markup, or keep this as a lightweight fallback.
4. **Photography** (`src/components/shared/MediaPanel.tsx` and `BeforeAfterSlider.tsx`) — every
   image slot on the site (hero backgrounds, service imagery, the before/after gallery) is a
   generated gradient/texture panel in the brand colours rather than a stock photo pretending
   to be real project photography. Once real job photos exist, replace `<MediaPanel>` /
   `<BeforeAfterSlider>` usages with `next/image` — the components are drop-in replaceable
   without touching page layout.
5. **Opening hours** (`site-config.ts`) — a sensible default (Mon–Sat, 7am–6pm) was set; confirm
   against the real schedule.
6. **Company registration details** — no Companies House number, VAT number or registered
   office address is shown anywhere, since none was provided. Add these to the footer if
   required for compliance.

## Contact form / email delivery

`src/app/api/enquiry/route.ts` validates and (optionally) emails every quote/contact
submission via [Resend](https://resend.com)'s HTTP API — no SDK dependency, just `fetch`.

Without configuration, submissions are still accepted (the user sees the normal success
state) but are only written to the server log, so **nothing is lost — but nothing is emailed
either.** Set these environment variables (e.g. in a `.env.local` file, or your host's
environment settings) to enable real delivery:

```bash
RESEND_API_KEY=re_xxx           # required to actually send email
CONTACT_TO_EMAIL=info@pushingpressure.co.uk   # defaults to siteConfig.email
CONTACT_FROM_EMAIL="Pushing Pressure Website <onboarding@resend.dev>"
```

## Design system

- **Colours**: near-black (`ink-*`) base, bright water-blue (`blue-*`) and neon lime
  (`lime-*`) as strategic accents — defined as Tailwind v4 theme tokens in
  `src/app/globals.css`.
- **Type**: Space Grotesk for headings, Inter for body text (both via `next/font/google`).
- **`MediaPanel`**: a reusable, code-generated background system (CSS gradients/patterns, no
  images) used for hero backgrounds, service imagery and the before/after gallery. It ships
  six "surface" textures (paving, brick, render, roof, decking, abstract) and four tone
  presets (before/after/brand/dusk).
