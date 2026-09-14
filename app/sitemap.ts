import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "", changeFrequency: "daily", priority: 1.0 },
    { path: "/firestick", changeFrequency: "weekly", priority: 0.9 },
    { path: "/faq", changeFrequency: "weekly", priority: 0.9 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.5 },
    {
      path: "/blog/firestick-setup-usa",
      changeFrequency: "weekly",
      priority: 0.85,
    },
    { path: "/llms.txt", changeFrequency: "monthly", priority: 0.3 },
    { path: "/llms-full.txt", changeFrequency: "monthly", priority: 0.2 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
