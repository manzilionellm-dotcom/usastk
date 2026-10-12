import { GEO_FAQ } from "@/lib/geo-faq";

/** Visible citation hooks. Each question h3 is followed immediately by its answer paragraph. */
export function CiteableFaq({
  items = GEO_FAQ,
  title = "Short answers",
}: {
  items?: { q: string; a: string }[];
  title?: string;
}) {
  return (
    <section className="mt-14" id="aio-faq">
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium">
        {title}
      </h2>
      <p className="mt-3 text-sm text-[#A8AEBC]">
        Short answers about setup, the 24 hour trial, and WhatsApp.
      </p>
      <div className="mt-6 space-y-4">
        {items.map((f) => (
          <div
            key={f.q}
            className="rounded-2xl border border-[#2A3142] bg-[#141824] p-5"
          >
            <h3 className="text-lg font-semibold">{f.q}</h3>
            <p className="mt-3 mb-0 text-sm leading-relaxed text-[#A8AEBC]">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
