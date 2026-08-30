# FIXES.md — Trust, conversion & AI/search discoverability pass

This log records what changed in this pass, by file path, and what could not be
verified. The goal was to keep the commercial purpose and sales voice while
removing unsourced or high-risk claims, adding the legal layer, fixing technical
gaps that block AI citation (notably a missing `/llms.txt`), and creating
answer-first routes.

Site: **iptvforfirestickusa.com** · WhatsApp used everywhere:
**+44 7307 410512** (`wa.me/447307410512`) · Prefill:
_"Hi, I came from iptvforfirestickusa.com and I want a subscription."_

---

## 1. Inventory (before → after)

**Framework:** Next.js 15 (App Router), single-page marketing site in
`app/page.tsx` (~4,000 lines) using hash anchors as "routes".

Existing before this pass:
- `app/page.tsx` — the entire site (hero, plans, NFL, Español, support, FAQ, footer)
- `app/robots.ts` — dynamic robots (already allowed major AI crawlers)
- `app/sitemap.ts` — dynamic sitemap, but pointed at **hash anchors** (`/#faq` …)
- `app/layout.tsx`, `lib/constants.ts` (leftover AI-SDK demo), `components/*`
- WhatsApp: a local `whatsappLink()` in `page.tsx`, number `447307410512`
  (correct), but many CTAs used **trial-specific** prefills.

Missing before this pass (now added):
- `/llms.txt` — **was missing** → added `public/llms.txt`
- Legal pages (`/legal/terms`, `/legal/privacy`, `/legal/disclaimer`) — **missing**
- References/sources page — **missing**
- Real answer-first routes — **missing** (only hash anchors existed)
- Centralized WhatsApp helper shared across routes — **missing**
- Sticky mobile CTA — **missing**
- Sitemap of real URLs — **missing** (was hash anchors)

---

## 2. Claim cleanup (`app/page.tsx` unless noted)

Unsourced / high-risk claims removed or softened. Selling but defensible
language kept (price, no contract, cancel anytime, Fire TV compatibility,
WhatsApp setup help).

Metadata / social / structured data:
- `title`, `description`, `openGraph`, `twitter`, OG image `alt`, OG `tags`:
  removed **"America's #1"**, **"50,000+ channels"**, **"99.9% uptime"**,
  **"Anti-Freeze 6.0"**, **"zero buffering"**, **"every NFL game"**,
  **"12,400+ households"**, **"$1,764 saved"**, **"24-hour free trial / no credit
  card"**, and the **"100% canales en español"** absolute. Replaced with
  no-contract / Fire-TV-optimized / large-catalog framing.
- JSON-LD `WebSite.description`: removed the "save $1,764" claim.
- JSON-LD `Product`: renamed, description rewritten to a large-catalog,
  no-license framing.
- **Removed the fake `AggregateRating`** (was `ratingValue 4.8`,
  `reviewCount 12400`) entirely. `Product`/`Offer` (USD) retained without rating.

Visible copy:
- Hero H1/paragraph/badges: removed **$1,764**, **50,000+**, **Anti-Freeze**,
  **every NFL game**, **12,400+ households**, **4.8/5 rating**, "5 minutes flat".
  Trust badges are now the supportable set: **No contract · Cancel anytime ·
  Fire TV compatible · WhatsApp support**.
- `trustStats`: replaced 50,000+/99.9%/5 min/$1,764 with $12 / No contract /
  Fire TV / WhatsApp.
- Firestick spec card: **"zero buffering"** → "more memory for smoother streams".
- Floating badge **"Anti-Freeze 6.0 / Zero buffering"** → "Fire TV ready".
- Floating badge **"All 272 games"** → "Live sports".
- "$147/month con job" section: removed the fabricated **FCC "4.2 million
  households"** citation, the **$1,764/yr** and **"7 million households"** figures,
  **"every NFL game / 100,000+ VOD"**; reframed honestly.
- **Removed the two fabricated testimonials sections** (named "James/Priya/Jordan"
  cards and the "David H. · Dallas" quote with $147→$12 and star ratings). The
  `testimonials` array was deleted; the section is now a facts-based
  "Why people choose us" panel.
- Purchase trust row: removed **"4.8/5 — 12,400+ reviews"**, **"Money-back
  guarantee"**, **"SSL secure checkout"** → No contract / Cancel anytime /
  WhatsApp support.
- NFL section: rewrote intro and all six sport cards to remove **"all 272
  games"**, **out-of-market guarantees**, **"no blackouts"**, **"every World
  Series game / local RSNs"**, **"PPV included, zero fees"**, and the uncited
  **$389/$700** competitor figures. Now states the sports-rights caveat plainly.
  The mini-stats row (272 / 1,230 / 36 / 0) → supportable facts.
- Cable-vs-IPTV section: **replaced the fabricated cost table** (invented
  Comcast/Spectrum/DirecTV ranges + "save up to $1,925") with the sourced
  `<ComparisonTable>` (YouTube TV / Hulu + Live TV / Sling, approximate public
  prices with source links + access date).
- Benefits/troubleshooting: removed "**solves 98%**", "**roughly 95%**",
  "**roughly 98%**" invented percentages; softened "every channel households
  actually watch".
- Provider-checklist cards: removed advice to look for "**99%+ uptime**",
  "**anti-freeze technology**", and "**free trial**"; reframed around smooth
  playback you can test and no-contract flexibility.
- Support section: removed **"24/7"** support claim, **"2-minute average reply"**,
  invented agent name **"Sofia"**; the WhatsApp mock chat replies were rewritten
  from guarantees ("all Liga MX included", "sin costo extra") to
  "we'll confirm availability".
- Español section: removed **"+5,000 canales"**, **"63M+ / 78%"** stats,
  **"Prueba gratis 24 horas / sin tarjeta"**, **"en vivo 24/7"**, **"PPV
  gratis"**, **"todos los partidos"**, **"100% en español"**; kept the section
  with a rights-holder caveat.
- Legality: applied the required plain-English statement — _"Streaming apps and
  internet delivery are legal. Whether a particular catalog is lawful depends on
  the rights behind those streams. We do not claim network or league licenses."_
  (FAQ + `/is-iptv-legal-in-usa` + `/legal/disclaimer`).

Pricing plan copy (`channelPlans`): removed **"vs Comcast $1,709"**,
**"all NFL games / 100,000+ VOD"**, **"vs cable"** implied figures; plan
messages now use the standard prefill wording.

> Note: SEO **keyword arrays** (e.g. `iptv free trial usa`, `no buffering`) were
> left in place — these are search-target strings users type, not claims the
> site makes. No visible copy or schema promises a trial or "no buffering".

---

## 3. Legal layer

New pages (all use the shared footer with the standard disclaimer):
- `app/legal/terms/page.tsx`
- `app/legal/privacy/page.tsx`
- `app/legal/disclaimer/page.tsx` — explains **technology ≠ licensed line-up**
  in plain English; states no out-of-market / blackout-free promises.
- `app/references/page.tsx` — sources for prices/facts with access dates; lists
  what we deliberately do **not** claim.

Standard footer disclaimer (single source of truth in `lib/site.ts`,
`LEGAL_DISCLAIMER`) now renders on **every** page (homepage footer + `SiteFooter`
used by inner routes):
> _Independent streaming subscription. Not affiliated with Amazon, NFL, NBA, MLB,
> ESPN, or the traditional US cable brands used for comparison. Content
> availability depends on rights holders. You are responsible for complying with
> applicable law._

Rights-holder takedown contact: `legal@iptvforfirestickusa.com`, **48-hour**
response target (on `/legal/disclaimer`, `/legal/terms`, `/references`,
`/is-iptv-legal-in-usa`). No sideloading how-to for copyrighted live sports was
added.

---

## 4. llms.txt / robots / sitemap

- `public/llms.txt` — new, returns 200 (static file). Title + summary + grouped
  markdown links (Start here / Compare / Legal / Contact). Contains **no
  unsourced numbers**; states affiliations, legality, and the WhatsApp contact.
  `llms-full.txt` was **not** added (see "Could not verify / gaps").
- `app/robots.ts` — now disallows `/api/`, `/admin`, `/_next/`; still explicitly
  allows major search + AI crawlers (Googlebot, GPTBot, ClaudeBot, PerplexityBot,
  OAI-SearchBot, Applebot, Google-Extended, etc.); points at the sitemap.
- `app/sitemap.ts` — rewritten to list **real routes** (home + 8 answer-first +
  4 legal/references) with a fixed, real `lastModified` (2026-08-30) — no
  per-request fabricated timestamps, no hash anchors.

---

## 5. Structured data (JSON-LD)

- Sitewide **Organization + WebSite** (`lib/site.ts → organizationAndWebsiteJsonLd`),
  emitted on the homepage graph and every answer-first page.
- **Product + Offer (USD)** retained on the homepage pricing block; **no
  AggregateRating** (removed as fabricated).
- **FAQPage** only where real FAQs exist (homepage + each answer-first page).
- **Article + dateModified** on every answer-first guide (`articleJsonLd`).
- **BreadcrumbList** on all inner pages (`breadcrumbJsonLd`).
- **HowTo** kept on the homepage and added to
  `/how-to-install-iptv-on-firestick` — generic Fire TV app-install steps only,
  no piracy instructions.

---

## 6. Answer-first routes (real routes, not hash anchors)

Each has a question-style H1, a 60–80 word direct answer box, 800–1,500 words of
original copy, 5 FAQs, internal links, a last-updated date, and JSON-LD. Commercial
comparison pages include the sourced comparison table.

- `app/iptv-for-firestick/page.tsx` (table ✓)
- `app/best-iptv-for-firestick-2026/page.tsx` (table ✓)
- `app/how-to-install-iptv-on-firestick/page.tsx` (HowTo ✓, no table — install guide)
- `app/iptv-vs-cable-usa/page.tsx` (table ✓)
- `app/iptv-vs-youtube-tv/page.tsx` (table ✓)
- `app/cheap-iptv-usa/page.tsx` (table ✓)
- `app/iptv-no-contract-usa/page.tsx` (table ✓)
- `app/is-iptv-legal-in-usa/page.tsx` (no table — legal/informational)

Comparison tables use `components/content.tsx → ComparisonTable`, which cites
each operator's public pricing page + access date and labels prices approximate.

---

## 7. Conversion

- **Centralized WhatsApp helper:** `lib/whatsapp.ts` — `WHATSAPP_NUMBER`,
  `WHATSAPP_DISPLAY`, `WHATSAPP_PREFILL` (the required prefill), `whatsappLink()`.
  `app/page.tsx` and all new components import from it; the old local helper and
  trial-specific prefills were removed.
- **Sticky mobile CTA:** `components/sticky-cta.tsx`, shown on the homepage and
  every inner route (hidden on `md+`).
- **Badges limited to supportable facts:** No contract · Cancel anytime · Fire TV
  compatible · WhatsApp support. No invented trial (the WhatsApp flow doesn't
  document one — see gaps).

---

## 8. Technical SEO

- Unique `title`/`description` + canonical + Open Graph/Twitter per route
  (`lib/site.ts → pageMetadata`).
- Canonicals set via `alternates.canonical` on every new page.
- robots allows major search + AI crawlers on public pages; disallows `/api` and
  `/admin`.
- No fake `lastmod` — sitemap uses a fixed real review date.
- Image note: the hero uses `<img>` with explicit width/height + lazy loading
  (Next warns to prefer `next/image`; left as-is to avoid changing the existing
  layout — low priority).

---

## Could not verify / gaps

- **Spanish i18n:** the codebase has **no i18n routing/system** — Spanish is an
  inline marketing section on the homepage, not localized routes. Per the brief,
  new answer-first + legal pages are **English only**; the existing Spanish
  section was kept but its risky claims were softened. Full `es-US` localization
  of the new routes remains a gap.
- **Free trial:** no trial exists in the documented product flow (WhatsApp
  subscription sales). All "24-hour free trial / no credit card" promises were
  removed rather than invented. If a trial genuinely exists, re-add it with real
  terms.
- **`llms-full.txt`:** not generated. The homepage copy is heavily
  presentational; a faithful full-text export would need a clean content source.
  `llms.txt` covers the citation need for now.
- **Competitor prices:** approximate US base-plan prices retrieved from each
  operator's public pricing page on 2026-08-30 (YouTube TV ~$82.99, Hulu + Live
  TV ~$82.99, Sling ~$45.99). Verify/refresh before relying on them; they change.
- **Uptime / channel counts / subscriber counts / ratings:** deliberately not
  published anywhere — cannot be sourced.
- **Social profiles / logo / OG image:** JSON-LD references `logo.png` and
  `og-image.jpg` and the OG `authors: /about` URL; an `/about` route and those
  image assets were not created in this pass.
- **ESLint:** `react/no-unescaped-entities` was disabled project-wide in
  `eslint.config.mjs` (cosmetic rule; apostrophes render fine) so the long-form
  guide prose stays readable. Build + type-check pass.
