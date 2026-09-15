import type { Metadata } from "next";
import Link from "next/link";
import { CiteableFaq } from "@/components/citeable-faq";
import { RelatedGeoLinks } from "@/components/related-links";
import { SiteFooter, SiteHeader, WhatsAppCard } from "@/components/site-chrome";
import { faqPageSchema } from "@/lib/geo-faq";
import { jsonLdInnerHtml } from "@/lib/json-ld";
import {
  MOTION_HOWTO_DESCRIPTION,
  MOTION_STEPS,
  motionHowToSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/motion-path";
import {
  GUIDE_URL,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  WA_PREFILL,
  whatsappHref,
} from "@/lib/site";

const TITLE = "Firestick setup USA — 7 MOTION path";
const META =
  "Set up Firestick IPTV in the USA in 7 MOTION steps. Soft WhatsApp walkthrough, 24h trial, no public playlist, no invented ratings.";
const H1 = "Firestick setup USA — 7 MOTION, one night at home";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: TITLE },
  description: META,
  alternates: { canonical: GUIDE_URL },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: GUIDE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: META,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
  robots: { index: true, follow: true },
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema(),
    websiteSchema(),
    {
      "@type": "Article",
      "@id": `${GUIDE_URL}#article`,
      headline: TITLE,
      description: META,
      inLanguage: "en-US",
      mainEntityOfPage: GUIDE_URL,
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    motionHowToSchema(GUIDE_URL),
    faqPageSchema(GUIDE_URL),
  ],
};

const wa = whatsappHref(WA_PREFILL.guide);

export default function FirestickSetupUsaGuidePage() {
  return (
    <main className="min-h-screen bg-[#0B0E16] font-[family-name:var(--font-body)] text-[#F5F6F8] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdInnerHtml(graph) }}
      />
      <SiteHeader />
      <article className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#4F7DFF]">
          GUIDE · 7 MOTION · FIRESTICK USA · 24H TRIAL
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-normal leading-tight tracking-tight md:text-5xl">
          {H1}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#A8AEBC]">
          {MOTION_HOWTO_DESCRIPTION} Short version on{" "}
          <Link href="/firestick" className="text-[#93c5fd] hover:underline">
            /firestick
          </Link>
          .
        </p>
        <div className="mt-8">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1FB855]"
          >
            WhatsApp — Firestick IPTV USA + trial
          </a>
        </div>
        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium">
            The 7 MOTION steps
          </h2>
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
        <div className="mt-12">
          <WhatsAppCard prefill={WA_PREFILL.guide} surface="guide-contact" />
        </div>
        <CiteableFaq title="Citeable answers" />
        <RelatedGeoLinks exclude={["guide"]} />
      </article>
      <SiteFooter />
    </main>
  );
}
