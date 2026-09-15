import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import type { LongArticle } from "@/lib/content/types";
import { jsonLdInnerHtml } from "@/lib/json-ld";
import { SITE_NAME, SITE_URL, whatsappHref } from "@/lib/site";

export function LongformPage({ article }: { article: LongArticle }) {
  const url = `${SITE_URL}${article.path}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    inLanguage: "en-US",
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon` },
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howToLd = article.steps
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: article.h1,
        totalTime: "PT15M",
        step: article.steps.map((s) => ({
          "@type": "HowToStep",
          name: s.name,
          text: s.text,
        })),
      }
    : null;

  const href = whatsappHref(article.waMessage, article.waRef);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdInnerHtml(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdInnerHtml(faqLd) }} />
      {howToLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdInnerHtml(howToLd) }} />
      ) : null}
      <SiteHeader />
      <article className="mx-auto max-w-3xl px-5 pb-28 pt-12 font-[family-name:var(--font-body)] md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6E7585]">{article.eyebrow}</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium leading-tight">{article.h1}</h1>
        <p className="mt-5 text-lg text-[#A8AEBC]">{article.lede}</p>
        <a
          className="mt-7 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1FB855]"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-cta={article.kind}
        >
          {article.ctaLabel}
        </a>

        {article.steps ? (
          <ol className="mt-12 space-y-4">
            {article.steps.map((step, i) => (
              <li key={step.name} className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
                <span className="text-xs font-semibold text-[#FF4D5C]">Step {i + 1}</span>
                <h2 className="mt-1 text-lg font-semibold">{step.name}</h2>
                <p className="mt-2 text-sm text-[#A8AEBC]">{step.text}</p>
              </li>
            ))}
          </ol>
        ) : null}

        {article.sections.map((section) => (
          <section key={section.id} id={section.id} className="mt-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium">{section.h2}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-[#A8AEBC] leading-relaxed">
                {p}
              </p>
            ))}
            {section.bullets ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[#A8AEBC]">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium">FAQ</h2>
          <div className="mt-6 space-y-4">
            {article.faqs.map((f) => (
              <details key={f.q} className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-3 text-sm text-[#A8AEBC]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <p className="mt-10 text-sm text-[#6E7585]">
          <Link className="text-[#25D366]" href="/#plans">
            Prices $12 / $25 / $30 / $55
          </Link>
          {article.related.map((r) => (
            <span key={r.href}>
              {" · "}
              <Link className="text-[#25D366]" href={r.href}>
                {r.label}
              </Link>
            </span>
          ))}
        </p>
      </article>
      <SiteFooter />
    </>
  );
}
