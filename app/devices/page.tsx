import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { DEVICES } from "@/lib/devices";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Install IPTV — Firestick, Samsung, LG, Android, iPhone, MAG, Formuler",
  description: "Device setup for the 24h trial. WhatsApp login. No public playlist.",
  alternates: { canonical: `${SITE_URL}/devices` },
};

export default function DevicesIndex() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 pb-28 pt-12 font-[family-name:var(--font-body)] md:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-medium">Devices</h1>
        <p className="mt-3 text-[#A8AEBC]">Pick your device. Trial first, then a plan.</p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {DEVICES.map((d) => (
            <li key={d.slug}>
              <Link
                href={d.path}
                className="block rounded-2xl border border-[#2A3142] bg-[#141824] p-5 hover:border-[#25D366]"
              >
                <h2 className="text-lg font-semibold">{d.name}</h2>
                <p className="mt-2 text-sm text-[#A8AEBC]">{d.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
