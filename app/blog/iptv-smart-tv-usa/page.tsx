import type { Metadata } from "next";
import Link from "next/link";
import { AioCitationHooks } from "@/components/aio-citation-hooks";
import { JsonLd } from "@/components/json-ld-script";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { faqItems, howToNode, salesGraph } from "@/lib/aio";
import { SITE_URL, whatsappHref } from "@/lib/site";
import { SmartTvSources } from "@/components/smart-tv-sources";

const PATH = "/blog/iptv-smart-tv-usa";
const TITLE = "IPTV on Samsung / LG Smart TV (USA) — without a Firestick";
const DESCRIPTION =
  "Samsung Tizen and LG webOS need compatible TV apps. Check your model and region before the 24h trial. IPTV plans remain $12–$55.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
};

const STEPS = [
  { t: "Check the TV and app store", d: "Samsung Tizen and LG webOS need players built for those systems. Check your TV model, software version and region, then look for a compatible player in the TV's app store." },
  { t: "Use platform-specific installation steps", d: "Do not follow Android APK or Downloader installation steps on Samsung Tizen or LG webOS. A TV browser does not make an Android player compatible. Check the app publisher's supported models and any separate player licence." },
  { t: "If no compatible TV app is available", d: "Check an external streaming device's exact model, operating system and player support before buying hardware. Do not assume every Fire TV model accepts the same apps or installation method." },
  { t: "Confirm compatibility before the trial", d: "Once a compatible player is confirmed, request the 24h trial and test video, audio and the TV guide on your own network. Compare Wi-Fi and Ethernet where supported. Report the model, app version and problem without sharing credentials publicly." },
];

export default function SmartTvGuide() {
  const pageUrl = `${SITE_URL}${PATH}`;

  return (
    <>
      <JsonLd
        data={howToNode({
          pageUrl,
          name: TITLE,
          description: DESCRIPTION,
          steps: STEPS.map((c) => ({ name: c.t, text: c.d })),
        })}
      />
      <JsonLd
        data={salesGraph(pageUrl, undefined, [
          { name: "Guides", path: "/blog" },
          { name: TITLE, path: PATH },
        ])}
      />
      <SiteHeader active="guide" />
      <main className="mx-auto max-w-3xl px-5 pb-28 pt-12 font-[family-name:var(--font-body)] md:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#4F7DFF]">GUIDE · UPDATED 22 OCT 2026</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium">{TITLE}</h1>
        <p className="mt-4 text-lg text-[#A8AEBC]">{DESCRIPTION}</p>
        <ol className="mt-10 space-y-4">
          {STEPS.map((c, i) => (
            <li id={`step-${i + 1}`} key={c.t} className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
              <h2 className="text-base font-semibold">{i + 1}. {c.t}</h2>
              <p className="mt-2 text-sm text-[#A8AEBC]">{c.d}</p>
            </li>
          ))}
        </ol>
        <SmartTvSources />
        <AioCitationHooks items={faqItems()} title="Questions" />
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
          <Link className="text-[#25D366]" href="/devices/smart-tv">Smart TV install steps</Link>
          {" · "}
          <Link className="text-[#25D366]" href="/devices/android">Android TV and phone</Link>
          {" · "}
          <Link className="text-[#25D366]" href="/devices/iphone">iPhone and iPad</Link>
          {" · "}
          <Link className="text-[#25D366]" href="/firestick">Firestick setup</Link>
          {" · "}
          <Link className="text-[#25D366]" href="/faq/buffering">Buffering FAQ — freezes after 8pm</Link>
          {" · "}
          <Link className="text-[#25D366]" href="/blog">All guides</Link>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
