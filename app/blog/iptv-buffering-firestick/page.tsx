import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { SITE_URL, WA_PREFILL, whatsappHref } from "@/lib/site";

const PATH = "/blog/iptv-buffering-firestick";
const TITLE = "Firestick buffering — 7 checks before you blame the stream";
const DESCRIPTION =
  "Speed, 5 GHz Wi-Fi, Ethernet adapter, DNS, hardware decoder, peak hours. Then a 24h trial on your own network.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const CHECKS = [
  { t: "Speed", d: "fast.com on the same Wi-Fi. 15 Mbps for HD, 25 Mbps for one 4K stick." },
  { t: "Band", d: "5 GHz, not 2.4. Apartment 2.4 GHz is usually the freeze." },
  { t: "Ethernet", d: "Official Firestick USB Ethernet adapter (~$15). Kills 90% of night buffering." },
  { t: "DNS", d: "1.1.1.1 or 8.8.8.8 on the stick. ISP DNS is often slow at 8–11pm." },
  { t: "Decoder", d: "In the player: hardware decoder (or hardware+). Software decoder cooks a 4K Max." },
  { t: "Cache", d: "Settings → Applications → player → Clear cache. Weekly is enough." },
  { t: "One channel only", d: "If every other channel is fine, say so on WhatsApp — we switch the source, we don’t guess." },
];

export default function BufferingGuide() {
  return (
    <>
      <SiteHeader active="guide" />
      <main className="mx-auto max-w-3xl px-5 pb-28 pt-12 font-[family-name:var(--font-body)] md:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#4F7DFF]">GUIDE · 15 SEP 2026</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium">{TITLE}</h1>
        <p className="mt-4 text-lg text-[#A8AEBC]">{DESCRIPTION}</p>
        <ol className="mt-10 space-y-4">
          {CHECKS.map((c, i) => (
            <li key={c.t} className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
              <h2 className="text-base font-semibold">
                {i + 1}. {c.t}
              </h2>
              <p className="mt-2 text-sm text-[#A8AEBC]">{c.d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-[#A8AEBC]">
          If those seven still fail on a 24h trial, the stick or the ISP is the bottleneck — we don’t invent “anti-freeze 6.0”. Test first.
        </p>
        <a
          className="mt-8 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
          href={whatsappHref(WA_PREFILL.trial, "blog-buffering")}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="guide"
        >
          24h trial on this Firestick
        </a>
        <p className="mt-8 text-sm">
          <Link className="text-[#25D366]" href="/firestick">
            Setup
          </Link>
          {" · "}
          <Link className="text-[#25D366]" href="/blog">
            Guides
          </Link>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
