# Homepage setup — 27 October 2026

Prepared in existing USASTK PR22, not merged or published.

## Verified problem

The homepage described different visible and JSON-LD installation steps, imposed a universal settings/Downloader route and asserted PT10M without model-specific timing evidence. Exact Fire TV models can run different systems; the manufacturer model table includes Fire OS and Vega OS. A brand name is not compatibility proof.

## Change

One three-step data source now feeds visible cards and HowTo, with position and matching fragment URLs. Confirm exact model/system/player/login before installing or paying; check regional store and publisher source and require compatible Fire OS before the conditional Downloader path; test authorized programmes privately and mask access in error screenshots. Remove unsupported duration. Update the small setup summary card to match. Preserve all prices, links, complete WhatsApp messages, attribution/consent, FAQ, other pages and dependencies.

## Tests

New source case: baseline 0/1 before, 1/1 after. New generated HTML case checks three visible/schema names and descriptions, order, actual unique fragment targets, omitted duration, canonical, original guide links, WhatsApp number and five complete trial/plan messages. Existing32cases retained. CI build/render result must be checked on this exact head before any success claim.

Source/HTML only; no browser, keyboard, physical Fire TV or actual GA4 event receipt claimed. Linked /firestick and lib/motion-path.ts still contain older timing/hardware claims; reviewed but unchanged and queued separately.

## Manufacturer evidence read 27 October 2026

- https://developer.amazon.com/docs/device-specs/identify-fire-tv-devices.html — model/system table.
- https://developer.amazon.com/docs/fire-tv/connecting-adb-to-device.html — menu differs on some software versions; developer ADB procedure, last updated28June2022. No debug procedure copied into customer flow.

No global outage, app availability, timing, traffic increase or production deployment inferred.
