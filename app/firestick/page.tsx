import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader, WhatsAppCard } from "@/components/site-chrome";
import {
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  WA_PREFILL,
  WHATSAPP_HREF_BASE,
  whatsappHref,
} from "@/lib/site";

const PAGE_PATH = "/firestick";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

/* Seo Wa paste-ready USA Firestick site — title + meta */
const TITLE = "IPTV Firestick USA — soft setup at home or traveling";
const META =
  "IPTV on Firestick in the USA. Soft WhatsApp setup in 5–10 min, 7 MOTION TV, 24h trial. City + device.";
const H1 = "IPTV Firestick USA — at home or traveling";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: TITLE },
  description: META,
  keywords: [
    "iptv firestick usa",
    "firestick iptv setup",
    "iptv 24h trial firestick",
    "whatsapp iptv usa",
    "amazon fire tv stick iptv",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-US": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: PAGE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: META,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: META,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

const steps = [
  {
    name: "Message WhatsApp",
    text: "One note is enough: your US city plus that you have a Firestick. The prefill is ready — no email form.",
  },
  {
    name: "Take the soft 24h trial",
    text: "You get a 24-hour trial, no card. Check it in your living room at night, not on a screenshot.",
  },
  {
    name: "Prep the stick",
    text: "Put the Firestick on 5 GHz Wi-Fi, or a short Ethernet adapter if you have one. Lite is fine at 1080p; 4K Max is calmer for sport.",
  },
  {
    name: "Install 7 MOTION",
    text: "On Firestick we prefer 7 MOTION — faster start, less sideload from a forum. The player and steps arrive on WhatsApp.",
  },
  {
    name: "Enter the chat details",
    text: "Start data stays on the same WhatsApp thread. Do not hunt a public playlist on the open web.",
  },
  {
    name: "Check a night at home",
    text: "A game or a show on your own TV. If it holds, then you pick a plan — not before.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: TITLE,
  description: META,
  totalTime: "PT10M",
  inLanguage: "en-US",
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
    url: `${PAGE_URL}#step-${i + 1}`,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: SITE_NAME, item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Firestick", item: PAGE_URL },
  ],
};

const wa = whatsappHref(WA_PREFILL.firestick);

export default function FirestickHowToPage() {
  return (
    <main className="min-h-screen bg-[#0B0E16] font-[family-name:var(--font-body)] text-[#F5F6F8] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <SiteHeader active="firestick" />

      <article className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[#6E7585]">
          <Link href="/" className="hover:text-[#F5F6F8]">
            {SITE_NAME}
          </Link>
          <span className="mx-2">›</span>
          <span>Firestick</span>
        </nav>

        <p className="text-xs font-semibold tracking-[0.16em] text-[#4F7DFF]">
          FIRESTICK · 7 MOTION · WHATSAPP · 24H TRIAL
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-normal leading-tight tracking-tight md:text-5xl">
          {H1}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#A8AEBC]">
          Firestick in a US living room or in a hotel. Soft setup is usually 5–10
          minutes. Prefer 7 MOTION. Trial 24h on WhatsApp — no public playlist
          link.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1FB855]"
          >
            Start the 24h trial on WhatsApp
          </a>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-full border border-[#2A3142] px-6 py-3.5 text-sm font-semibold text-[#F5F6F8] transition hover:border-[#4F7DFF]"
          >
            Soft FAQ
          </Link>
        </div>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium">
            6 steps — about 10 minutes
          </h2>
          <ol className="mt-6 space-y-5">
            {steps.map((s, i) => (
              <li
                key={s.name}
                id={`step-${i + 1}`}
                className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5"
              >
                <p className="text-xs font-semibold tracking-wide text-[#4F7DFF]">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-[#A8AEBC]">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium">
            Why 7 MOTION on Firestick
          </h2>
          <p className="mt-4 leading-relaxed text-[#A8AEBC]">
            US Wi-Fi and hotel networks vary. 7 MOTION is the player we send for
            a short start: same chat, same night, then you decide. We do not
            publish a public playlist on this site.
          </p>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
            <h3 className="font-semibold">Home or traveling</h3>
            <p className="mt-2 text-sm text-[#A8AEBC]">
              HDMI, Wi-Fi, and your own screen. Tell us the city (New York,
              Dallas, Los Angeles, Miami…) and the stick model.
            </p>
          </div>
          <div className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
            <h3 className="font-semibold">Soft trial first</h3>
            <p className="mt-2 text-sm text-[#A8AEBC]">
              24 hours, no card. If an evening at your place holds, then you
              choose a duration — still on WhatsApp.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <WhatsAppCard prefill={WA_PREFILL.firestick} surface="firestick-contact" />
        </div>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium">
            Related
          </h2>
          <ul className="mt-4 space-y-2 text-[#93c5fd]">
            <li>
              <Link href="/" className="hover:underline">
                → Home — IPTV For Firestick USA
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">
                → FAQ — trial & setup
              </Link>
            </li>
            <li>
              <a
                href={`${WHATSAPP_HREF_BASE}?text=${encodeURIComponent(WA_PREFILL.firestick)}`}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                → WhatsApp — city + device
              </a>
            </li>
          </ul>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
