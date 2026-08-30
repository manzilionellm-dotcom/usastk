import Link from "next/link";
import { COMPETITORS, PRICING_ACCESS_DATE } from "@/lib/site";
import { whatsappLink, WHATSAPP_PREFILL } from "@/lib/whatsapp";

/* ----------------------------- Breadcrumbs ----------------------------- */

export function Breadcrumbs({
  trail,
}: {
  trail: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-[#6E7585]">
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((t, i) => (
          <li key={t.path} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden>›</span>}
            {i < trail.length - 1 ? (
              <Link href={t.path} className="transition hover:text-[#A8AEBC]">
                {t.name}
              </Link>
            ) : (
              <span className="text-[#A8AEBC]">{t.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ----------------------------- CTA button ----------------------------- */

export function WhatsAppCta({
  message = WHATSAPP_PREFILL,
  children = "Message us on WhatsApp",
  className = "",
}: {
  message?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-[#062712] transition hover:bg-[#20bd5a] ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
      </svg>
      {children}
    </a>
  );
}

/* ----------------------------- Comparison table ----------------------------- */

/**
 * Sourced comparison vs YouTube TV / Hulu + Live TV / Sling using public,
 * approximate base prices. Every competitor price links to the operator's own
 * pricing page and the access date is stated below the table.
 */
export function ComparisonTable({
  ourPrice = "from $12/mo",
  ourNote = "no contract",
}: {
  ourPrice?: string;
  ourNote?: string;
}) {
  const rows = [
    {
      name: "This subscription (Fire TV)",
      price: ourPrice,
      note: ourNote,
      contract: "No",
      source: null as string | null,
      highlight: true,
    },
    {
      name: COMPETITORS.youtubeTv.name,
      price: COMPETITORS.youtubeTv.approxPrice,
      note: COMPETITORS.youtubeTv.note,
      contract: "No",
      source: COMPETITORS.youtubeTv.source,
      highlight: false,
    },
    {
      name: COMPETITORS.huluLiveTv.name,
      price: COMPETITORS.huluLiveTv.approxPrice,
      note: COMPETITORS.huluLiveTv.note,
      contract: "No",
      source: COMPETITORS.huluLiveTv.source,
      highlight: false,
    },
    {
      name: COMPETITORS.sling.name,
      price: COMPETITORS.sling.approxPrice,
      note: COMPETITORS.sling.note,
      contract: "No",
      source: COMPETITORS.sling.source,
      highlight: false,
    },
  ];

  return (
    <figure className="my-8">
      <div className="overflow-x-auto rounded-2xl border border-[#1F2433]">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#121524] text-[#A8AEBC]">
              <th className="px-4 py-3 font-medium">Service</th>
              <th className="px-4 py-3 font-medium">Approx. price (USD)</th>
              <th className="px-4 py-3 font-medium">Contract</th>
              <th className="px-4 py-3 font-medium">Public pricing page</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.name}
                className={`border-t border-[#1F2433] ${
                  r.highlight ? "bg-[#0E1a12]" : ""
                }`}
              >
                <td className="px-4 py-3 font-medium text-[#F5F6F8]">{r.name}</td>
                <td className="px-4 py-3 text-[#F5F6F8]">
                  {r.price}
                  <span className="block text-xs text-[#6E7585]">{r.note}</span>
                </td>
                <td className="px-4 py-3 text-[#A8AEBC]">{r.contract}</td>
                <td className="px-4 py-3 text-[#A8AEBC]">
                  {r.source ? (
                    <a
                      href={r.source}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#4F7DFF] hover:underline"
                    >
                      Source
                    </a>
                  ) : (
                    <span className="text-[#6E7585]">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="mt-2 text-xs text-[#6E7585]">
        Competitor prices are approximate US base-plan prices retrieved from each
        operator&rsquo;s public pricing page on {PRICING_ACCESS_DATE}, and may
        change. Feature and channel line-ups differ between services.
      </figcaption>
    </figure>
  );
}

/* ----------------------------- FAQ list ----------------------------- */

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="mt-6 divide-y divide-[#1F2433] rounded-2xl border border-[#1F2433]">
      {faqs.map((f) => (
        <details key={f.q} className="group px-5 py-4">
          <summary className="cursor-pointer list-none font-medium text-[#F5F6F8] [&::-webkit-details-marker]:hidden">
            {f.q}
          </summary>
          <p className="mt-2 text-sm leading-relaxed text-[#A8AEBC]">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
