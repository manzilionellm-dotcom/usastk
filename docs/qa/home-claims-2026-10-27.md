# Homepage activation/device claims — 27 October 2026
Base7b3ae1010aff823e882f2d7e9bcd67a18f13127a, PR22, existing branch.
Two visible hero bullet values change: unverified under-ten-minute activation and unqualified cross-device compatibility become confirmation of activation timing and exact model/system/player before payment.
All JSX structure, styles, metadata, HowTo, FAQ, mobile navigation, CTA tags, exact WhatsApp href/prefills, pricing12/25/30/55USD, contact447307410512, schema, analytics/consent, dependencies, lockfile and23existing tests unchanged. Reversing two string replacements reproduces app/page.tsx exactly.
Two regression cases: source and generated HTML. Existing suites cover pricing links, SmartTV compatibility, attribution/consent and four mobile-menu pages. Expected25total cases; CI/preview results must be checked before success claims. No physical-device/browser/GA4 receipt verification. No merge, production, manual retry, DNS/billing change.
FireTV setup instructions/HowTo and other homepage claims remain outside this narrow correction and require a separate review.
