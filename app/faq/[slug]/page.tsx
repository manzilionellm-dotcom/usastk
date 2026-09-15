import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LongformPage } from "@/components/longform-page";
import { FAQ_ARTICLES, faqBySlug } from "@/lib/content/faq-problems";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return FAQ_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = faqBySlug(slug);
  if (!article) return {};
  return {
    metadataBase: new URL(SITE_URL),
    title: article.title,
    description: article.description,
    alternates: { canonical: `${SITE_URL}${article.path}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}${article.path}`,
      title: article.title,
      description: article.description,
      locale: "en_US",
    },
  };
}

export default async function FaqProblemPage({ params }: Props) {
  const { slug } = await params;
  const article = faqBySlug(slug);
  if (!article) notFound();
  return <LongformPage article={article} />;
}
