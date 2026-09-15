import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { SITE_URL, whatsappHref } from "@/lib/site";

const PATH = "/blog/iptv-smart-tv-usa";
const TITLE = "IPTV on Samsung / LG Smart TV (USA) — without a Firestick";
const DESCRIPTION =
  "Downloader on the TV, or a $25 Firestick. 24h trial on WhatsApp, no card. Same $12–$55 plans.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const STEPS = [
  { t: "Check the TV store", d: "Samsung (Tizen) and LG (webOS) both have a Downloader-style app or a browser. We name the player on WhatsApp after you send the TV brand." },
  { t: "If the store is empty", d: "Buy a Firestick (~$25). Unknown sources → Downloader → player. Faster than fighting an old Tizen build." },
  { t: "Wi-Fi vs Ethernet", d: "Smart TVs freeze on 2.4 GHz the same way sticks do. 5 GHz or a LAN port." },
  { t: "Trial first", d: "24h on your own TV. If a channel buffers, say so — we switch the source. No invented anti-freeze claims." },
];

export default function SmartTvGuide() {
  return (
    <>
      <SiteHeader active="guide" />
      <main className="mx-auto max-w-3xl px-5 pb-28 pt-12 font-[family-name:var(--font-body)] md:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#4F7DFF]">GUIDE · 15 SEP 2026</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium">{TITLE}</h1>
        <p className="mt-4 text-lg text-[#A8AEBC]">{DESCRIPTION}</p>
        <ol className="mt-10 space-y-4">
          {STEPS.map((c, i) => (
            <li key={c.t} className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
              <h2 className="text-base font-semibold">{i + 1}. {c.t}</h2>
              <p className="mt-2 text-sm text-[#A8AEBC]">{c.d}</p>
            </li>
          ))}
        </ol>
        <a
          className="mt-8 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
          href={whatsappHref("Hi — 24h trial IPTV USA. Device: Smart TV (Samsung/LG). City:", "blog-smart-tv")}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="guide"
        >
          24h trial on this TV
        </a>
        <p className="mt-8 text-sm">
          <Link className="text-[#25D366]" href="/devices/smart-tv">Smart TV steps</Link>
          {" · "}
          <Link className="text-[#25D366]" href="/firestick">Firestick</Link>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
