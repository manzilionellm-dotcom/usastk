import { ogCard, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-card";
import { FAQ_H1 } from "@/lib/faq-bank";

export const alt = FAQ_H1;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogCard(FAQ_H1);
}
