import type { Metadata } from "next";
import Link from "next/link";
import { AioCitationHooks } from "@/components/aio-citation-hooks";
import { JsonLd } from "@/components/json-ld-script";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { bufferingFaqItems, salesGraph } from "@/lib/aio";
import { SITE_URL, WA_PREFILL, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "IPTV Firestick buffering FAQ — USA",
  description: "Why Firestick freezes at night, what to check first, and when we switch the source. 24h trial, no card.",
  alternates: { canonical: `${SITE_URL}/faq/buffering` },
};

const QA = bufferingFaqItems();

export default function BufferingFaq() {
  return (
    <>
      <JsonLd data={salesGraph(`${SITE_URL}/faq/buffering`, QA)} />
      <SiteHeader active="faq" />
      <main className="mx-auto max-w-3xl px-5 pb-28 pt-12 font-[family-name:var(--font-body)] md:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-medium">Buffering FAQ</h1>
        <AioCitationHooks className="mt-8" title="Questions" items={QA} />
        <a
          className="mt-8 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
          href={whatsappHref(WA_PREFILL.trial, "faq-buffering")}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="faq"
        >
          24h trial — test on my Wi-Fi
        </a>
        <p className="mt-6 text-sm">
          <Link className="text-[#25D366]" href="/blog/iptv-buffering-firestick">7 checks</Link>
          {" · "}
          <Link className="text-[#25D366]" href="/faq">All FAQ</Link>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
