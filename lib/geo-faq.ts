import { geoFaqItems } from "@/lib/aio";

/**
 * Answer-first FAQ for the Firestick setup guide.
 * Same strings as aio.config.json i18n.en.geoFaq. Published prices only.
 */
export const GEO_FAQ: { q: string; a: string }[] = geoFaqItems();

export function faqPageSchema(
  pageUrl: string,
  items: { q: string; a: string }[] = GEO_FAQ,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    inLanguage: "en-US",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
