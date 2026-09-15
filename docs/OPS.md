# Ops — Firestick USA (then copy the pattern)

Single WhatsApp for every brand: **+44 7307 410512** (`447307410512`).

## Redeploy

Git push to `main` on `manzilionellm-dotcom/usastk` triggers Vercel. If the CDN is stale:

1. Vercel → project **usastk** → Deployments
2. Latest Production → ⋯ → Redeploy (use existing build, or rebuild)
3. Hobby account: no team. MCP cannot set env or domains.

## Environment variables (Production + Preview)

| Key | Value |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_USA` | `447307410512` |
| `NEXT_PUBLIC_WHATSAPP_MZANSI` | `447307410512` |
| `NEXT_PUBLIC_WHATSAPP_VIP` | `447307410512` |
| `NEXT_PUBLIC_WHATSAPP_TVKING` | `447307410512` |
| `NEXT_PUBLIC_GA4_ID` | `G-XXXXXXXX` (paste yours) |
| `NEXT_PUBLIC_META_PIXEL_ID` | digits (paste yours) |

Empty GA4 / Pixel = scripts stay off even after consent. That is OK for week 1.

## Domains

- Apex `iptvforfirestickusa.com` with TLS.
- `www` → 301 apex (already in `next.config.ts`). Add **www** in Vercel, wait for cert, then the redirect works. A www visitor without cert is a lost lead.
- Optional week-2 hosts (same Vercel project, CNAME to `cname.vercel-dns.com`):
  - `blog.iptvforfirestickusa.com` → rewrites to `/blog`
  - `setup.iptvforfirestickusa.com` → rewrites to `/devices`
  - `faq.iptvforfirestickusa.com` → rewrites to `/faq`
  Canonical tags stay on the apex path. Do not index the same article twice.

## Add a blog article

1. Copy `lib/content/blog-week.ts` shape (or add `app/blog/<slug>/page.tsx`).
2. 800–1200 words, unique H1, FAQ block, WhatsApp CTA with city + device.
3. Link it from `app/blog/page.tsx` and `app/sitemap.ts`.
4. No invented reviews, no “official NFL / HBO / DStv / Sky”.

## GA4 events (only two automated)

| Event | Where |
| --- | --- |
| `page_view` | GA4 default |
| `whatsapp_click` | FAB, sticky, hero, plans (`data-cta`) after cookie consent |

**essai envoyé** and **payé** are a sheet this week: date, brand, city, device, trial Y/N, paid Y/N, plan. Import later as GA4 conversions when the Pixel ID exists.

Targets: visitor→WA ≥ 8 % mobile; WA→essai ≥ 70 %; essai→payé 48h ≥ 25 %. If WA click < 5 %, shorten the home again. If essai→payé < 20 %, fix product before ads.

## WhatsApp pack

Open `/ops` (noindex) on this site. Labels + two quick replies + J+0/J+1/J+2.

## Weekly metrics

Traffic (GA4) · WA click rate · trial rate · trial→paid. One row per week in the sheet.
