import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#1E3A8A 0%,#0B0E16 100%)",
          color: "#FAFAF7",
          fontSize: 220,
          fontWeight: 800,
          letterSpacing: -8,
        }}
      >
        IF
      </div>
    ),
    { ...size },
  );
}
