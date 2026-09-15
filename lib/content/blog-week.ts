import type { LongArticle } from "./types";

export const BLOG_ARTICLES: LongArticle[] = [
  {
    slug: "whatsapp-24h-trial",
    kind: "blog",
    path: "/blog/whatsapp-24h-trial",
    title: "What to send on WhatsApp for a 24h Firestick trial (USA)",
    description: "The exact first message: city + device. What happens in 10 minutes. Prices after the trial. No card, no public playlist.",
    h1: "What to send on WhatsApp for the 24h trial",
    eyebrow: "Blog · trial",
    lede: "The first message only needs two facts: your US city and the device you will watch on. Everything else (player name, login, whether Ethernet is required) is faster in the chat than on a long form. This is the week-1 article we send people who hover on the green button.",
    waMessage: "24h trial IPTV Firestick USA. City + device",
    waRef: "blog-trial",
    ctaLabel: "Send city + device now",
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
    sections: [
    {
      id: "what-not-to-send",
      h2: "What not to put in the first message",
      paragraphs: [
        "Do not send a list of fifty channel names. Do not send a screenshot of a competitor's website. Do not send a card number. Do not send someone else's login 'to copy the package'. Do not send a legal essay. City, device, optional MAG photo.",
        "If you already paid another seller this week, say so. We still trial. We just will not overlap two 24h windows on the same MAG MAC without deleting the other portal.",
        "Voice notes are fine after the first text. The first message should stay text so the closer can tag USA + Essai without transcribing. The number is +44 7307 410512 — same as the other brands, different chat, different label.",
        "Referral: after you pay a 12-month term, the /refer page explains +1 month for you and a friend. That is not a first-message topic. Trial first.",
      ]
    },
    {
      id: "after-hours",
      h2: "Hours, time zones, and what 'under ten minutes' means",
      paragraphs: [
        "We answer 08:00–23:00 US Eastern on this brand. A message at 01:00 from Las Vegas sits until morning. That is not a ignored lead — it is the SOP. If you need the trial for a game that starts in twenty minutes at 1 a.m., say the kickoff time anyway; we still will not pretend a sleeping closer is awake.",
        "Under ten minutes means: you already sent city + device, we are inside the window, and WhatsApp is delivering. It does not mean we bypass a blurry MAG photo or a 'hi' with no device. The first reply in that case is the question, not a login.",
        "J+1 is a single line: does it work on the device? J+2 is the price line once. If you need a day extra because you were traveling, say so on J+1. We can restart a trial. We do not silently extend every login, because then nobody tests.",
        "Payment is after the night works. We do not take a card on this website. We do not run a fake countdown. $12 / $25 / $30 / $55 are on the home page whether you message or not.",
        "One chat = this USA brand. If you also want the South Africa catalog, that is a different thread and a different label on the same number. Mixing them is how a Mzansi line lands on a Firestick that wanted the US player.",
      ]
    },
    {
      id: "message",
      h2: "The message",
      paragraphs: [
        "Use the prefill: '24h trial IPTV Firestick USA. City + device'. Add 'Houston, Firestick 4K' or 'Miami, Samsung 2022'. If you have a MAG, add the MAC photo. If you have a Formuler, add the model. Do not send a list of show names in the first line — we cannot provision a catalog from a wishlist.",
        "One chat, this brand. If you also saw the South Africa site, keep that in a separate thread so the login does not get mixed."
      ]
    },
    {
      id: "clock",
      h2: "What we do in ten minutes",
      paragraphs: [
        "We reply, send the player path (usually Downloader on Firestick), then a 24h login. No card. You install, you test a live channel on the Wi-Fi you actually use at night. If you cannot install, send a photo of the screen — do not start a second chat.",
        "J+1 we ask if the device held. J+2 we send the plan line once: $12 / $25 / $30 / $55. No fuzzy discounting in the thread."
      ]
    },
    {
      id: "pay",
      h2: "When to pay",
      paragraphs: [
        "Pay after the trial works on your screen. If Ethernet + 1080p still fails, say so. We fix the source or you walk away. We do not run a public review widget with invented names."
      ]
    },
    {
      id: "mistakes",
      h2: "Mistakes that waste the 24 hours",
      paragraphs: [
        "Installing three players at once. Pick the one we name.",
        "Testing on a phone hotspot in a parking lot, then declaring the service dead.",
        "Opening a second WhatsApp chat for the same house. We lose the MAC photo.",
        "Asking for official league guarantees. We will not write those. The trial shows the catalog.",
        "Paying before the night test because a countdown graphic felt urgent. There is no countdown. Prices are on the home page: $12 / $25 / $30 / $55.",
        "Copying a login into a Telegram group 'for backup'. That login will die.",
        "The useful first message remains: city + device. Everything else is faster as a reply, not as a novel."
      ]
    },
    ],
    faqs: [
      { q: "Do I need email?", a: "No. WhatsApp is the inbox." },
      { q: "Do I need a US number?", a: "No. The business number is +44 7307 410512. You can message it from a US WhatsApp." },
      { q: "Can I trial two devices?", a: "Say both in the first message so we set connections." },
      { q: "What if I miss J+2?", a: "Message again with city + device. Trials are not recovered from this website." }
    ],
    related: [
      { href: "/firestick", label: "Firestick setup" },
      { href: "/faq/wifi-5ghz", label: "5 GHz FAQ" },
      { href: "/refer", label: "Referral" }
    ],
  }
];

export function blogBySlug(slug: string) {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}
