import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { AnalyticsGate } from "@/components/conversion/AnalyticsGate";
import { CookieConsent } from "@/components/conversion/CookieConsent";
import { StickyCta } from "@/components/conversion/StickyCta";
import { WhatsAppFab } from "@/components/conversion/WhatsAppFab";
import { WaClickDelegate } from "@/components/conversion/WaClickDelegate";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0E16",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://iptvforfirestickusa.com"),
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "IPTV Firestick",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${fraunces.variable} ${dmSans.variable}`}
        style={{ backgroundColor: "#0B0E16" }}
      >
        <a className="skip-link" href="#plans">
          Skip to plans
        </a>
        {children}
        <WhatsAppFab />
        <StickyCta />
        <WaClickDelegate />
        <CookieConsent />
        <AnalyticsGate />
      </body>
    </html>
  );
}
