/**
 * Sitewide constants, legal copy, sourced competitor pricing, and JSON-LD
 * builders. Anything that must stay consistent across routes lives here.
 */

export const SITE_URL = "https://iptvforfirestickusa.com";
export const SITE_NAME = "IPTV For Firestick USA";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** The date the current guide copy was last reviewed. Keep this real. */
export const LAST_UPDATED = "2026-08-30";
export const LAST_UPDATED_LABEL = "August 30, 2026";

/**
 * Standard legal disclaimer shown in the footer of every public page.
 * Kept as a single source of truth so the wording never drifts.
 */
export const LEGAL_DISCLAIMER =
  "Independent streaming subscription. Not affiliated with Amazon, NFL, NBA, " +
  "MLB, ESPN, or the traditional US cable brands used for comparison. Content " +
  "availability depends on rights holders. You are responsible for complying " +
  "with applicable law.";

/** Plain-English legality statement reused across legal and answer-first pages. */
export const LEGALITY_STATEMENT =
  "Streaming apps and internet delivery are legal. Whether a particular catalog " +
  "is lawful depends on the rights behind those streams. We do not claim network " +
  "or league licenses.";

/** Rights-holder takedown contact + response target. */
export const TAKEDOWN_EMAIL = "legal@iptvforfirestickusa.com";
export const TAKEDOWN_RESPONSE_TARGET = "48 hours";

/**
 * Competitor pricing used in comparison tables.
 * Prices are approximate US base-plan prices at the access date and should be
 * labelled "approximate" wherever shown. Cite the source URL + access date.
 */
export const PRICING_ACCESS_DATE = "August 30, 2026";

export type Competitor = {
  name: string;
  approxPrice: string; // USD, base plan, approximate
  note: string;
  source: string; // operator's public pricing page
};

export const COMPETITORS: Record<
  "youtubeTv" | "huluLiveTv" | "sling",
  Competitor
> = {
  youtubeTv: {
    name: "YouTube TV",
    approxPrice: "$82.99/mo",
    note: "Base Plan, approximate",
    source: "https://tv.youtube.com/",
  },
  huluLiveTv: {
    name: "Hulu + Live TV",
    approxPrice: "$82.99/mo",
    note: "with ads, approximate",
    source: "https://www.hulu.com/live-tv",
  },
  sling: {
    name: "Sling TV",
    approxPrice: "$45.99/mo",
    note: "Orange or Blue, approximate",
    source: "https://www.sling.com/",
  },
};

/** Facts we can support — used for badges. No trials, ratings, or counts. */
export const SUPPORTED_BADGES = [
  "No contract",
  "Cancel anytime",
  "Fire TV compatible",
  "WhatsApp support",
] as const;

/** Organization + WebSite JSON-LD, shared sitewide. */
export function organizationAndWebsiteJsonLd() {
  return [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      areaServed: { "@type": "Country", name: "United States" },
      knowsLanguage: ["en-US"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        "US-focused resource for streaming on Amazon Fire TV and Firestick — " +
        "setup guides, honest comparisons, and a subscription activated over WhatsApp.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
  ];
}

/** Build per-route Next.js metadata with canonical + Open Graph. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "article" as const,
      locale: "en_US",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

/** Article JSON-LD for a guide page. */
export function articleJsonLd({
  path,
  headline,
  description,
}: {
  path: string;
  headline: string;
  description: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    image: [OG_IMAGE],
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    datePublished: "2026-01-10",
    dateModified: LAST_UPDATED,
    mainEntityOfPage: url,
    inLanguage: "en-US",
  };
}

/** FAQPage JSON-LD. */
export function faqJsonLd(path: string, faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}${path}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
    inLanguage: "en-US",
  };
}

/** BreadcrumbList JSON-LD for an inner page. */
export function breadcrumbJsonLd(
  trail: { name: string; path: string }[]
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  };
}
