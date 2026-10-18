import { ImageResponse } from "next/og";
import { PLANS, SITE_NAME } from "@/lib/site";

/**
 * Per-route share card in the same design as app/opengraph-image.tsx.
 * Static (no request-time APIs) → generated at build and cached.
 * Headline = the page H1 (same constant); price entry = the cheapest published plan.
 * No ratings, no counters.
 */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";
// Already published on the root share card.
const SUBLINE = "24h trial on WhatsApp · no card · 3-step setup";
const ENTRY = `From $${Math.min(...PLANS.map((p) => p.price))}/mo`;

export function ogCard(headline: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg,#0B0E16 0%,#1E3A8A 100%)",
          color: "#FAFAF7",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#A8AEBC" }}>
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: headline.length > 48 ? 60 : 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 1040 }}>
            {headline}
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#D0D4DE" }}>{SUBLINE}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#A8AEBC" }}>
          <div style={{ display: "flex" }}>iptvforfirestickusa.com</div>
          <div style={{ display: "flex", color: "#25D366", fontWeight: 700 }}>{ENTRY}</div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
