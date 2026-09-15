import Link from "next/link";
import {
  GUIDE_PATH,
  PRICING_PATH,
  WA_PREFILL,
  WHATSAPP_HREF_BASE,
  whatsappHref,
} from "@/lib/site";

export function RelatedGeoLinks({
  exclude,
}: {
  exclude?: Array<"home" | "firestick" | "faq" | "guide" | "pricing" | "wa">;
}) {
  const skip = new Set(exclude ?? []);
  const wa = whatsappHref(WA_PREFILL.guide);

  const items: { key: string; href: string; label: string; external?: boolean }[] =
    [
      { key: "home", href: "/", label: "Home — IPTV For Firestick USA" },
      { key: "pricing", href: PRICING_PATH, label: "Pricing — plan cards" },
      {
        key: "firestick",
        href: "/firestick",
        label: "Firestick HowTo — 7 MOTION (short)",
      },
      {
        key: "guide",
        href: GUIDE_PATH,
        label: "Guide — Firestick setup USA (7 MOTION)",
      },
      { key: "faq", href: "/faq", label: "FAQ — trial, Firestick, WhatsApp" },
      {
        key: "wa",
        href: wa,
        label: `WhatsApp — ${WHATSAPP_HREF_BASE.replace("https://", "")}`,
        external: true,
      },
    ].filter((item) => !skip.has(item.key as "home"));

  return (
    <section className="mt-14">
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium">
        Related
      </h2>
      <ul className="mt-4 space-y-2 text-[#93c5fd]">
        {items.map((item) => (
          <li key={item.key}>
            {item.external ? (
              <a
                href={item.href}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                → {item.label}
              </a>
            ) : (
              <Link href={item.href} className="hover:underline">
                → {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
