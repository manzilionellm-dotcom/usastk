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
const TITLE = "IPTV Firestick USA — setup at home or traveling";
const META =
  "IPTV on Firestick in the USA: confirm setup and activation timing on WhatsApp before paying. 7 MOTION TV, 24h trial, no card. City + device.";
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
    name: "Message WhatsApp",
    text: "Use the ready WhatsApp prefill with your US city, exact Firestick model and system version. Before paying, confirm the player, regional availability and login format with support. No email form is needed.",
  },
  {
    name: "Take the 24h trial",
    text: "You get a 24-hour trial, no card. Check it in your living room at night, not on a screenshot.",
  },
  {
    name: "Prep the stick",
    text: "Check the documented requirements for the model, player and authorized stream before changing a setting. Record the time, error and whether one channel or all channels are affected. If your setup supports it, compare Wi-Fi and Ethernet one variable at a time; do not assume the cause or a guaranteed resolution.",
  },
  {
    name: "Install 7 MOTION",
    text: "Confirm that 7 MOTION supports the exact model, system and login format before installing. Check the regional store or a source confirmed by the publisher and follow that version’s instructions. If availability is unclear, ask support. Mask passwords, tokens and private URLs in support screenshots.",
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
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-normal leading-tight tracking-tight md:text-5xl">
          {H1}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#A8AEBC]">
          Confirm your exact device, compatible player and current setup and
          activation timing on WhatsApp before paying. Allow time to test on
          your own connection during the 24h trial; a successful trial does
          not guarantee future playback. Login details stay in that chat.
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
            6 steps — confirm timing before paying
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
            Confirm the player and current setup timing for your exact device before paying. Test an authorized stream on the connection you intend to use; a home test does not establish availability on a hotel network or guarantee future playback. Login details stay in the same WhatsApp chat. We do not publish a public playlist on this site.
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
