import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iptvforfirestickusa.com";
  // Real content-review date — not a fabricated per-request timestamp.
  const lastModified = new Date("2026-08-30T00:00:00Z");

  const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    // Answer-first, high-intent pages
    { path: "/iptv-for-firestick", priority: 0.9, freq: "weekly" },
    { path: "/best-iptv-for-firestick-2026", priority: 0.9, freq: "weekly" },
    { path: "/how-to-install-iptv-on-firestick", priority: 0.9, freq: "weekly" },
    { path: "/iptv-vs-cable-usa", priority: 0.8, freq: "monthly" },
    { path: "/iptv-vs-youtube-tv", priority: 0.8, freq: "monthly" },
    { path: "/cheap-iptv-usa", priority: 0.8, freq: "monthly" },
    { path: "/iptv-no-contract-usa", priority: 0.8, freq: "monthly" },
    { path: "/is-iptv-legal-in-usa", priority: 0.8, freq: "monthly" },
    // Legal
    { path: "/legal/terms", priority: 0.3, freq: "yearly" },
    { path: "/legal/privacy", priority: 0.3, freq: "yearly" },
    { path: "/legal/disclaimer", priority: 0.4, freq: "yearly" },
    { path: "/references", priority: 0.4, freq: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
