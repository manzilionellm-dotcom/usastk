import config from "../aio.config.json";
import { organizationSchema } from "@/lib/motion-path";

type Faq = { q: string; a: string };

export const aio = config;

const en = config.i18n.en;

export function faqItems(): Faq[] {
  return en.faq;
}

export function geoFaqItems(): Faq[] {
  return en.geoFaq;
}

export function trialFaqItems(): Faq[] {
  return en.trialFaq;
}

export function bufferingFaqItems(): Faq[] {
  return en.bufferingFaq;
}

/** Product nodes for the published trial and the four paid terms. No image, no rating. */
export function productNodes() {
  const url = config.siteUrl;
  return config.plans.map((p) => ({
    "@type": "Product" as const,
    "@id": `${url}/#product-${p.id}`,
    name: `${config.siteName} – ${p.name}`,
    description:
      p.price === 0
        ? "Private 24 hour Firestick trial on WhatsApp. No card. No public playlist."
        : en.productDescription.replace("{name}", p.name),
    brand: { "@type": "Brand" as const, name: config.siteName },
    offers: {
      "@type": "Offer" as const,
      url: p.price === 0 ? `${url}/free-trial` : `${url}/#plans`,
      price: p.price.toFixed(2),
      priceCurrency: config.currency,
      availability: "https://schema.org/InStock",
      seller: { "@id": `${url}/#organization` },
    },
  }));
}

export function faqPageNode(pageUrl: string, items: readonly Faq[] = faqItems()) {
  return {
    "@type": "FAQPage" as const,
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    inLanguage: "en-US",
    mainEntity: items.map((f) => ({
      "@type": "Question" as const,
      name: f.q,
      acceptedAnswer: { "@type": "Answer" as const, text: f.a },
    })),
  };
}

/** FAQPage + Product for a sales page that does not already emit those nodes. */
export function salesGraph(pageUrl: string, items?: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), faqPageNode(pageUrl, items), ...productNodes()],
  };
}

/** Product nodes only, plus Organization so seller @id resolves. Use when FAQPage already exists. */
export function productGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), ...productNodes()],
  };
}

export function howToNode(opts: {
  pageUrl: string;
  name: string;
  description: string;
  steps: readonly { name: string; text: string }[];
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo" as const,
    "@id": `${opts.pageUrl}#howto`,
    name: opts.name,
    description: opts.description,
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    inLanguage: "en-US",
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep" as const,
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${opts.pageUrl}#step-${i + 1}`,
    })),
  };
}
