"use client";

import { usePathname } from "next/navigation";
import { JsonLd } from "@/components/json-ld-script";
import { organizationSchema, websiteSchema } from "@/lib/motion-path";
import { isNeutralPath } from "@/lib/neutral";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/** Plain graph for neutral guides: names and URLs only, no contact channel or commercial description. */
const NEUTRAL_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: SITE_NAME, url: SITE_URL },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

/**
 * Site-level Organization + WebSite graph, once per page (pages reference it by @id).
 * usePathname resolves at prerender, so the right graph is in the static HTML.
 */
export function SiteGraph() {
  const path = usePathname();
  if (isNeutralPath(path)) return <JsonLd data={NEUTRAL_GRAPH} />;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [organizationSchema(), websiteSchema()],
      }}
    />
  );
}
