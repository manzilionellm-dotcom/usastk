# Samsung / LG compatibility guidance — 22 October 2026

Prepared from main `a779250291537935df1abd01b66cff85cb5e087a`. Existing PR20 changes only pricing navigation, package test registration and its navigation test; none of this change's paths overlap. No duplicate navigation work is included.

## Verified problem

The Smart TV device record told Samsung/LG visitors to install Downloader. The USA Smart TV article said both platforms had a Downloader-style app or browser and recommended a fixed ~$25 Firestick. These instructions also appeared in the compiled visible steps and HowTo JSON-LD. This is source/build evidence: the public reader could not access the two owned page URLs, so no fresh live HTTP result is asserted.

Samsung documents TV Web application packages; LG documents its webOS app packaging and app availability by model/region. The resulting guidance is to use a platform-compatible TV app and confirm availability, rather than treat Android APK/Downloader steps as universal. These sources do not establish availability of a named IPTV player, rights to any channel, or a hardware price.

Primary sources checked on 22 October 2026:

- https://developer.samsung.com/smarttv/develop/faq/application-testing.html
- https://webostv.developer.lge.com/develop/tools/webos-tv-cli-dev-guide
- https://www.lg.com/au/support/product-support/troubleshoot/help-library/cs-CT52001891-20154548998558/

## Change and validation

The Smart TV card/steps now distinguish Samsung Tizen, LG webOS and Android. The article checks the TV model, system and region before a trial, removes the unsupported hardware-price recommendation and uses the same visible steps for HowTo. A small shared server component renders dated Samsung/LG references only on the two Smart TV guides. No new client code, fetch, dependency, route or analytics collector.

- 104 original main files reconstructed from the previously authorized checkout plus the three differing main files, then verified against current main Git blob hashes before editing.
- Cached dependencies reused with the unchanged pnpm lockfile. Full `NODE_USE_SYSTEM_CA=1 corepack pnpm build`, `corepack pnpm type-check`, and `corepack pnpm lint`: exit0 (Next15.3.8, pnpm10.6.2, Node24.19.0). No ESLint warnings/errors. System TLS certificates used without disabling validation.
- `node --test scripts/smart-tv-compatibility.test.mjs`: 3/7 before, 7/7 after. Four checks reproduce the original compatibility/reference omissions. Tests inspect actual generated HTML and HowTo JSON-LD on three affected routes, not a browser.
- On five sampled pages, all WhatsApp URL sets, encoded messages, H1s and canonicals are identical before/after. Android/iPhone main HTML and all three other device records are unchanged. The same32 sitemap URLs remain. Total34 HTML files generated; no claim of a complete34-page audit.
- Only three original source files change: `lib/devices.ts`, the Smart TV article and the shared device page template. One server component, one test and this evidence note are added. Site/pricing modules, prefills, analytics/consent, referral offer, dependencies, lockfile and deployment configuration match main. IPTV prices USD12/25/30/55 and WhatsApp447307410512 are preserved.
- React review: existing server rendering retained, no new hook/effect/client boundary, conditional manufacturer references do not render on other device pages, list keys use stable URLs, external links have descriptive labels and noopener/noreferrer.

Affected existing routes: `/devices`, `/devices/smart-tv`, `/blog/iptv-smart-tv-usa`. No new pages. No browser/device playback, GA4 receipt, qualified conversation, sale or ranking change proven. No merge, production deployment, workflow rerun, external post, private message or spending. Required remote checks and production linkage must be verified before any publication.
