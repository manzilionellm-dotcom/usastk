import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTemplate, type Faq } from "@/components/article-template";
import { pageMetadata } from "@/lib/site";

const PATH = "/iptv-no-contract-usa";

export const metadata: Metadata = pageMetadata({
  title: "No-Contract IPTV in the USA: Month-to-Month, Cancel Anytime",
  description:
    "No contract means you pay for the period you choose and stop whenever you like — no lock-in, no early-termination fee. Our IPTV starts at $12/month, cancel anytime, set up over WhatsApp.",
  path: PATH,
});

const faqs: Faq[] = [
  {
    q: "What does 'no contract' really mean here?",
    a: "You pay for the plan length you choose — say one month — and nothing obligates you to renew. There's no minimum term beyond what you buy, no early-termination fee, and no automatic multi-year commitment.",
  },
  {
    q: "How do I cancel?",
    a: "Simply don't renew, or message us on WhatsApp and tell us you're stopping. Cancellation ends future billing. There's no retention maze to fight through.",
  },
  {
    q: "Is a monthly plan more expensive than a yearly one?",
    a: "Per month, usually yes — longer plans lower the effective monthly rate but ask for more up front. Month-to-month trades a slightly higher rate for maximum flexibility, which is the right call when you're starting out.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. Start monthly, and if it's working well on your Firestick, move to a longer plan for better value. Message us and we'll sort it out.",
  },
  {
    q: "Do I need to enter card details to start?",
    a: "You arrange payment for your chosen plan directly with us over WhatsApp. There's no hidden auto-renewing subscription created behind your back.",
  },
];

export default function Page() {
  return (
    <ArticleTemplate
      path={PATH}
      breadcrumbName="No-contract IPTV"
      h1="Is there IPTV in the USA with no contract?"
      answer="Yes. Our IPTV is no-contract by design: you pay for the plan length you choose, and you can cancel anytime by not renewing — no lock-in, no minimum term beyond what you buy, and no early-termination fee. Plans start at $12/month in US dollars, and setup and cancellation are both handled over WhatsApp. Flexibility is the whole point."
      intro="One of the biggest frustrations with traditional TV is being tied into a long agreement with penalties for leaving. No-contract IPTV flips that. Here's exactly how it works and what to check before you buy."
      showComparison
      comparison={{ ourPrice: "from $12/mo", ourNote: "no contract" }}
      faqs={faqs}
      faqSchema={faqs}
      related={[
        { href: "/cheap-iptv-usa", label: "Cheap IPTV in the USA" },
        { href: "/iptv-vs-cable-usa", label: "IPTV vs cable in the USA" },
        { href: "/iptv-for-firestick", label: "IPTV for Firestick explained" },
        { href: "/best-iptv-for-firestick-2026", label: "Best IPTV for Firestick 2026" },
      ]}
      sections={[
        {
          h2: "What 'no contract' means in practice",
          paras: [
            "A contract locks you into paying for a set period — often a year or two — with a fee if you leave early. No-contract means none of that. You buy the length you want, whether that's a single month or a longer term for a better rate, and when it ends you decide whether to continue. Nothing renews against your will, and there's no penalty for walking away.",
            "For anyone testing IPTV for the first time, this removes the risk. If it doesn't suit your household or your connection, you simply stop.",
          ],
        },
        {
          h2: "Why this matters for cord-cutters",
          paras: [
            <>
              Traditional providers use contracts to keep you paying even when
              you're unhappy. Streaming flipped the expectation: people now expect
              to start and stop on their own terms. No-contract IPTV fits that
              mindset and pairs naturally with the flexibility of a{" "}
              <Link href="/iptv-for-firestick" className="text-[#4F7DFF] hover:underline">
                Firestick setup
              </Link>{" "}
              you can change whenever you like.
            </>,
            "It also keeps us honest. When a customer can leave at any moment, the only way to keep them is to actually deliver a smooth experience and answer quickly when something goes wrong.",
          ],
        },
        {
          h2: "What to check before you buy — anywhere",
          paras: [
            <>
              <strong className="text-[#F5F6F8]">Is renewal automatic?</strong> With
              us, you choose to renew; nothing charges you silently.
            </>,
            <>
              <strong className="text-[#F5F6F8]">Is there an early-exit fee?</strong>{" "}
              There shouldn't be. Ours has none.
            </>,
            <>
              <strong className="text-[#F5F6F8]">How do you cancel?</strong> It should
              be as easy as a WhatsApp message. Read the plain terms on our{" "}
              <Link href="/legal/terms" className="text-[#4F7DFF] hover:underline">
                Terms page
              </Link>
              .
            </>,
          ],
        },
        {
          h2: "Getting started, and stopping",
          paras: [
            <>
              To start: message us on WhatsApp, choose a month-to-month plan, and
              we'll activate it and help you install a player on your Firestick. To
              stop: don't renew, or send us a message. That's the entire
              commitment. If price is your main concern, the{" "}
              <Link href="/cheap-iptv-usa" className="text-[#4F7DFF] hover:underline">
                cheap-IPTV guide
              </Link>{" "}
              explains how to get value without overpaying.
            </>,
          ],
        },
      ]}
    />
  );
}
