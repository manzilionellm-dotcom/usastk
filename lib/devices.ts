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
    summary: "Downloader or the TV’s browser. We send the player on WhatsApp after the trial request.",
    steps: [
      "Open the app store on the TV (Samsung / LG / Hisense).",
      "Install Downloader (or the player we name on WhatsApp).",
      "Message WhatsApp with city + TV brand. We send the login for the 24h trial.",
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

export function deviceBySlug(slug: string) {
  return DEVICES.find((d) => d.slug === slug && d.slug !== "firestick");
}
