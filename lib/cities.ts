export const CITIES = [
  { slug: "new-york", name: "New York", state: "NY", note: "Spectrum and Verizon Fios. Ethernet to the Firestick beats apartment Wi-Fi." },
  { slug: "los-angeles", name: "Los Angeles", state: "CA", note: "Spectrum / AT&T. 5 GHz Wi-Fi or a $15 Ethernet adapter on the stick." },
  { slug: "houston", name: "Houston", state: "TX", note: "Xfinity and AT&T fiber. 25 Mbps is enough for one 4K stick." },
  { slug: "miami", name: "Miami", state: "FL", note: "AT&T and Xfinity. Test the 24h trial on the same Wi-Fi you watch at night." },
  { slug: "chicago", name: "Chicago", state: "IL", note: "Xfinity. Avoid 2.4 GHz in dense buildings — use 5 GHz or Ethernet." },
  { slug: "dallas", name: "Dallas", state: "TX", note: "AT&T fiber and Spectrum. Trial first, then pick a plan on WhatsApp." },
  { slug: "atlanta", name: "Atlanta", state: "GA", note: "Xfinity / AT&T. Same 3-step Firestick setup as the rest of the US." },
  { slug: "phoenix", name: "Phoenix", state: "AZ", note: "Cox and CenturyLink. 24h trial, no card, city + device on WhatsApp." },
  { slug: "philadelphia", name: "Philadelphia", state: "PA", note: "Xfinity and Verizon. Trial on the same Wi-Fi you use after 8pm." },
  { slug: "seattle", name: "Seattle", state: "WA", note: "Xfinity / Ziply. 5 GHz or Ethernet — apartment 2.4 GHz freezes HD." },
  { slug: "denver", name: "Denver", state: "CO", note: "Xfinity and CenturyLink. Same $12–$55 plans, 24h trial, no card." },
  { slug: "boston", name: "Boston", state: "MA", note: "Xfinity / Verizon. Firestick Downloader setup is identical to the rest of the US." },
  { slug: "orlando", name: "Orlando", state: "FL", note: "Spectrum and AT&T. Test live sports at night on the 24h trial first." },
  { slug: "las-vegas", name: "Las Vegas", state: "NV", note: "Cox. 24h trial on your own stick. City + device on WhatsApp." },
  { slug: "san-diego", name: "San Diego", state: "CA", note: "Cox / Spectrum. Ethernet adapter if the stick sits behind the TV." },
  { slug: "washington-dc", name: "Washington DC", state: "DC", note: "Xfinity / Verizon. Same 3-step Firestick setup. Trial first." },
] as const;

export type CitySlug = (typeof CITIES)[number]["slug"];

export function cityBySlug(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}
