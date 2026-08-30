import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import {
  Breadcrumbs,
  WhatsAppCta,
  ComparisonTable,
  FaqList,
} from "@/components/content";
import { JsonLd } from "@/components/json-ld";
import {
  LAST_UPDATED_LABEL,
  organizationAndWebsiteJsonLd,
  articleJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/lib/site";

export type Section = { h2: string; paras: React.ReactNode[] };
export type Faq = { q: string; a: string };
export type Related = { href: string; label: string };

export type ArticleProps = {
  path: string;
  breadcrumbName: string; // short name for the breadcrumb tail
  h1: string;
  /** 60–80 word direct answer shown first. */
  answer: React.ReactNode;
  intro?: React.ReactNode;
  sections: Section[];
  showComparison?: boolean;
  comparison?: { ourPrice?: string; ourNote?: string };
  faqs: Faq[];
  related: Related[];
  /** Plain-text answer strings for FAQ JSON-LD. */
  faqSchema: Faq[];
  ctaMessage?: string;
  /** Extra JSON-LD nodes to merge into the page graph (e.g. HowTo). */
  extraJsonLd?: object[];
};

/**
 * Shared layout for answer-first guide pages. Renders the required elements:
 * question H1, a direct answer box, body sections, an optional sourced
 * comparison table, FAQs, internal links, a last-updated date, and JSON-LD
 * (Organization + WebSite + Article + FAQPage + BreadcrumbList).
 */
export function ArticleTemplate(props: ArticleProps) {
  const {
    path,
    breadcrumbName,
    h1,
    answer,
    intro,
    sections,
    showComparison,
    comparison,
    faqs,
    related,
    faqSchema,
    ctaMessage,
  } = props;

  const trail = [
    { name: "Home", path: "/" },
    { name: breadcrumbName, path },
  ];

  const graph = [
    ...organizationAndWebsiteJsonLd(),
    breadcrumbJsonLd(trail),
    articleJsonLd({ path, headline: h1, description: String(props.answer) }),
    faqJsonLd(path, faqSchema),
    ...(props.extraJsonLd ?? []),
  ];

  return (
    <PageShell stickyMessage={ctaMessage}>
      <JsonLd graph={graph} />
      <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
        <Breadcrumbs trail={trail} />
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          {h1}
        </h1>
        <p className="mt-3 text-sm text-[#6E7585]">
          Last updated {LAST_UPDATED_LABEL}
        </p>

        {/* Direct, answer-first summary */}
        <div className="mt-6 rounded-2xl border border-[#25D366]/30 bg-[#0E1a12] p-5">
          <p className="text-[15px] leading-relaxed text-[#E8EAEF]">
            <span className="font-semibold text-[#25D366]">Short answer: </span>
            {answer}
          </p>
        </div>

        {intro && (
          <p className="mt-6 text-[15px] leading-relaxed text-[#C6CBD6]">
            {intro}
          </p>
        )}

        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <section key={s.h2}>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight text-[#F5F6F8]">
                {s.h2}
              </h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#C6CBD6]">
                {s.paras.map((p, i) => (
                  <div key={i}>{p}</div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {showComparison && (
          <section className="mt-10">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight text-[#F5F6F8]">
              How the price compares
            </h2>
            <ComparisonTable
              ourPrice={comparison?.ourPrice}
              ourNote={comparison?.ourNote}
            />
          </section>
        )}

        {/* Mid-page CTA */}
        <div className="mt-10 rounded-2xl border border-[#1F2433] bg-[#121524] p-6 text-center">
          <p className="text-lg font-medium text-[#F5F6F8]">
            Want it set up on your Firestick?
          </p>
          <p className="mt-1 text-sm text-[#A8AEBC]">
            No contract, cancel anytime. From $12/month. We activate and help you
            install it over WhatsApp.
          </p>
          <WhatsAppCta className="mt-4" message={ctaMessage} />
        </div>

        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium tracking-tight text-[#F5F6F8]">
            Frequently asked questions
          </h2>
          <FaqList faqs={faqs} />
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-medium text-[#F5F6F8]">Related reading</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="block rounded-xl border border-[#1F2433] px-4 py-3 text-sm text-[#A8AEBC] transition hover:border-[#2A3142] hover:text-[#F5F6F8]"
                >
                  {r.label} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </PageShell>
  );
}
