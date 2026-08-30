import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Breadcrumbs } from "@/components/content";
import { JsonLd } from "@/components/json-ld";
import {
  SITE_URL,
  SITE_NAME,
  LAST_UPDATED_LABEL,
  TAKEDOWN_EMAIL,
  breadcrumbJsonLd,
} from "@/lib/site";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const PATH = "/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What we collect, why, and how we handle it — including WhatsApp messages, order details, and your choices.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: "What we collect, why, and how we handle it.",
    url: `${SITE_URL}${PATH}`,
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Legal", path: "/legal/privacy" },
    { name: "Privacy Policy", path: PATH },
  ];

  return (
    <PageShell>
      <JsonLd graph={[breadcrumbJsonLd(trail)]} />
      <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
        <Breadcrumbs trail={trail} />
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-[#6E7585]">
          Last updated {LAST_UPDATED_LABEL}.
        </p>

        <div className="mt-8 space-y-6 text-[#C6CBD6] leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">Overview</h2>
            <p className="mt-2">
              {SITE_NAME} keeps data collection to the minimum needed to answer
              your questions and activate a subscription. We do not sell personal
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">
              What we collect
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong className="text-[#F5F6F8]">WhatsApp messages.</strong>{" "}
                When you contact us at {WHATSAPP_DISPLAY}, we receive your
                message, your WhatsApp display name, and your number so we can
                reply and set up your plan.
              </li>
              <li>
                <strong className="text-[#F5F6F8]">Order details.</strong> The
                plan you choose and the details needed to deliver it.
              </li>
              <li>
                <strong className="text-[#F5F6F8]">Basic site analytics.</strong>{" "}
                Aggregate, non-identifying usage data (such as page views) to
                improve the site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">
              How we use it
            </h2>
            <p className="mt-2">
              To answer questions, activate and support your subscription, handle
              billing for the period you purchased, and improve our guides. We do
              not use your details for unrelated marketing without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">Sharing</h2>
            <p className="mt-2">
              We share information only with service providers needed to run the
              service (for example, the messaging and payment tools we use), and
              where required by law. WhatsApp messages are also subject to
              WhatsApp&rsquo;s own privacy terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[#F5F6F8]">Your choices</h2>
            <p className="mt-2">
              You can ask us what we hold about you, request a correction, or ask
              us to delete your data by emailing{" "}
              <a
                href={`mailto:${TAKEDOWN_EMAIL}`}
                className="text-[#4F7DFF] hover:underline"
              >
                {TAKEDOWN_EMAIL}
              </a>
              . You can stop messaging us at any time.
            </p>
          </section>

          <p className="text-sm text-[#6E7585]">
            See also our{" "}
            <Link href="/legal/terms" className="text-[#4F7DFF] hover:underline">
              Terms
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
