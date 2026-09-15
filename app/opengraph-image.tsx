import { ImageResponse } from "next/og";

export const alt = "IPTV For Firestick USA — from $12/mo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#A8AEBC" }}>
          IPTV For Firestick USA
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>
            Live US TV on Firestick from $12/mo
          </div>
          <div style={{ fontSize: 32, color: "#D0D4DE" }}>24h trial on WhatsApp · no card · 3-step setup</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
