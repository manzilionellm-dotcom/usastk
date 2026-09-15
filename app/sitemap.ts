import type { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";
import { DEVICES } from "@/lib/devices";

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
    "/devices",
    "/cities",
    "/refer",
  ];

  const devicePaths = DEVICES.filter((d) => d.slug !== "firestick").map((d) => d.path);
  const cityPaths = CITIES.map((c) => `/cities/${c.slug}`);

  return [...staticPaths, ...devicePaths, ...cityPaths].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : path === "/refer" ? 0.7 : 0.85,
  }));
}
