# Automate USA WhatsApp regression checks — 22 October 2026

Starting PR22 head: `94f287ee264871149db07a4ef6d52de261936b2a`.

No GitHub Actions workflow exists at that head. The Vercel preview builds, but it does not execute the existing WhatsApp regression suite. The eight tests were only run locally during the original correction.

This branch now has a CI check for pull requests and pushes to main: frozen pnpm install, lint, TypeScript, build, then `node --test scripts/whatsapp-placement.test.mjs`. The test needs generated HTML, so it follows the build. Failures stop the check; no continue-on-error. The workflow token has contents:read only, a ten-minute job timeout, and cancellation of obsolete runs in the same workflow/ref. No deployment, secret, billing or production setting is added or changed.

Validation:

- All104 non-document build inputs match the starting PR head by Git blob SHA. Website source and cached build inputs are unchanged; no repeated local build.
- The exact test command passes8/8 locally. It executes the real delegate/tracker with simulated DOM, storage, effect registration and analytics sinks, reading actual hero anchor attributes from generated HTML.
- YAML parses; install/lint/typecheck/build/test order and read-only token are verified. Existing checkout/setup-node v4 and Node20 conventions match the other currently working CI checks. No package or lockfile change.
- Only this workflow and evidence note are added. USD12/25/30/55 prices, other-market WhatsApp447307410512, destinations, messages, consent/tracking source and features are unchanged. No overlap with PR20 pricing navigation or PR21 Smart TV source changes.

Inspect the new exact-head run separately; a local pass is not a remote pass. These tests are not browser interaction, device playback, GA4/Meta receipt, qualified leads or sales. No merge, production publication, manual workflow retry, external message or spending.
