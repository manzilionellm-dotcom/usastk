/**
 * Neutral editorial guides: informational pages about licensed services only.
 * On these paths the site renders no WhatsApp link, no trial/pricing CTA and no commercial JSON-LD.
 */
export const NEUTRAL_PATHS: ReadonlySet<string> = new Set([
  "/blog/best-legal-iptv-firestick-usa",
  "/blog/is-iptv-legal-in-the-us",
]);

export function isNeutralPath(path: string | null | undefined): boolean {
  if (!path) return false;
  const clean = path.length > 1 ? path.replace(/\/+$/, "") : path;
  return NEUTRAL_PATHS.has(clean);
}

/** Help guides can provide their own support contact without inheriting sales CTAs. */
export function hidesSalesPromotions(path: string | null | undefined): boolean {
  return isNeutralPath(path) || path?.replace(/\/+$/, "") === "/faq/fire-tv-iphone-remote-second-stick";
}
