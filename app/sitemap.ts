import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iptvforfirestickusa.com";
  const lastModified = new Date();

  const paths = ["", "/firestick", "/faq", "/blog", "/blog/firestick-setup-usa"];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1.0 : path.includes("firestick-setup") ? 0.85 : 0.9,
  }));
}
