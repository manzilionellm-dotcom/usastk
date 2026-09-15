import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 72,
          fontWeight: 800,
        }}
      >
        IF
      </div>
    ),
    { ...size },
  );
}
