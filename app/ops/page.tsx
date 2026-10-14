import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Not found",
  robots: { index: false, follow: false },
};

/** Closer copy stays in lib/followup.ts and is not rendered. */
export default function OpsPage() {
  notFound();
}
