import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AioCitationHooks } from "@/components/aio-citation-hooks";
import { JsonLd } from "@/components/json-ld-script";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { faqItems, howToNode, salesGraph } from "@/lib/aio";
import { DEVICES, deviceBySlug } from "@/lib/devices";
import { SITE_URL, whatsappHref } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return DEVICES.filter((d) => d.slug !== "firestick").map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = deviceBySlug(slug);
  if (!d) return {};
  return {
    metadataBase: new URL(SITE_URL),
    title: `IPTV on ${d.name} — 24h trial, no card`,
    description: d.summary,
    alternates: { canonical: `${SITE_URL}${d.path}` },
  };
}

export default async function DevicePage({ params }: Props) {
  const { slug } = await params;
  const d = deviceBySlug(slug);
  if (!d || !("steps" in d) || !d.steps) notFound();

  const href = whatsappHref(
    `Hi — 24h trial IPTV USA. Device: ${d.name}. City:`,
    `device-${d.slug}`,
  );
  const pageUrl = `${SITE_URL}${d.path}`;
  const steps = d.steps.map((text, i) => ({ name: `Step ${i + 1}`, text }));

  return (
    <>
      <JsonLd
        data={howToNode({
          pageUrl,
          name: `IPTV on ${d.name}`,
          description: d.summary,
          steps,
        })}
      />
      <JsonLd data={salesGraph(pageUrl)} />
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 pb-28 pt-12 font-[family-name:var(--font-body)] md:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-medium">
          {d.name} — 24h trial
        </h1>
        <p className="mt-4 text-lg text-[#A8AEBC]">{d.summary}</p>
        <ol className="mt-10 space-y-4">
          {d.steps.map((step, i) => (
            <li id={`step-${i + 1}`} key={step} className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
              <span className="text-xs font-semibold text-[#FF4D5C]">Step {i + 1}</span>
              <p className="mt-2">{step}</p>
            </li>
          ))}
        </ol>
        <AioCitationHooks items={faqItems()} title="Questions" />
        <a
          className="mt-8 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="device"
        >
          Send city + {d.name} on WhatsApp
        </a>
        <p className="mt-8 text-sm">
          <Link className="text-[#25D366]" href="/devices">
            All devices
          </Link>
          {" · "}
          <Link className="text-[#25D366]" href="/firestick">
            Firestick
          </Link>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
