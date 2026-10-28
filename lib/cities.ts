export const CITIES = [
  { slug: "new-york", name: "New York", state: "NY", note: "Spectrum and Verizon Fios. Check the player and authorized stream requirements, then compare supported Ethernet and Wi-Fi on your own Firestick without assuming either connection will perform better." },
  { slug: "los-angeles", name: "Los Angeles", state: "CA", note: "Spectrum / AT&T. Confirm the Firestick model and supported network options before buying an adapter. If supported, compare Ethernet and available Wi-Fi one variable at a time, keeping the original settings for reversal." },
  { slug: "houston", name: "Houston", state: "TX", note: "Xfinity and AT&T fiber. Check the documented requirements for your player, authorized stream format and simultaneous use, then measure on the playback device. An advertised speed alone does not guarantee 4K playback." },
  { slug: "miami", name: "Miami", state: "FL", note: "AT&T and Xfinity. Test the 24h trial on the same Wi-Fi you watch at night." },
  { slug: "chicago", name: "Chicago", state: "IL", note: "Xfinity. Record the Firestick model, player, time and error before changing network settings. Compare available Wi-Fi bands or Ethernet only when supported, one variable at a time; a dense building alone does not identify the cause." },
  { slug: "dallas", name: "Dallas", state: "TX", note: "AT&T fiber and Spectrum. Trial first, then pick a plan on WhatsApp." },
  { slug: "atlanta", name: "Atlanta", state: "GA", note: "Xfinity / AT&T. Same 3-step Firestick setup as the rest of the US." },
  { slug: "phoenix", name: "Phoenix", state: "AZ", note: "Cox and CenturyLink. 24h trial, no card, city + device on WhatsApp." },
  { slug: "philadelphia", name: "Philadelphia", state: "PA", note: "Xfinity and Verizon. Trial on the same Wi-Fi you use after 8pm." },
  { slug: "seattle", name: "Seattle", state: "WA", note: "Xfinity / Ziply. Note whether one channel or all channels are affected, then check the player requirements and test on your Firestick at viewing time. A Wi-Fi band alone does not prove the cause of a freeze." },
  { slug: "denver", name: "Denver", state: "CO", note: "Xfinity and CenturyLink. Same $12–$55 plans, 24h trial, no card." },
  { slug: "boston", name: "Boston", state: "MA", note: "Xfinity / Verizon. Firestick Downloader setup is identical to the rest of the US." },
  { slug: "orlando", name: "Orlando", state: "FL", note: "Spectrum and AT&T. Test live sports at night on the 24h trial first." },
  { slug: "las-vegas", name: "Las Vegas", state: "NV", note: "Cox. 24h trial on your own stick. City + device on WhatsApp." },
  { slug: "san-diego", name: "San Diego", state: "CA", note: "Cox / Spectrum. Test the existing Firestick position and connection before buying hardware. If an adapter is needed, confirm compatibility with the exact device; compare one supported change at a time and restore an unsuccessful change." },
  { slug: "washington-dc", name: "Washington DC", state: "DC", note: "Xfinity / Verizon. Same 3-step Firestick setup. Trial first." },
] as const;

export type CitySlug = (typeof CITIES)[number]["slug"];

export function cityBySlug(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}
