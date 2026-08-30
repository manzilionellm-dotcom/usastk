import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Breadcrumbs } from "@/components/content";
import { JsonLd } from "@/components/json-ld";
import {
  SITE_URL,
  SITE_NAME,
  COMPETITORS,
  PRICING_ACCESS_DATE,
  LAST_UPDATED_LABEL,
  breadcrumbJsonLd,
} from "@/lib/site";

const PATH = "/references";

export const metadata: Metadata = {
  title: "References & Sources",
  description:
    "Sources for the prices and facts cited across the site, with links and access dates. If it isn't sourced, we don't state it as a number.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: `References & Sources | ${SITE_NAME}`,
    description: "The prices and facts we cite, with links and access dates.",
    url: `${SITE_URL}${PATH}`,
    type: "article",
  },
  robots: { index: true, follow: true },
};

const priceSources = [
  { label: "YouTube TV — public pricing", ...COMPETITORS.youtubeTv },
  { label: "Hulu + Live TV — public pricing", ...COMPETITORS.huluLiveTv },
  { label: "Sling TV — public pricing", ...COMPETITORS.sling },
];

const toolSources = [
  {
    label: "Amazon Fire TV / Firestick device documentation",
    url: "https://www.amazon.com/firetv",
  },
  {
    label: "Downloader by AFTVnews (sideload helper on Fire OS)",
    url: "https://www.aftvnews.com/downloader/",
  },
];

export default function ReferencesPage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "References", path: PATH },
  ];

  return (
    <PageShell>
      <JsonLd graph={[breadcrumbJsonLd(trail)]} />
      <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
        <Breadcrumbs trail={trail} />
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight md:text-4xl">
          References &amp; Sources
        </h1>
        <p className="mt-2 text-sm text-[#6E7585]">
          Last updated {LAST_UPDATED_LABEL}.
        </p>
        <p className="mt-6 text-[#C6CBD6] leading-relaxed">
          We try to keep our claims sourced. Competitor prices are approximate US
          base-plan prices taken from each operator&rsquo;s own pricing page on{" "}
          {PRICING_ACCESS_DATE}; they can change at any time and feature line-ups
          differ. Where we cannot source a specific number, we describe the thing
          in plain language instead of stating a figure.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-medium text-[#F5F6F8]">
            Competitor pricing (approximate)
          </h2>
          <ul className="mt-4 space-y-4">
            {priceSources.map((s) => (
              <li
                key={s.name}
                className="rounded-xl border border-[#1F2433] p-4"
              >
                <div className="font-medium text-[#F5F6F8]">{s.name}</div>
                <div className="text-sm text-[#A8AEBC]">
                  {s.approxPrice} — {s.note}
                </div>
                <a
                  href={s.source}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-1 inline-block break-all text-sm text-[#4F7DFF] hover:underline"
                >
                  {s.source}
                </a>
                <div className="text-xs text-[#6E7585]">
                  Accessed {PRICING_ACCESS_DATE}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-medium text-[#F5F6F8]">
            Device &amp; app references
          </h2>
          <ul className="mt-4 space-y-3">
            {toolSources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-[#4F7DFF] hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-medium text-[#F5F6F8]">
            What we do not claim
          </h2>
          <p className="mt-2 text-[#C6CBD6] leading-relaxed">
            We do not publish subscriber counts, uptime percentages, exact
            channel or VOD totals, or star ratings, because we cannot source them
            reliably. We do not claim licenses from Amazon, the NFL, NBA, MLB,
            NHL, ESPN, or any network. We do not promise blackout-free sports or
            out-of-market league packages.
          </p>
        </section>
      </article>
    </PageShell>
  );
}
