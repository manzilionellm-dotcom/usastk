import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Breadcrumbs } from "@/components/content";
import { JsonLd } from "@/components/json-ld";
import {
  SITE_URL,
  SITE_NAME,
  LEGALITY_STATEMENT,
  LAST_UPDATED_LABEL,
  TAKEDOWN_EMAIL,
  TAKEDOWN_RESPONSE_TARGET,
  breadcrumbJsonLd,
} from "@/lib/site";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const PATH = "/legal/terms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply when you buy and use an IPTV For Firestick USA subscription: billing, cancellation, acceptable use, and liability.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: `Terms of Service | ${SITE_NAME}`,
    description: "Billing, cancellation, acceptable use, and liability.",
    url: `${SITE_URL}${PATH}`,
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Legal", path: "/legal/terms" },
    { name: "Terms of Service", path: PATH },
  ];

  return (
    <PageShell>
      <JsonLd graph={[breadcrumbJsonLd(trail)]} />
      <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
        <Breadcrumbs trail={trail} />
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight md:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-[#6E7585]">
          Last updated {LAST_UPDATED_LABEL}.
        </p>

        <div className="mt-8 space-y-6 text-[#C6CBD6] leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">1. Agreement</h2>
            <p className="mt-2">
              These terms apply when you purchase or use a subscription arranged
              through {SITE_NAME}. By ordering, you agree to them. If you do not
              agree, do not place an order.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">
              2. The service
            </h2>
            <p className="mt-2">
              We provide a subscription that is compatible with Amazon Fire TV
              and Firestick devices and other common streaming players.
              Activation and support are handled over WhatsApp at{" "}
              {WHATSAPP_DISPLAY}. {LEGALITY_STATEMENT}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">
              3. Pricing, billing, and no contract
            </h2>
            <p className="mt-2">
              Prices are shown in US dollars and are billed for the plan length
              you choose (for example, one month or one year). There is no
              long-term contract. You can cancel at any time by not renewing;
              cancellation stops future billing and does not create an obligation
              to buy again.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">
              4. Acceptable use
            </h2>
            <p className="mt-2">
              You agree to use the service only for lawful, personal viewing and
              to comply with all applicable laws in your location. You are
              responsible for your own network, devices, and account credentials.
              Do not resell access or share credentials beyond the connection
              limit of your plan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">
              5. Availability
            </h2>
            <p className="mt-2">
              Streaming depends on your internet connection, your device, and
              third-party networks outside our control. We do not guarantee
              uninterrupted availability, specific channels, or specific sports
              events, and content line-ups can change. We do not promise
              blackout-free viewing or out-of-market league packages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">
              6. Limitation of liability
            </h2>
            <p className="mt-2">
              To the extent permitted by law, our liability for any claim related
              to the service is limited to the amount you paid for the current
              subscription period. We are not liable for indirect or
              consequential losses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">
              7. Intellectual property and takedowns
            </h2>
            <p className="mt-2">
              We are not affiliated with Amazon, the NFL, NBA, MLB, NHL, ESPN, or
              any cable or network brand. Rights holders who wish to raise a
              concern can email{" "}
              <a
                href={`mailto:${TAKEDOWN_EMAIL}`}
                className="text-[#4F7DFF] hover:underline"
              >
                {TAKEDOWN_EMAIL}
              </a>
              ; we aim to respond within {TAKEDOWN_RESPONSE_TARGET}.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">8. Changes</h2>
            <p className="mt-2">
              We may update these terms. The date at the top reflects the current
              version. Continued use after an update means you accept the revised
              terms.
            </p>
          </section>

          <p className="text-sm text-[#6E7585]">
            See also our{" "}
            <Link
              href="/legal/privacy"
              className="text-[#4F7DFF] hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/legal/disclaimer"
              className="text-[#4F7DFF] hover:underline"
            >
              Disclaimer
            </Link>
            .
          </p>
        </div>
      </article>
    </PageShell>
  );
}
