/**
 * Neutral editorial guides: informational pages about licensed services only.
 * On these paths the site renders no WhatsApp link, no trial/pricing CTA and no commercial JSON-LD.
 */
export const NEUTRAL_PATHS: ReadonlySet<string> = new Set([
  "/blog/best-legal-iptv-firestick-usa",
]);

export function isNeutralPath(path: string | null | undefined): boolean {
  if (!path) return false;
  const clean = path.length > 1 ? path.replace(/\/+$/, "") : path;
  return NEUTRAL_PATHS.has(clean);
}
