import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iptvforfirestickusa.com";
  const lastModified = new Date();

  const sectionAnchors = [
    "setup", "premium-channels", "nfl-iptv", "cable-vs-iptv",
    "us-channels", "top-providers", "apps", "troubleshooting", "faq",
  ];

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...sectionAnchors.map((anchor) => ({
      url: `${baseUrl}/#${anchor}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
