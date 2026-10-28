export const DEVICES = [
  {
    slug: "firestick",
    name: "Amazon Firestick",
    path: "/firestick",
    summary: "Unknown sources → Downloader → player. 24h trial on WhatsApp.",
  },
  {
    slug: "smart-tv",
    name: "Smart TV (Samsung / LG)",
    path: "/devices/smart-tv",
    summary: "Use a Samsung Tizen or LG webOS player from the TV's app store. Check model and region before the 24h trial.",
    steps: [
      "Check your TV model, system version and region. Samsung Tizen and LG webOS need apps built for those systems.",
      "Open the TV's Apps store or LG Content Store and check for a compatible player for your exact model and region.",
      "Do not follow Android APK or Downloader installation steps on Samsung Tizen or LG webOS. A browser download does not make an Android app compatible.",
      "Message WhatsApp with city + TV brand and model to confirm player and trial compatibility before paying. A separate player licence may be required.",
    ],
  },
  {
    slug: "android",
    name: "Android TV / phone",
    path: "/devices/android",
    summary: "Sideload or Play Store player. Trial first, no card.",
    steps: [
      "Enable unknown sources if the player is not on Play Store.",
      "Install the player we send on WhatsApp.",
      "Paste the login. Test 24h on your own Wi-Fi.",
    ],
  },
  {
    slug: "iphone",
    name: "iPhone / iPad",
    path: "/devices/iphone",
    summary: "App Store player + private login. No public playlist.",
    steps: [
      "Message WhatsApp: city + iPhone/iPad.",
      "Install the iOS player we name (no TestFlight required).",
      "Enter the trial login. If it works, pick a plan.",
    ],
  },
] as const;

export const SMART_TV_SOURCES = [
  {
    label: "Samsung: TV application compatibility",
    href: "https://developer.samsung.com/smarttv/develop/faq/application-testing.html",
  },
  {
    label: "LG: check apps for your TV model and region",
    href: "https://www.lg.com/au/support/product-support/troubleshoot/help-library/cs-CT52001891-20154548998558/",
  },
] as const;

export function deviceBySlug(slug: string) {
  return DEVICES.find((d) => d.slug === slug && d.slug !== "firestick");
}
