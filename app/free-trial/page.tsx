import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader, WhatsAppCard } from "@/components/site-chrome";
import { jsonLdInnerHtml } from "@/lib/json-ld";
import {
  MOTION_STEPS,
  motionHowToSchema,
} from "@/lib/motion-path";
import {
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  WA_PREFILL,
  whatsappHref,
} from "@/lib/site";

const PAGE_PATH = "/free-trial";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const TITLE = "Free 24h Firestick trial USA — WhatsApp only";
const META =
  "Soft 24-hour Firestick trial in the USA. WhatsApp only — no public playlist. Prefer 7 MOTION when offered. Link to setup and FAQ.";
const H1 = "Free 24h Firestick trial — WhatsApp only";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: TITLE },
  description: META,
  keywords: [
    "firestick 24h trial usa",
    "free iptv trial firestick",
    "whatsapp firestick trial",
    "7 motion firestick trial",
    "iptv firestick usa trial",
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
};

const trialFaqs = [
  {
    q: "How do I start the 24h Firestick trial?",
    a: "Message WhatsApp only. The prefill is ready — add your device. You get a private 24-hour trial, no card. Access stays in the chat; we do not publish a public playlist on this site.",
  },
  {
    q: "Is the trial on WhatsApp only?",
    a: "Yes. WhatsApp is the only start path for the soft 24h Firestick trial. No email form, no public M3U download on this site.",
  },
  {
    q: "What is 7 MOTION and when do I get it?",
    a: "On Firestick we soft-sell 7 MOTION when it is offered — a short player start on the same WhatsApp thread. Prefer it for a calmer night at home; you still decide after the trial holds.",
  },
  {
    q: "Do I need a plan before the trial ends?",
    a: "No. Check an evening on your own TV first. If it holds, pick a duration on the same WhatsApp thread — not before.",
  },
  {
    q: "Where is the Firestick setup guide?",
    a: "See /firestick for the soft setup steps, and /faq for short answers on trial, buffering, and devices.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  inLanguage: "en-US",
  url: PAGE_URL,
  name: TITLE,
  mainEntity: trialFaqs.map((f) => ({
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
    { "@type": "ListItem", position: 2, name: "Free trial", item: PAGE_URL },
  ],
};

const howToSchema = motionHowToSchema(PAGE_URL);

const wa = whatsappHref(WA_PREFILL.trial);

export default function FreeTrialPage() {
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
          __html: jsonLdInnerHtml(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdInnerHtml(breadcrumbSchema),
        }}
      />

      <SiteHeader />

      <article className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[#6E7585]">
          <Link href="/" className="hover:text-[#F5F6F8]">
            {SITE_NAME}
          </Link>
          <span className="mx-2">›</span>
          <span>Free trial</span>
        </nav>

        <p className="text-xs font-semibold tracking-[0.16em] text-[#4F7DFF]">
          FREE TRIAL · 24H · FIRESTICK · WHATSAPP ONLY · 7 MOTION
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-normal leading-tight tracking-tight md:text-5xl">
          {H1}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#A8AEBC]">
          Soft 24-hour Firestick trial for the USA. WhatsApp only — add your
          device in the prefill. No public playlist on this site. When 7 MOTION
          is offered, we prefer it for a short, calm start on your stick.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            data-event="cta_primary"
            data-surface="free-trial-hero"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1FB855]"
          >
            Start 24h trial on WhatsApp
          </a>
          <Link
            href="/firestick"
            className="inline-flex items-center justify-center rounded-full border border-[#2A3142] px-6 py-3.5 text-sm font-semibold text-[#F5F6F8] transition hover:border-[#4F7DFF]"
          >
            Firestick setup
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-full border border-[#2A3142] px-6 py-3.5 text-sm font-semibold text-[#F5F6F8] transition hover:border-[#4F7DFF]"
          >
            Soft FAQ
          </Link>
        </div>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium">
            What you get
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
              <h3 className="font-semibold">Private 24 hours</h3>
              <p className="mt-2 text-sm text-[#A8AEBC]">
                No card. Check a night on your own TV. Details stay in the
                WhatsApp thread.
              </p>
            </div>
            <div className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
              <h3 className="font-semibold">WhatsApp only</h3>
              <p className="mt-2 text-sm text-[#A8AEBC]">
                One chat path. We do not publish a public M3U or playlist file
                on this site.
              </p>
            </div>
            <div className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
              <h3 className="font-semibold">Soft-sell 7 MOTION</h3>
              <p className="mt-2 text-sm text-[#A8AEBC]">
                When offered, prefer 7 MOTION for Firestick — faster start, less
                forum sideload. Player steps arrive in the same chat.
              </p>
            </div>
            <div className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
              <h3 className="font-semibold">Decide after it holds</h3>
              <p className="mt-2 text-sm text-[#A8AEBC]">
                If an evening at home holds, then pick a duration — still on
                WhatsApp. No invented star ratings here.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium">
            7 MOTION path — soft sell when offered
          </h2>
          <p className="mt-4 leading-relaxed text-[#A8AEBC]">
            Same seven short steps as our Firestick setup. Prefer 7 MOTION when
            we offer it; you still watch first, then choose.
          </p>
          <ol className="mt-6 space-y-5">
            {MOTION_STEPS.map((s, i) => (
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
            Trial FAQ
          </h2>
          <div className="mt-6 space-y-3">
            {trialFaqs.map((f, i) => (
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
          <WhatsAppCard prefill={WA_PREFILL.trial} surface="free-trial-contact" />
        </div>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium">
            Related
          </h2>
          <ul className="mt-4 space-y-2 text-[#93c5fd]">
            <li>
              <Link href="/firestick" className="hover:underline">
                → Firestick setup — 7 MOTION
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">
                → FAQ — trial &amp; setup
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
                → WhatsApp — 24h trial (device)
              </a>
            </li>
          </ul>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
