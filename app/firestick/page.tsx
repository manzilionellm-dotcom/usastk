import type { Metadata } from "next";
import Link from "next/link";
import { AioCitationHooks } from "@/components/aio-citation-hooks";
import { AioTranscript } from "@/components/aio-transcript";
import { JsonLd } from "@/components/json-ld-script";
import { SiteFooter, SiteHeader, WhatsAppCard } from "@/components/site-chrome";
import { faqItems, salesGraph } from "@/lib/aio";
import { jsonLdInnerHtml } from "@/lib/json-ld";
import { FIRESTICK_H1 } from "@/lib/page-copy";
import {
  SITE_NAME,
  SITE_URL,
  WA_PREFILL,
  WHATSAPP_HREF_BASE,
  whatsappHref,
} from "@/lib/site";

const PAGE_PATH = "/firestick";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

/* Seo Wa paste-ready USA Firestick site — title + meta */
const TITLE = "Fire TV Stick setup in the US: check your model and player";
const META =
  "Identify your Fire TV Stick, check Fire OS or Vega OS compatibility and test playback on your home network. Ask about your exact model on WhatsApp.";
const H1 = FIRESTICK_H1;

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
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: PAGE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: META,
    images: [
      {
        url: `${PAGE_URL}/opengraph-image`,
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
    images: [`${PAGE_URL}/twitter-image`],
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
    name: "Identify your Fire TV Stick",
    text: "Open Settings, My Fire TV, then About. Write down the full model and generation. The 4K Select and 2026 Stick HD use Vega OS.",
  },
  {
    name: "Check player and trial availability",
    text: "Send your model and city on WhatsApp. Ask which player works and whether a weekday trial is available.",
  },
  {
    name: "Prep the stick",
    text: "Put the Firestick on 5 GHz Wi-Fi, or a short Ethernet adapter if you have one. Lite is fine at 1080p; 4K Max is calmer for sport.",
  },
  {
    name: "Install a compatible player",
    text: "Use the listing in the Appstore for your model when available. An Android APK requires a compatible Fire OS stick. On Vega OS, look for a Vega-compatible app.",
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
          __html: jsonLdInnerHtml(howToSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdInnerHtml(breadcrumbSchema),
        }}
      />
      <JsonLd data={salesGraph(PAGE_URL)} />

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
        <h1 id="page-heading" tabIndex={-1} className="mt-4 font-[family-name:var(--font-display)] text-4xl font-normal leading-tight tracking-tight md:text-5xl">
          {H1}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#A8AEBC]">
          Check the full model in Settings before downloading a player. The 4K Select and 2026 Stick HD use Vega OS. Find your model in the{" "}
          <a className="underline" href="https://developer.amazon.com/docs/device-specs/identify-fire-tv-devices.html">Amazon device table</a>.
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
            FAQ
          </Link>
        </div>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium">
            Six setup and playback checks
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
          <AioTranscript transcript={null} />
        </section>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium">
            Why 7 MOTION on Firestick
          </h2>
          <p className="mt-4 leading-relaxed text-[#A8AEBC]">
            If your device supports 7 MOTION, test it on the TV and network you will actually use. Tell support the model, your city and whether the test is at home or on hotel Wi-Fi.
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
            <h3 className="font-semibold">24h trial first</h3>
            <p className="mt-2 text-sm text-[#A8AEBC]">
              24 hours, no card. If an evening at your place holds, then you
              choose a duration — still on WhatsApp.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <WhatsAppCard prefill={WA_PREFILL.firestick} surface="firestick-contact" />
        </div>

        <AioCitationHooks title="Questions" items={faqItems()} />

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
              <Link href="/faq/buffering" className="hover:underline">
                → Buffering FAQ — freezes after 8pm
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                → Guides — setup, buffering, Smart TV, trial
              </Link>
            </li>
            <li>
              <Link href="/devices" className="hover:underline">
                → Other devices — Smart TV, Android, iPhone
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
