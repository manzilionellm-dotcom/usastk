const FORBIDDEN_TYPES = new Set(["AggregateRating", "Review"]);

const FORBIDDEN_KEYS = new Set([
  "aggregateRating",
  "review",
  "reviews",
  "ratingValue",
  "reviewCount",
  "ratingCount",
  "bestRating",
  "worstRating",
]);

function typeIsForbidden(type: unknown): boolean {
  if (typeof type === "string") return FORBIDDEN_TYPES.has(type);
  if (Array.isArray(type)) {
    return type.some((t) => typeof t === "string" && FORBIDDEN_TYPES.has(t));
  }
  return false;
}

export function stripInventedRatings(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value
      .filter((item) => {
        if (item && typeof item === "object" && !Array.isArray(item)) {
          return !typeIsForbidden((item as { "@type"?: unknown })["@type"]);
        }
        return true;
      })
      .map(stripInventedRatings);
  }

  if (value && typeof value === "object") {
    if (typeIsForbidden((value as { "@type"?: unknown })["@type"])) {
      return undefined;
    }
    const out: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      if (FORBIDDEN_KEYS.has(key)) continue;
      const next = stripInventedRatings(child);
      if (next !== undefined) out[key] = next;
    }
    return out;
  }

  return value;
}

export function jsonLdInnerHtml(data: unknown): string {
  return JSON.stringify(stripInventedRatings(data)).replace(/</g, "\\u003c");
}

export function serviceOfferGraph(opts: {
  siteUrl: string;
  siteName: string;
  description: string;
  whatsappE164: string;
  plans: ReadonlyArray<{ name: string; price: number; months: number }>;
  faqs: ReadonlyArray<{ q: string; a: string }>;
  /** Product nodes already built (trial + paid terms). Appended once; does not replace OfferCatalog. */
  products?: readonly object[];
}) {
  const { siteUrl, siteName, description, whatsappE164, plans, faqs, products = [] } = opts;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/#service`,
        name: `${siteName} subscription`,
        serviceType: "IPTV streaming subscription",
        description,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
        url: siteUrl,
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `https://wa.me/${whatsappE164}`,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "IPTV USA plans",
          itemListElement: plans.map((p) => ({
            "@type": "Offer",
            name: `${p.name} plan`,
            price: p.price.toFixed(2),
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: `${siteUrl}/#plans`,
            seller: { "@id": `${siteUrl}/#organization` },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        inLanguage: "en-US",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      ...products,
    ],
  };
}
