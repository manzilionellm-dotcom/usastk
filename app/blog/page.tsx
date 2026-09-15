import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { GUIDE_PATH, SITE_URL } from "@/lib/site";

const PAGE_URL = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: "Guides — Firestick IPTV USA" },
  description:
    "Firestick IPTV USA guides. 7 MOTION setup, 24h trial on WhatsApp. No public playlist. No invented ratings.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#0B0E16] font-[family-name:var(--font-body)] text-[#F5F6F8] antialiased">
      <SiteHeader />
      <article className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#4F7DFF]">
          GUIDES
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-normal tracking-tight">
          Guides
        </h1>
        <p className="mt-6 text-lg text-[#A8AEBC]">
          Long-form Firestick USA notes. The compact HowTo stays on{" "}
          <Link href="/firestick" className="text-[#93c5fd] hover:underline">
            /firestick
          </Link>
          .
        </p>
        <ul className="mt-10 space-y-4">
          <li className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
            <Link
              href={GUIDE_PATH}
              className="text-lg font-semibold text-[#93c5fd] hover:underline"
            >
              Firestick setup USA — 7 MOTION path
            </Link>
            <p className="mt-2 text-sm text-[#A8AEBC]">
              Seven steps, WhatsApp trial, no public playlist, no invented
              ratings.
            </p>
          </li>
        </ul>
      </article>
      <SiteFooter />
    </main>
  );
}
