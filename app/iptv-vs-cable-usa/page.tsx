import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTemplate, type Faq } from "@/components/article-template";
import { pageMetadata } from "@/lib/site";

const PATH = "/iptv-vs-cable-usa";

export const metadata: Metadata = pageMetadata({
  title: "IPTV vs Cable in the USA: Cost, Flexibility, Trade-offs",
  description:
    "IPTV streams TV over your internet with no contract and lower monthly cost; cable bundles hardware, local channels, and long agreements. Here's an honest comparison for US households, with sourced streaming prices.",
  path: PATH,
});

const faqs: Faq[] = [
  {
    q: "Is IPTV cheaper than cable?",
    a: "Usually, yes on the monthly line item. Our plans start at $12/month with no contract, while a traditional cable-and-equipment bundle often runs many times that. But compare what you actually watch, and remember cable includes things like guaranteed local channels and a set-top box.",
  },
  {
    q: "What does cable still do better?",
    a: "Cable typically bundles reliable local broadcast channels, in-market regional sports, professional installation, and one bill with your internet. If those matter most to you, weigh them against the price difference.",
  },
  {
    q: "Can I keep my internet and drop cable TV?",
    a: "Yes. Many US households keep their broadband and cancel the TV portion. You'll want to keep or improve your internet, since streaming depends on it.",
  },
  {
    q: "Will I get all my local channels with IPTV?",
    a: "Not guaranteed. Local and in-market channel availability varies, and we don't promise specific line-ups. If local broadcast is essential, a low-cost antenna for over-the-air channels pairs well with streaming.",
  },
  {
    q: "Is there a contract with IPTV?",
    a: "No. You pay for the period you choose and cancel anytime. That flexibility is one of the main reasons people switch from cable.",
  },
];

export default function Page() {
  return (
    <ArticleTemplate
      path={PATH}
      breadcrumbName="IPTV vs cable"
      h1="IPTV vs cable in the USA — which is right for you?"
      answer="IPTV delivers TV over your existing internet with no contract and a much lower monthly cost, but it depends on your connection and doesn't guarantee every local channel. Cable bundles hardware, reliable local and in-market sports channels, and a single bill, at a higher price and usually a longer commitment. If price and flexibility matter most, IPTV wins; if guaranteed locals and installation matter most, cable has an edge."
      intro="Cutting the cord isn't automatically the right move for everyone. This is an honest look at where IPTV beats cable, where cable still wins, and how to decide based on how your household actually watches TV."
      showComparison
      comparison={{ ourPrice: "from $12/mo", ourNote: "no contract" }}
      faqs={faqs}
      faqSchema={faqs}
      related={[
        { href: "/iptv-vs-youtube-tv", label: "IPTV vs YouTube TV" },
        { href: "/cheap-iptv-usa", label: "Cheap IPTV in the USA" },
        { href: "/iptv-for-firestick", label: "IPTV for Firestick explained" },
        { href: "/iptv-no-contract-usa", label: "IPTV with no contract" },
      ]}
      sections={[
        {
          h2: "The core difference",
          paras: [
            "Cable delivers television through a dedicated line into your home, along with a set-top box, a channel bundle, and — usually — a contract. IPTV delivers television over the internet you already pay for, through an app on a device like a Firestick, typically month-to-month. One is infrastructure you rent; the other is software you sign into.",
            "That difference drives everything else: price, flexibility, what's guaranteed, and what depends on your setup.",
          ],
        },
        {
          h2: "Where IPTV wins",
          paras: [
            <>
              <strong className="text-[#F5F6F8]">Price.</strong> Our plans start at
              $12/month with no contract. Even the mainstream streaming
              alternatives (see the table) are well below a typical cable-plus-box
              bundle.
            </>,
            <>
              <strong className="text-[#F5F6F8]">No lock-in.</strong> Pay for the
              period you choose and cancel anytime, with no early-termination fee.
            </>,
            <>
              <strong className="text-[#F5F6F8]">No new hardware.</strong> If you own
              a Firestick, you're most of the way there.{" "}
              <Link href="/how-to-install-iptv-on-firestick" className="text-[#4F7DFF] hover:underline">
                Setup
              </Link>{" "}
              takes one short session.
            </>,
          ],
        },
        {
          h2: "Where cable still wins",
          paras: [
            <>
              <strong className="text-[#F5F6F8]">Guaranteed locals and in-market sports.</strong>{" "}
              Cable contracts carry local broadcast and regional sports channels
              that streaming can't always match. We don't promise specific local
              line-ups or blackout-free sports.
            </>,
            <>
              <strong className="text-[#F5F6F8]">Reliability independent of your Wi-Fi.</strong>{" "}
              Cable doesn't care how congested your home network is on a busy
              evening. IPTV quality rises and falls with your connection.
            </>,
            <>
              <strong className="text-[#F5F6F8]">One bill and installation.</strong>{" "}
              Some households value having TV, internet, and support from a single
              provider who sends a technician.
            </>,
          ],
        },
        {
          h2: "A realistic middle path",
          paras: [
            "Plenty of US households land on a hybrid: keep the broadband, drop the cable TV package, add an inexpensive over-the-air antenna for guaranteed local channels, and use an IPTV subscription for everything else. You get the low monthly cost and flexibility of streaming without giving up your locals. It's worth considering before you assume it's all-or-nothing.",
          ],
        },
        {
          h2: "How to decide",
          paras: [
            <>
              Add up what you pay cable today, subtract the internet you'll keep
              either way, and compare the remainder to a no-contract IPTV plan plus
              (optionally) an antenna. Then be honest about which guaranteed cable
              features you'd actually miss. If the math and the flexibility appeal
              to you, message us on WhatsApp — or read{" "}
              <Link href="/cheap-iptv-usa" className="text-[#4F7DFF] hover:underline">
                what "cheap" should mean
              </Link>{" "}
              first.
            </>,
          ],
        },
      ]}
    />
  );
}
