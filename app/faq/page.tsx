import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader, WhatsAppCard } from "@/components/site-chrome";
import { FAQ_BANK, FAQ_H1, FAQ_META, FAQ_TITLE } from "@/lib/faq-bank";
import {
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  WA_PREFILL,
  whatsappHref,
} from "@/lib/site";

const PAGE_PATH = "/faq";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = FAQ_TITLE;
const META = FAQ_META;
const H1 = FAQ_H1;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: TITLE },
  description: META,
  keywords: [
    "iptv firestick usa faq",
    "iptv firestick trial",
    "firestick iptv setup",
    "7 motion tv firestick",
    "iptv vs cable usa",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-US": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    type: "website",
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const faq = FAQ_BANK;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "en-US",
  url: PAGE_URL,
  name: TITLE,
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: SITE_NAME, item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "FAQ", item: PAGE_URL },
  ],
};

const wa = whatsappHref(WA_PREFILL.faq);

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#0B0E16] font-[family-name:var(--font-body)] text-[#F5F6F8] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <SiteHeader active="faq" />

      <article className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[#6E7585]">
          <Link href="/" className="hover:text-[#F5F6F8]">
            {SITE_NAME}
          </Link>
          <span className="mx-2">›</span>
          <span>FAQ</span>
        </nav>

        <p className="text-xs font-semibold tracking-[0.16em] text-[#4F7DFF]">
          FAQ · TRIAL · FIRESTICK · 7 MOTION · WHATSAPP
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-normal leading-tight tracking-tight md:text-5xl">
          {H1}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#A8AEBC]">
          Ten short answers for Firestick buyers in the USA — trial, setup,
          buffering, cable, sports. If yours is not here, WhatsApp with your
          city and device.
        </p>

        <div className="mt-8">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            data-event="cta_primary"
            data-surface="faq-hero"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1FB855]"
          >
            Ask on WhatsApp — city + device
          </a>
        </div>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium">
            Questions
          </h2>
          <div className="mt-6 space-y-3">
            {faq.map((f, i) => (
              <details
                key={f.q}
                open={i < 2}
                className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5"
              >
                <summary className="cursor-pointer text-base font-semibold">
                  {f.q}
                </summary>
                <p className="mt-3 mb-0 text-[#A8AEBC]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <WhatsAppCard prefill={WA_PREFILL.faq} surface="faq-contact" />
        </div>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium">
            Related
          </h2>
          <ul className="mt-4 space-y-2 text-[#93c5fd]">
            <li>
              <Link href="/firestick" className="hover:underline">
                → IPTV on Firestick — 7 MOTION TV
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                → Home — IPTV For Firestick USA
              </Link>
            </li>
            <li>
              <a
                href={wa}
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
