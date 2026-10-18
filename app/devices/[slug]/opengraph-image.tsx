import { ogCard, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-card";
import { DEVICES, deviceBySlug } from "@/lib/devices";

export const alt = "IPTV on your device — 24h trial";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return DEVICES.filter((d) => d.slug !== "firestick").map((d) => ({ slug: d.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = deviceBySlug(slug);
  return ogCard(d ? `${d.name} — 24h trial` : "IPTV on your device — 24h trial");
}
