import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { CITIES } from "@/lib/cities";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "IPTV Firestick by US city — 24h trial",
  description: "Start a 24h Firestick trial from your city. No card. WhatsApp activation.",
  alternates: { canonical: `${SITE_URL}/cities` },
};

export default function CitiesIndex() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 pb-28 pt-12 font-[family-name:var(--font-body)] md:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-medium">US cities</h1>
        <p className="mt-3 text-[#A8AEBC]">Same prices everywhere. Trial on your own Wi-Fi first.</p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {CITIES.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/cities/${c.slug}`}
                className="block rounded-2xl border border-[#2A3142] bg-[#141824] p-5 hover:border-[#25D366]"
              >
                <h2 className="text-lg font-semibold">
                  {c.name}, {c.state}
                </h2>
                <p className="mt-2 text-sm text-[#A8AEBC]">{c.note}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
