export const CITIES = [
  { slug: "new-york", name: "New York", state: "NY", note: "Spectrum and Verizon Fios. Ethernet to the Firestick beats apartment Wi-Fi." },
  { slug: "los-angeles", name: "Los Angeles", state: "CA", note: "Spectrum / AT&T. 5 GHz Wi-Fi or a $15 Ethernet adapter on the stick." },
  { slug: "houston", name: "Houston", state: "TX", note: "Xfinity and AT&T fiber. 25 Mbps is enough for one 4K stick." },
  { slug: "miami", name: "Miami", state: "FL", note: "AT&T and Xfinity. Test the 24h trial on the same Wi-Fi you watch at night." },
  { slug: "chicago", name: "Chicago", state: "IL", note: "Xfinity. Avoid 2.4 GHz in dense buildings — use 5 GHz or Ethernet." },
  { slug: "dallas", name: "Dallas", state: "TX", note: "AT&T fiber and Spectrum. Trial first, then pick a plan on WhatsApp." },
  { slug: "atlanta", name: "Atlanta", state: "GA", note: "Xfinity / AT&T. Same 3-step Firestick setup as the rest of the US." },
  { slug: "phoenix", name: "Phoenix", state: "AZ", note: "Cox and CenturyLink. 24h trial, no card, city + device on WhatsApp." },
] as const;

export type CitySlug = (typeof CITIES)[number]["slug"];

export function cityBySlug(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}
