import { SITE_NAME, SITE_URL, WHATSAPP_E164, WHATSAPP_HREF_BASE } from "@/lib/site";

/** Canonical 7 MOTION path — visible copy and HowTo schema must stay in sync. */
export const MOTION_STEPS = [
  {
    name: "Message WhatsApp",
    text: "Use the ready WhatsApp prefill with your US city, exact Firestick model and system version. Before paying, confirm the player, its availability for that model and region, and the login format with support. No email form is needed.",
  },
  {
    name: "Start the 24-hour trial",
    text: "You get a private 24-hour trial, no card. Check it on your own TV. Access stays in the chat — we do not publish a public playlist on this site.",
  },
  {
    name: "Prep the Firestick",
    text: "Check the documented requirements for your model, player and authorized stream before changing the network. Note the time, error and whether one channel or all channels are affected. If your setup supports it, compare Wi-Fi and Ethernet one variable at a time; do not assume the cause or a guaranteed resolution.",
  },
  {
    name: "Install 7 MOTION",
    text: "Confirm that 7 MOTION supports the exact model, system and login format before installing. Check the regional store or a source confirmed by the publisher, and follow that version’s instructions. Ask support if availability is unclear; do not install an unverified forum file. Mask passwords, tokens and private URLs in support screenshots.",
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
    text: "If the night at home holds, pick a duration on the same WhatsApp thread. Login details stay in that chat.",
  },
] as const;

export const MOTION_HOWTO_NAME =
  "How to set up Firestick IPTV USA with 7 MOTION (7 steps)";
export const MOTION_HOWTO_DESCRIPTION =
  "Seven short steps for Firestick in the USA: WhatsApp, 24h trial, prep the stick, install 7 MOTION, enter chat details, watch a night at home, then pick a duration if it holds.";

export function motionHowToSchema(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${pageUrl}#howto`,
    name: MOTION_HOWTO_NAME,
    description: MOTION_HOWTO_DESCRIPTION,
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
      "IPTV For Firestick USA — WhatsApp setup for Amazon Firestick in the United States. Prefers 7 MOTION. Private 24-hour trial on +44 7307 410512.",
    areaServed: { "@type": "Country", name: "United States" },
    knowsLanguage: ["en-US", "es", "fr"],
    // app/icon.tsx is a static metadata route (prerendered PNG at /icon).
    logo: { "@type": "ImageObject", url: `${SITE_URL}/icon` },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: WHATSAPP_HREF_BASE,
      telephone: `+${WHATSAPP_E164}`,
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
      "Firestick IPTV USA: 7 MOTION setup and a 24-hour trial on WhatsApp.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}
