import type { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";
import { DEVICES } from "@/lib/devices";
import { FAQ_ARTICLES } from "@/lib/content/faq-problems";
import { BLOG_ARTICLES } from "@/lib/content/blog-week";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iptvforfirestickusa.com";
  const lastModified = new Date();

  const staticPaths = [
    "",
    "/firestick",
    "/faq",
    "/blog",
    "/blog/firestick-setup-usa",
    "/blog/iptv-buffering-firestick",
    "/blog/iptv-smart-tv-usa",
    "/blog/firestick-24h-trial",
    "/devices",
    "/cities",
    "/refer",
    "/setup",
  ];

  const devicePaths = DEVICES.filter((d) => d.slug !== "firestick").map((d) => d.path);
  const cityPaths = CITIES.map((c) => `/cities/${c.slug}`);
  const faqPaths = FAQ_ARTICLES.map((a) => a.path);
  const blogPaths = BLOG_ARTICLES.map((a) => a.path);

  return [...staticPaths, ...devicePaths, ...cityPaths, ...faqPaths, ...blogPaths].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : path === "/refer" ? 0.7 : 0.85,
  }));
}
