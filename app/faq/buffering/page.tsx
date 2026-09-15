import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { SITE_URL, WA_PREFILL, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "IPTV Firestick buffering FAQ — USA",
  description: "Why Firestick freezes at night, what to check first, and when we switch the source. 24h trial, no card.",
  alternates: { canonical: `${SITE_URL}/faq/buffering` },
};

const QA = [
  { q: "Why does it freeze only after 8pm?", a: "Peak-hour Wi-Fi and ISP DNS, not the app. Switch to 5 GHz or Ethernet, set DNS 1.1.1.1, then retest." },
  { q: "One channel only?", a: "Tell us which one. We switch that source. We do not ship a fake anti-freeze update." },
  { q: "4K Max still buffers?", a: "Hardware decoder on, software decoder off. 25 Mbps for one stick. Ethernet adapter (~$15) fixes most apartments." },
  { q: "Do I need a new Firestick?", a: "Only if the stick is a 2018 2nd gen on 2.4 GHz. Trial first on the device you already own." },
];

export default function BufferingFaq() {
  return (
    <>
      <SiteHeader active="faq" />
      <main className="mx-auto max-w-3xl px-5 pb-28 pt-12 font-[family-name:var(--font-body)] md:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-medium">Buffering FAQ</h1>
        <div className="mt-8 space-y-4">
          {QA.map((f) => (
            <details key={f.q} className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-3 text-sm text-[#A8AEBC]">{f.a}</p>
            </details>
          ))}
        </div>
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
