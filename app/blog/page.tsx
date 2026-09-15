import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { GUIDE_PATH, SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: "Guides — Firestick IPTV USA" },
  description:
    "Firestick IPTV USA guides. Setup, buffering checks, Smart TV, 24h trial. WhatsApp only. No invented ratings.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
};

const POSTS = [
  {
    href: GUIDE_PATH,
    title: "Firestick setup USA — 7 MOTION path",
    blurb: "Seven steps, WhatsApp trial, no public playlist, no invented ratings.",
  },
  {
    href: "/blog/iptv-buffering-firestick",
    title: "Firestick buffering — 7 checks",
    blurb: "Speed, 5 GHz, Ethernet, DNS, decoder. Then a 24h trial on your Wi-Fi.",
  },
  {
    href: "/blog/iptv-smart-tv-usa",
    title: "IPTV on Samsung / LG without a Firestick",
    blurb: "TV store vs a $25 stick. Same 24h trial, same prices.",
  },
  {
    href: "/blog/whatsapp-24h-trial",
    title: "What to send on WhatsApp for the 24h trial",
    blurb: "City + device. Ten minutes. Prices after it holds. Same number.",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#0B0E16] font-[family-name:var(--font-body)] text-[#F5F6F8] antialiased">
      <SiteHeader />
      <article className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#4F7DFF]">GUIDES</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-normal tracking-tight">Guides</h1>
        <p className="mt-6 text-lg text-[#A8AEBC]">
          Long-form Firestick USA notes. Compact HowTo on{" "}
          <Link href="/firestick" className="text-[#93c5fd] hover:underline">/firestick</Link>.
        </p>
        <ul className="mt-10 space-y-4">
          {POSTS.map((p) => (
            <li key={p.href} className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
              <Link href={p.href} className="text-lg font-semibold text-[#93c5fd] hover:underline">
                {p.title}
              </Link>
              <p className="mt-2 text-sm text-[#A8AEBC]">{p.blurb}</p>
            </li>
          ))}
        </ul>
      </article>
      <SiteFooter />
    </main>
  );
}
