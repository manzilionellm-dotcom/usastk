import Link from "next/link";
import type { Metadata } from "next";
import { AioCitationHooks } from "@/components/aio-citation-hooks";
import { jsonLdInnerHtml, serviceOfferGraph } from "@/lib/json-ld";
import { faqItems, productNodes } from "@/lib/aio";
import {
  GUIDE_PATH,
  PLANS,
  SITE_NAME,
  SITE_URL,
  WA_PREFILL,
  WHATSAPP_E164,
  whatsappHref,
} from "@/lib/site";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { CITIES } from "@/lib/cities";
import { DEVICES } from "@/lib/devices";

const TITLE = "IPTV for Firestick USA — From $12/mo";
const DESCRIPTION =
  "Watch US live TV on Firestick. 24h trial via WhatsApp, no card. Plans from $12/month. Setup in 3 steps.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const jsonLd = serviceOfferGraph({
  siteUrl: SITE_URL,
  siteName: SITE_NAME,
  description: DESCRIPTION,
  whatsappE164: WHATSAPP_E164,
  plans: PLANS.map((p) => ({ name: p.name, price: p.price, months: p.months })),
  faqs: faqItems(),
  products: productNodes(),
});

const howTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Install IPTV on Amazon Firestick",
  totalTime: "PT10M",
  step: [
    { "@type": "HowToStep", name: "Enable unknown sources", text: "Settings → My Fire TV → Developer Options → Apps from Unknown Sources." },
    { "@type": "HowToStep", name: "Install Downloader", text: "Search the Amazon store for Downloader by AFTVnews and install it." },
    { "@type": "HowToStep", name: "Add the player + login", text: "We send the player and login on WhatsApp after your trial request." },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdInnerHtml(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdInnerHtml(howTo) }} />
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 pb-28 pt-10 font-[family-name:var(--font-body)] md:px-8">
        <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6E7585]">USA · Firestick</p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium leading-tight text-[#F5F6F8] md:text-6xl">
              Live US TV on Firestick from $12/mo
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[#A8AEBC]">
              24h trial on WhatsApp. No card. Setup in 3 steps on the stick itself.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappHref(WA_PREFILL.trial)}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hero"
                className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1FB855]"
              >
                Start 24h trial
              </a>
              <a href="#plans" className="rounded-full border border-[#2A3142] px-6 py-3 text-sm font-semibold text-[#F5F6F8]">
                See prices
              </a>
            </div>
          </div>
          <ul className="grid gap-3 rounded-2xl border border-[#2A3142] bg-[#141824] p-6 text-sm text-[#A8AEBC]">
            <li>WhatsApp activation — usually under 10 minutes</li>
            <li>No public playlist. Credentials stay private.</li>
            <li>Works on Firestick, Smart TV, Android, iPhone</li>
            <li>Pay once per term. No auto-renew contract</li>
          </ul>
        </section>

        <section className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "24h trial", d: "Test on your device. No card." },
            { t: "Clear prices", d: "$12 · $25 · $30 · $55" },
            { t: "3-step setup", d: "Unknown sources → Downloader → player" },
            { t: "Human support", d: "One WhatsApp number for this brand" },
          ].map((item) => (
            <article key={item.t} className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
              <h2 className="text-base font-semibold text-[#F5F6F8]">{item.t}</h2>
              <p className="mt-2 text-sm text-[#A8AEBC]">{item.d}</p>
            </article>
          ))}
        </section>

        <section id="plans" className="mt-20">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium">Plans</h2>
          <p className="mt-2 text-[#A8AEBC]">Paid once. Message WhatsApp with your city and device to buy.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((p) => (
              <article key={p.key} className="flex flex-col rounded-2xl border border-[#2A3142] bg-[#141824] p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#FF4D5C]">{p.badge}</p>
                <h3 className="mt-2 text-xl font-semibold">{p.name}</h3>
                <p className="mt-3 text-4xl font-bold">${p.price}</p>
                <p className="text-sm text-[#6E7585]">{p.perMonth}</p>
                <a
                  href={whatsappHref(p.prefill)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="plan"
                  className="mt-6 rounded-full bg-[#25D366] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#1FB855]"
                >
                  Buy on WhatsApp
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="setup" className="mt-20">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium">Firestick setup</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {["Enable Apps from Unknown Sources", "Install Downloader from the Amazon store", "We send the player + login on WhatsApp"].map((step, i) => (
              <li key={step} className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5">
                <span className="text-xs font-semibold text-[#FF4D5C]">Step {i + 1}</span>
                <p className="mt-2 text-[#F5F6F8]">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-[#A8AEBC]">
            Full walkthrough: <Link className="text-[#25D366]" href="/firestick">/firestick</Link> ·{" "}
            <Link className="text-[#25D366]" href={GUIDE_PATH}>Firestick setup USA</Link>
          </p>
        </section>

        <AioCitationHooks id="faq" className="mt-20" title="FAQ" items={faqItems()} />
        <p className="mt-4 text-sm">
          <Link className="text-[#25D366]" href="/faq">More questions →</Link>
          {" · "}
          <Link className="text-[#25D366]" href="/faq/buffering">
            Buffering FAQ — freezes after 8pm
          </Link>
        </p>

        <section id="guides" className="mt-20">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium">Guides</h2>
          <p className="mt-2 max-w-2xl text-[#A8AEBC]">
            Written notes for Firestick setup, night buffering, Smart TV, and the 24h trial.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>
              <Link className="text-[#25D366]" href="/blog">
                All Firestick USA guides
              </Link>
            </li>
            <li>
              <Link className="text-[#25D366]" href="/blog/firestick-setup-usa">
                Firestick setup USA — 7 MOTION path
              </Link>
            </li>
            <li>
              <Link className="text-[#25D366]" href="/blog/iptv-buffering-firestick">
                Firestick buffering — 7 checks
              </Link>
            </li>
            <li>
              <Link className="text-[#25D366]" href="/blog/iptv-smart-tv-usa">
                IPTV on Samsung and LG Smart TV
              </Link>
            </li>
            <li>
              <Link className="text-[#25D366]" href="/blog/firestick-24h-trial">
                24h Firestick trial — no credit card
              </Link>
            </li>
          </ul>
        </section>

        <section id="devices" className="mt-20">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium">Devices</h2>
          <p className="mt-2 max-w-2xl text-[#A8AEBC]">
            The trial request is on WhatsApp. Install steps depend on the device.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>
              <Link className="text-[#25D366]" href="/devices">
                All devices — Firestick, Smart TV, Android, iPhone
              </Link>
            </li>
            {DEVICES.filter((d) => d.slug !== "firestick").map((d) => (
              <li key={d.slug}>
                <Link className="text-[#25D366]" href={d.path}>
                  {d.name} — install steps
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section id="cities" className="mt-20">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium">Cities</h2>
          <p className="mt-2 max-w-2xl text-[#A8AEBC]">
            Start the 24h trial on the Wi-Fi you watch from. The plan amounts are the same in each city.{" "}
            <Link className="text-[#25D366]" href="/cities">
              All US cities
            </Link>
          </p>
          <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <Link className="text-[#25D366]" href={`/cities/${c.slug}`}>
                  Firestick IPTV in {c.name}, {c.state}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
