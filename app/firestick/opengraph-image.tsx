import { ogCard, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-card";
import { FIRESTICK_H1 } from "@/lib/page-copy";

export const alt = FIRESTICK_H1;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogCard(FIRESTICK_H1);
}
