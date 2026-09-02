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

This was built without access to the client's real business details or project photography.
Everything below is a clearly-marked, professional placeholder — replace it before going live:

1. **Phone numbers & email** (`src/lib/site-config.ts`) — currently use Ofcom's officially
   reserved fictitious ranges (`020 7946 09xx`, `07700 900xxx`) so they can't collide with a
   real subscriber. Swap in the real office/mobile numbers and inbox.
2. **Domain** (`siteConfig.url` in `site-config.ts`) — set to the real production domain. It
   feeds canonical URLs, the sitemap, Open Graph tags and JSON-LD.
3. **Logo** (`public/logo.jpg`, rendered by `src/components/shared/Logo.tsx`) — the real supplied
   logo, on a flat white background. It's used as-is in the (white) header and mobile drawer;
   on the navy footer it's wrapped in a small white plate (`variant="dark"`) so it stays
   legible. Swap in a transparent-background version (PNG/SVG) when one is available and the
   white-plate wrapper can be dropped.
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
7. **Reviews/testimonials** — deliberately not included. A fabricated review or star rating
   attributed to a real platform (Trustpilot, Google, etc.) would be a fake-review claim, not a
   placeholder — add a real widget once the business has genuine reviews to show.

## Contact form / email delivery

`src/app/api/enquiry/route.ts` validates every quote/contact submission, verifies it with
reCAPTCHA v3, then sends two emails via [Resend](https://resend.com) (`src/lib/resend.ts`,
using the official `resend` SDK):

- An **admin notification** to `CONTACT_TO_EMAIL`, addressed to Mr. YOHOU, Jeff, with the
  submitted details and `reply_to` set to the customer's email.
- A **customer confirmation** back to whoever submitted the form, summarising what they sent
  and giving them a direct phone number for anything urgent. This one is best-effort — if it
  fails, the request still succeeds, since the enquiry has already reached the business via
  the admin email.

Without `RESEND_API_KEY` configured, submissions are still accepted (the user sees the normal
success state) but are only written to the server log, so **nothing is lost — but nothing is
emailed either.** Set these environment variables (e.g. in a `.env.local` file, or your host's
environment settings) to enable real delivery:

```bash
RESEND_API_KEY=re_xxx           # required to actually send email
CONTACT_TO_EMAIL=pushingpressureltd@outlook.com   # defaults to siteConfig.email
CONTACT_FROM_EMAIL="Pushing Pressure LTD <no-reply@pushingpressureltd.com>"
```

**Before this can send from `no-reply@pushingpressureltd.com`**, that domain must be added and
verified in the Resend dashboard (Domains → Add Domain → add the SPF/DKIM DNS records it
gives you). Until it's verified, sends from that address will fail — Resend's own sandbox
address (`onboarding@resend.dev`) works immediately with no setup if you need to test sooner.

### reCAPTCHA v3

`src/lib/recaptcha.ts` verifies a token (obtained client-side in `EnquiryForm.tsx` via
`grecaptcha.execute`) against Google's `siteverify` endpoint, rejecting submissions that fail
or score below `0.5`. The v3 script is loaded site-wide in `src/app/layout.tsx`; it shows
Google's small "protected by reCAPTCHA" badge in the bottom-right corner — that badge must
stay visible (don't add CSS to hide it) per Google's terms of service unless the same
disclosure text is shown elsewhere on the page.

```bash
RECAPTCHA_SECRET_KEY=...              # server-side verification; skipped entirely if unset
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=...    # public — loaded client-side, safe to expose
```

## Design system

- **Colours**: white/light-grey page body, deep navy (`ink-*`) for the header-adjacent hero,
  the "Fast, Friendly & Reliable Results" banner and the footer, with bright water-blue
  (`blue-*`) as the primary CTA/accent colour and neon lime (`lime-*`) used sparingly for
  small highlights — defined as Tailwind v4 theme tokens in `src/app/globals.css`. Two focus
  ring utilities exist: `.focus-ring` (default, for light sections) and `.focus-ring-dark`
  (for content sitting on a navy band) — use whichever matches the section's background.
- **Type**: Space Grotesk for headings, Inter for body text (both via `next/font/google`).
- **`MediaPanel`**: a reusable, code-generated background system (CSS gradients/patterns, no
  images) used for hero backgrounds, service imagery and the before/after gallery. It ships
  six "surface" textures (paving, brick, render, roof, decking, abstract) and four tone
  presets (before/after/brand/dusk).
- **`SectionHeading`**: takes a `tone` prop (`"light"` for white sections, `"dark"` for navy
  bands) that flips its text colours accordingly — always pass the one matching the section.
