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
}) {
  const { siteUrl, siteName, description, whatsappE164, plans, faqs } = opts;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: { "@type": "ImageObject", url: `${siteUrl}/icon`, width: 512, height: 512 },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${whatsappE164}`,
          contactType: "customer support",
          availableLanguage: ["English", "Spanish"],
          areaServed: { "@type": "Country", name: "United States" },
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#service`,
        name: `${siteName} subscription`,
        serviceType: "IPTV streaming subscription",
        description,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
        url: siteUrl,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "IPTV USA plans",
          itemListElement: plans.map((p) => ({
            "@type": "Offer",
            name: `${p.name} plan`,
            price: String(p.price),
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
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
