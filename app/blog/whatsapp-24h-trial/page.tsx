import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LongformPage } from "@/components/longform-page";
import { blogBySlug } from "@/lib/content/blog-week";
import { SITE_URL } from "@/lib/site";

const article = blogBySlug("whatsapp-24h-trial");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: article?.title,
  description: article?.description,
  alternates: { canonical: `${SITE_URL}${article?.path ?? "/blog/whatsapp-24h-trial"}` },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${article?.path ?? "/blog/whatsapp-24h-trial"}`,
    title: article?.title,
    description: article?.description,
    locale: "en_US",
  },
};

export default function BlogTrialPage() {
  if (!article) notFound();
  return <LongformPage article={article} />;
}
