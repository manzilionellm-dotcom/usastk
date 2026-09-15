export type LongSection = {
  id: string;
  h2: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LongArticle = {
  slug: string;
  kind: "setup" | "city" | "faq" | "blog";
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lede: string;
  waMessage: string;
  waRef: string;
  ctaLabel: string;
  datePublished: string;
  dateModified: string;
  sections: LongSection[];
  steps?: { name: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
};
