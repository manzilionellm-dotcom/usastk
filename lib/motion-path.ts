import { SITE_NAME, SITE_URL, WHATSAPP_HREF_BASE } from "@/lib/site";

/** Canonical 7 MOTION path — visible copy and HowTo schema must stay in sync (no cloaking). */
export const MOTION_STEPS = [
  {
    name: "Message WhatsApp",
    text: "One note is enough: Firestick IPTV USA + trial, plus your US city and that you have a Firestick. The prefill is ready — no email form.",
  },
  {
    name: "Start the 24-hour trial",
    text: "You get a private 24-hour trial, no card. Check it on your own TV. Access stays in the chat — we do not publish a public playlist on this site.",
  },
  {
    name: "Prep the Firestick",
    text: "Put the Firestick on 5 GHz Wi-Fi, or a short Ethernet adapter if you have one. Lite is fine at 1080p; 4K Max is calmer for sport.",
  },
  {
    name: "Install 7 MOTION",
    text: "On Firestick we prefer 7 MOTION — faster start, less sideload from a forum. The player and steps arrive on the same WhatsApp thread.",
  },
  {
    name: "Enter the chat details",
    text: "Start data stays on WhatsApp. Do not hunt a public playlist file on the open web.",
  },
  {
    name: "Check a night at home",
    text: "A game or a show on your own screen. If it holds, then you pick a duration — not before.",
  },
  {
    name: "Choose a duration if it holds",
    text: "Soft next step on the same WhatsApp thread. No invented star ratings, no public file to download, no cloaking.",
  },
] as const;

export const MOTION_HOWTO_NAME =
  "How to set up Firestick IPTV USA with 7 MOTION (7 steps)";
export const MOTION_HOWTO_DESCRIPTION =
  "Seven short steps for Firestick in the USA: WhatsApp, 24h trial, prep the stick, install 7 MOTION, enter chat details, watch a night at home, then pick a duration if it holds. No public playlist. No invented ratings.";

export function motionHowToSchema(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${pageUrl}#howto`,
    name: MOTION_HOWTO_NAME,
    description: MOTION_HOWTO_DESCRIPTION,
    totalTime: "PT10M",
    inLanguage: "en-US",
    tool: [
      { "@type": "HowToTool", name: "Amazon Firestick" },
      { "@type": "HowToTool", name: "7 MOTION" },
    ],
    supply: [
      {
        "@type": "HowToSupply",
        name: "WhatsApp chat with city + device (no public playlist file)",
      },
    ],
    step: MOTION_STEPS.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${pageUrl}#step-${i + 1}`,
    })),
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "IPTV For Firestick USA — WhatsApp setup for Amazon Firestick in the United States. Prefers 7 MOTION. Private 24-hour trial. No public playlist. No invented ratings.",
    areaServed: { "@type": "Country", name: "United States" },
    knowsLanguage: ["en-US", "es", "fr"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: WHATSAPP_HREF_BASE,
      availableLanguage: ["English", "Spanish", "French"],
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      "Firestick IPTV USA: 7 MOTION setup, 24-hour trial on WhatsApp. No public playlist. No invented star ratings.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}
