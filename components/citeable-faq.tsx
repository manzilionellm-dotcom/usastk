import { GEO_FAQ } from "@/lib/geo-faq";

/** Visible, answer-first FAQ. First sentence is the citeable answer. Matches JSON-LD. */
export function CiteableFaq({
  items = GEO_FAQ,
  title = "Short answers (citeable)",
}: {
  items?: { q: string; a: string }[];
  title?: string;
}) {
  return (
    <section className="mt-14">
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium">
        {title}
      </h2>
      <p className="mt-3 text-sm text-[#A8AEBC]">
        First sentence is the answer. Same text as the FAQ schema — no cloaking.
      </p>
      <dl className="mt-6 space-y-3">
        {items.map((f) => (
          <div
            key={f.q}
            itemScope
            itemType="https://schema.org/Question"
            className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5"
          >
            <dt itemProp="name" className="text-base font-semibold">
              {f.q}
            </dt>
            <dd
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
              className="mt-3 mb-0 text-[#A8AEBC]"
            >
              <p itemProp="text" className="mb-0">
                {f.a}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
