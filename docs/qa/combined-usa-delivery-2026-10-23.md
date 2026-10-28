# Combined USA Firestick delivery — 23 October 2026

Prepared integration in existing PR22. No main merge or production release.

## Verified starting heads
- main: a779250291537935df1abd01b66cff85cb5e087a.
- PR20: 12224f5ba388d4f39e01db95f21acdda4b2f435e (pricing navigation).
- PR21: 217ffa7ba49281880f010fd08c3208a801d0f2ea (Samsung/LG compatibility).
- PR22: 597b8f40483f4be4038d22e282ed6e0f4ec1d805 (WhatsApp placement and consent CI).
All share the same base. No AGENTS.md or CLAUDE.md in the complete recursive tree. README contains starter setup instructions only.

## Compatibility and preservation
All ten imported file paths are identical to main in PR22, or absent in both. They are copied by exact Git blob SHA from PR20/21; no manual source adaptation. PR22's delegate, tracker, consent and test remain unchanged. package.json imports only the existing pricing-test script; dependency versions and pnpm lockfile are unchanged. USD12/25/30/55, WhatsApp447307410512, prefills and site configuration stay unchanged.
Shared layout/CTA fix links to /#plans from inner routes. Smart TV server pages distinguish Tizen/webOS from Android APK instructions; dated manufacturer references retain their22October verification date. No new route, client boundary, listener, fetch or dependency. Existing scroll listener/passive cleanup remains unchanged; reference links keep descriptive text and safe new-tab attributes.

## Combined CI
Retain frozen install, lint, independent TypeScript, build and the8 WhatsApp placement/consent tests. Add the unchanged2 pricing navigation tests (44destination assertions) and7 Smart TV generated-HTML/HowTo tests to the same check after build:17tests expected. No continue-on-error, manual retry or deployment step.

Remote exact-head result must be read from Actions/job logs before marking this integration validated. The report and PR description record the final head/run/preview after completion. Source PRs20/21 remain open until the combined validation succeeds, then may close unmerged as superseded; branches/history remain.

## Limits
Browser, physical TV/player playback and actual GA4/Meta event receipt remain unverified. A simulated consented click is not a qualified lead or sale. Existing proof of a live navigation defect is dated21October; this is not a new live-domain observation. Green CI/preview does not verify required branch controls or production project/domain mapping. No production, DNS, billing, spend or external outreach.
