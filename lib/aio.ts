import config from "../aio.config.json";
import { SITE_NAME, SITE_URL } from "@/lib/site";

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

export type Crumb = { name: string; path: string };

/**
 * BreadcrumbList for the real URL hierarchy. The first item is always the home
 * page (named like the existing /faq, /firestick and /free-trial breadcrumbs).
 */
export function breadcrumbNode(crumbs: readonly Crumb[]) {
  const all: Crumb[] = [{ name: SITE_NAME, path: "/" }, ...crumbs];
  return {
    "@type": "BreadcrumbList" as const,
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: c.name,
      item: c.path === "/" ? SITE_URL : `${SITE_URL}${c.path}`,
    })),
  };
}

/**
 * FAQPage + Product (+ BreadcrumbList) for a sales page that does not already emit
 * those nodes. Organization/WebSite come once from the root layout (seller @id resolves there).
 */
export function salesGraph(pageUrl: string, items?: readonly Faq[], crumbs?: readonly Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      faqPageNode(pageUrl, items),
      ...productNodes(),
      ...(crumbs ? [breadcrumbNode(crumbs)] : []),
    ],
  };
}

/** Product nodes only. Use when FAQPage already exists. Organization comes from the root layout. */
export function productGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [...productNodes()],
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
