import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Breadcrumbs } from "@/components/content";
import { JsonLd } from "@/components/json-ld";
import {
  SITE_URL,
  SITE_NAME,
  LEGAL_DISCLAIMER,
  LEGALITY_STATEMENT,
  LAST_UPDATED_LABEL,
  TAKEDOWN_EMAIL,
  TAKEDOWN_RESPONSE_TARGET,
  breadcrumbJsonLd,
} from "@/lib/site";

const PATH = "/legal/disclaimer";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "How to read our claims: technology vs. licensed line-ups, affiliations, sports and blackout expectations, and our rights-holder takedown process.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: `Disclaimer | ${SITE_NAME}`,
    description:
      "Technology is not the same as a licensed line-up. Read this before you buy.",
    url: `${SITE_URL}${PATH}`,
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Legal", path: "/legal/disclaimer" },
    { name: "Disclaimer", path: PATH },
  ];

  return (
    <PageShell>
      <JsonLd graph={[breadcrumbJsonLd(trail)]} />
      <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
        <Breadcrumbs trail={trail} />
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight md:text-4xl">
          Disclaimer
        </h1>
        <p className="mt-2 text-sm text-[#6E7585]">
          Last updated {LAST_UPDATED_LABEL}.
        </p>

        <div className="prose-invert mt-8 space-y-6 text-[#C6CBD6] leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">Who we are</h2>
            <p className="mt-2">{LEGAL_DISCLAIMER}</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">
              Technology is not the same as a licensed line-up
            </h2>
            <p className="mt-2">
              IPTV simply means television delivered over the internet instead of
              a coaxial cable or satellite dish. The same delivery method powers
              well-known paid US services. In plain English: the app on your Fire
              TV and the internet connection carrying the video are ordinary,
              legal technology.
            </p>
            <p className="mt-2">
              That is a separate question from whether a specific catalog has the
              rights to every channel it lists. {LEGALITY_STATEMENT} We describe
              our product honestly, we do not overstate what any provider can
              guarantee, and we encourage you to choose services you trust.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">
              Sports, blackouts, and out-of-market games
            </h2>
            <p className="mt-2">
              We do not promise blackout-free viewing, out-of-market league
              packages, or that any particular game will be available. Live
              sports rights in the United States are complex, change season to
              season, and are controlled by the leagues and networks. Nothing on
              this site should be read as a guarantee of specific sports content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">
              No affiliation
            </h2>
            <p className="mt-2">
              We are not affiliated with, endorsed by, or sponsored by Amazon,
              the NFL, NBA, MLB, NHL, ESPN, or any US cable or network brand.
              Those names appear only to describe compatibility or to compare
              prices, and remain the property of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">
              Rights-holder takedown contact
            </h2>
            <p className="mt-2">
              If you are a rights holder and believe content associated with this
              service infringes your rights, contact us at{" "}
              <a
                href={`mailto:${TAKEDOWN_EMAIL}`}
                className="text-[#4F7DFF] hover:underline"
              >
                {TAKEDOWN_EMAIL}
              </a>
              . Please include the specific work, the reason for the claim, and
              your contact details. We aim to acknowledge valid requests within{" "}
              {TAKEDOWN_RESPONSE_TARGET}.
            </p>
          </section>

          <p className="text-sm text-[#6E7585]">
            See also our{" "}
            <Link href="/legal/terms" className="text-[#4F7DFF] hover:underline">
              Terms
            </Link>
            ,{" "}
            <Link href="/legal/privacy" className="text-[#4F7DFF] hover:underline">
              Privacy Policy
            </Link>
            , and{" "}
            <Link href="/references" className="text-[#4F7DFF] hover:underline">
              references
            </Link>
            .
          </p>
        </div>
      </article>
    </PageShell>
  );
}
