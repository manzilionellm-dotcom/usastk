# Mobile header navigation — 27 October 2026

Verified issue at PR22 head216e7a0: SiteHeader navigation is hidden below the md breakpoint and provides no mobile replacement. Phone users must find footer links to reach device/help/guides/referral pages. Existing sticky pricing and WhatsApp controls alone do not expose those destinations.

Adds one native details/summary Menu below the existing header row, limited to small viewports. It has a named Mobile navigation landmark, seven original desktop destinations,root /#plans pricing,focus-visible outlines and min-h-11 targets. Native disclosure remains closed by default and keyboard-operable by HTML semantics. The separate row avoids squeezing brand,Menu andWhatsApp into the original mobile header row. Desktop header,WhatsApp anchors/prefills/footer,stickyCTA,tracking/consent,prices USD12/25/30/55,contact447307410512,allcontent/schema/dependencies/lockfile unchanged. No client hook/listener/state ornewdependency.

Local baseline: new source2cases before0/2,after2/2. New rendered suite: four source-built routes (home,free-trial,FAQbuffering,SmartTV) must contain the native menu and all seven real links with pricing fragment; header WhatsApp access retained. Existing17cases retained,expected23total. Automatic CI includes old checks plus new6after build. No manual rerun orfrozen-install change.

Generated HTML/source checks are not a visual viewport/browser/keyboard/device execution. Real screenshot/physical playback andGA4receipt remain unverified. No traffic/indexation/lead/sale claim. No merge/production publication. Other source claims outside this targeted navigation fix remain unchanged.
