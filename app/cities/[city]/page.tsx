import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { CITIES, cityBySlug } from "@/lib/cities";
import { SITE_URL, whatsappHref } from "@/lib/site";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const c = cityBySlug(city);
  if (!c) return {};
  const title = `IPTV Firestick ${c.name} — 24h trial from $12/mo`;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: `Firestick trial in ${c.name}, ${c.state}. No card. WhatsApp activation. ${c.note}`,
    alternates: { canonical: `${SITE_URL}/cities/${c.slug}` },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const c = cityBySlug(city);
  if (!c) notFound();

  const href = whatsappHref(
    `Hi — 24h trial IPTV Firestick USA. City: ${c.name}, ${c.state}. Device:`,
    `city-${c.slug}`,
  );

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 pb-28 pt-12 font-[family-name:var(--font-body)] md:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#6E7585]">
          {c.state} · Firestick
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium">
          Firestick IPTV in {c.name}
        </h1>
        <p className="mt-4 text-lg text-[#A8AEBC]">{c.note}</p>
        <p className="mt-4 text-[#A8AEBC]">
          Same plans as the rest of the US: $12 / $25 / $30 / $55. 24h trial, no card. Login stays private.
        </p>
        <a
          className="mt-8 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="city"
        >
          24h trial — I am in {c.name}
        </a>
        <p className="mt-8 text-sm text-[#6E7585]">
          <Link href="/firestick" className="text-[#25D366]">
            3-step Firestick setup
          </Link>
          {" · "}
          <Link href="/cities" className="text-[#25D366]">
            All cities
          </Link>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
