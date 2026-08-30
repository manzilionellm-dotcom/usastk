import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTemplate, type Faq } from "@/components/article-template";
import { pageMetadata, LEGALITY_STATEMENT, TAKEDOWN_EMAIL } from "@/lib/site";

const PATH = "/is-iptv-legal-in-usa";

export const metadata: Metadata = pageMetadata({
  title: "Is IPTV Legal in the USA? A Plain-English Guide",
  description:
    "Streaming apps and internet delivery are legal in the USA. Whether a specific catalog is lawful depends on the rights behind those streams. Here's the honest, plain-English explanation.",
  path: PATH,
});

const faqs: Faq[] = [
  {
    q: "Is IPTV legal in the United States?",
    a: "The technology, the apps, and installing them on your own device are legal. The separate question is whether a specific service has the rights to the channels it offers. We don't claim network or league licenses, and we encourage choosing services you trust.",
  },
  {
    q: "Do I need a license to watch IPTV in the US?",
    a: "There's no viewer license like the UK TV Licence. You just need internet and a device. Your responsibility is to comply with applicable law where you live.",
  },
  {
    q: "Is using a media player like TiviMate or IPTV Smarters legal?",
    a: "Yes. Media-player apps are general-purpose software and are legal to install and use. What you point them at is the part that depends on rights.",
  },
  {
    q: "Do you guarantee sports without blackouts?",
    a: "No. We never promise blackout-free sports or out-of-market league packages. Live sports rights in the US are controlled by leagues and networks, change season to season, and are outside our control.",
  },
  {
    q: "Who do I contact about a rights concern?",
    a: `Rights holders can email ${TAKEDOWN_EMAIL} with the specific work and the reason for the claim. We aim to respond within 48 hours.`,
  },
];

export default function Page() {
  return (
    <ArticleTemplate
      path={PATH}
      breadcrumbName="Is IPTV legal?"
      h1="Is IPTV legal in the USA?"
      answer={`In the United States, streaming apps and internet delivery are legal. Whether a particular catalog is lawful depends on the rights behind those streams. There's no viewer license to buy, and installing a media player on your own device is legal. We do not claim network or league licenses, and you are responsible for complying with applicable law where you live.`}
      intro="This is the honest version, without scare tactics or false reassurance. The key idea is simple once you separate two different things: the technology, and the content it carries."
      faqs={faqs}
      faqSchema={faqs}
      related={[
        { href: "/legal/disclaimer", label: "Full disclaimer" },
        { href: "/references", label: "References & sources" },
        { href: "/iptv-for-firestick", label: "IPTV for Firestick explained" },
        { href: "/iptv-vs-cable-usa", label: "IPTV vs cable in the USA" },
      ]}
      sections={[
        {
          h2: "Technology is not the same as a licensed line-up",
          paras: [
            "Here's the distinction that clears up most of the confusion. IPTV is a way of delivering video — television sent over the internet instead of a cable or satellite line. That delivery method is ordinary, legal technology, used by many well-known paid services. The apps that play those streams, like IPTV Smarters Pro or TiviMate, are general-purpose media players, and they're legal too.",
            "A completely separate question is whether a given service holds the rights to every channel in its catalog. That's about licensing agreements between providers and the companies that own the content — and it varies from service to service. In plain English: owning a hammer is legal; what you build with it is a different matter.",
          ],
        },
        {
          h2: "What that means for you",
          paras: [
            <>
              <strong className="text-[#F5F6F8]">You don't need a viewer license.</strong>{" "}
              The US has no equivalent of the UK TV Licence. You need internet and a
              device, nothing more.
            </>,
            <>
              <strong className="text-[#F5F6F8]">Installing a player is fine.</strong>{" "}
              Our{" "}
              <Link href="/how-to-install-iptv-on-firestick" className="text-[#4F7DFF] hover:underline">
                install guide
              </Link>{" "}
              covers standard, legal app-installation steps — no cracking or
              bypassing anything.
            </>,
            <>
              <strong className="text-[#F5F6F8]">You're responsible for lawful use.</strong>{" "}
              Choose services you trust, and comply with the law where you live.
            </>,
          ],
        },
        {
          h2: "What we claim — and what we won't",
          paras: [
            LEGALITY_STATEMENT,
            "Concretely: we describe our product as a large catalog of live and on-demand entertainment that's optimized for Fire TV devices, with no contract and WhatsApp support. We do not claim to be licensed by Amazon, the NFL, NBA, MLB, NHL, ESPN, or any network. We do not promise blackout-free sports or out-of-market league packages, because those rights are controlled by the leagues and change constantly. Anyone who does promise those things is overstating what they can deliver.",
          ],
        },
        {
          h2: "About live sports specifically",
          paras: [
            "Sports is where marketing tends to get the loosest. US live-sports rights are complex, regional, and change season to season. Blackouts exist because of those agreements. We won't tell you a subscription guarantees a specific game, an out-of-market package, or blackout-free viewing — nobody in our position can honestly guarantee that. If watching a particular team every week is essential, check carefully and set realistic expectations before you buy anything, from anyone.",
          ],
        },
        {
          h2: "Rights holders and takedowns",
          paras: [
            <>
              If you're a rights holder with a concern, we want to hear from you.
              Email{" "}
              <a href={`mailto:${TAKEDOWN_EMAIL}`} className="text-[#4F7DFF] hover:underline">
                {TAKEDOWN_EMAIL}
              </a>{" "}
              with the specific work and the reason for your claim, and we aim to
              respond within 48 hours. Our full{" "}
              <Link href="/legal/disclaimer" className="text-[#4F7DFF] hover:underline">
                disclaimer
              </Link>{" "}
              spells out affiliations and expectations in more detail.
            </>,
          ],
        },
      ]}
    />
  );
}
