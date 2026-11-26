import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { SITE_URL, WA_PREFILL, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "24-hour Firestick day pass | USD 5",
  description: "Check your Fire TV model and local availability, then request a prepaid 24-hour pass for USD 5 on WhatsApp.",
  alternates: { canonical: SITE_URL + "/free-trial" },
};
export default function DayPassPage() {
  return <><SiteHeader /><main className="mx-auto max-w-3xl px-6 py-16">
    <h1 className="text-4xl font-semibold">24-hour Firestick day pass</h1>
    <p className="my-5">The day pass is USD 5 for 24 hours on one screen. Ask about your Fire TV model, the app and availability in your location before payment. Confirm the activation and expiry times in your time zone.</p>
    <a className="text-green-400 underline" href={whatsappHref(WA_PREFILL.day)}>Ask about the USD 5 pass on WhatsApp · +44 7307 410512</a>
    <p className="mt-8">For longer access, one month is USD 15 and one year is USD 65. <Link href="/#plans" className="underline">Compare prepaid plans</Link>.</p>
  </main><SiteFooter /></>;
}
