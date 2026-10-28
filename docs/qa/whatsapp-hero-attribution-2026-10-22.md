# WhatsApp hero attribution — 22 October 2026

Starting main: `a779250291537935df1abd01b66cff85cb5e087a`.

## Verified defect

The generated `/free-trial` and `/faq` hero links carry `data-surface="free-trial-hero"` and `data-surface="faq-hero"`, but no `data-cta` or `data-wa`. The global delegate only read those latter attributes, so both hero clicks reached the existing tracker with placement `link`.

The delegate now uses `data-surface` as the final named fallback before `link`. Existing `data-cta` and `data-wa` precedence stays intact. Event names, payload fields, consent gate, listener lifecycle, destinations and CTA copy are unchanged. No new collector, dependency, analytics identifier or data field is introduced.

## Validation

- The 103 non-document build-input files match main Git blob hashes before editing. Main has 104 blobs including one document; no AGENTS.md or CLAUDE.md is present. The only existing source change is `components/conversion/WaClickDelegate.tsx`.
- `node --test scripts/whatsapp-placement.test.mjs`: 6/8 tests pass before the change, with only the two hero placements failing as generic `link`; 8/8 pass after, also rerun against the final build.
- Tests execute the actual TypeScript delegate and tracker, loading actual consent constants. Anchor attributes come from generated page HTML. DOM targets, storage, React effect registration and analytics sinks are simulated. Checks cover nested-target clicks, existing placement precedence, generic fallback, unrelated links, rejected/absent/blocked consent, listener cleanup and payload privacy.
- Full Next.js15.3.8 build, separate TypeScript and ESLint checks exit0; lint has no warnings or errors. Cached locked dependencies reused, without installation or resolution.
- On five generated pages (home, free trial, FAQ, Firestick and Smart TV), main HTML, WhatsApp URL occurrences/prefills, canonical tags and H1s remain identical before/after. All32 sitemap URLs remain unchanged.
- Pricing USD12/25/30/55, contact447307410512, source messages, consent/tracker, configurations, dependencies and lockfile remain unchanged.
- Independent of PR20 pricing navigation and PR21 Smart TV compatibility: no overlapping changed source path. Their changes are not copied into this branch.

This verifies local placement selection, not browser interaction or receipt in GA4/Meta. A click is not a qualified conversation or sale. No analytics connection, growth measurement, production publication or playback is claimed.

Prepared only. Verify required exact-head controls and the production project mapping before merge or deployment. No manual Actions rerun, workflow removal, billing/DNS change, external response, private message or spending.
