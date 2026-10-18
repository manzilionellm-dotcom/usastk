import { ogCard, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-card";
import { CITIES, cityBySlug } from "@/lib/cities";

export const alt = "Firestick IPTV in your US city";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = cityBySlug(city);
  return ogCard(c ? `Firestick IPTV in ${c.name}` : "Firestick IPTV in US cities");
}
