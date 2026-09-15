export const DEVICES = [
  {
    slug: "firestick",
    name: "Amazon Firestick",
    path: "/firestick",
    summary: "Unknown sources → Downloader → player. 24h trial on WhatsApp.",
  },
  {
    slug: "samsung",
    name: "Samsung Smart TV (Tizen)",
    path: "/devices/samsung",
    summary: "Tizen 2018+ player install. PCM audio first. 24h trial, no card.",
  },
  {
    slug: "lg",
    name: "LG Smart TV (webOS)",
    path: "/devices/lg",
    summary: "Content Store or one-time browser. No developer-mode timer.",
  },
  {
    slug: "android",
    name: "Android TV / phone",
    path: "/devices/android",
    summary: "Play Store first, Downloader fallback. Trial on the screen you watch.",
  },
  {
    slug: "iphone",
    name: "iPhone / iPad",
    path: "/devices/iphone",
    summary: "App Store player only. No TestFlight. No jailbreak.",
  },
  {
    slug: "mag",
    name: "MAG box (Infomir)",
    path: "/devices/mag",
    summary: "MAC whitelist + Stalker portal. Photograph the sticker.",
  },
  {
    slug: "formuler",
    name: "Formuler (MyTVOnline)",
    path: "/devices/formuler",
    summary: "One MyTVOnline line. Ethernet for the 24h trial.",
  },
] as const;

export function deviceBySlug(slug: string) {
  return DEVICES.find((d) => d.slug === slug && d.slug !== "firestick");
}
