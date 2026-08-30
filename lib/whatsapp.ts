/**
 * Centralized WhatsApp contact helper.
 *
 * Every WhatsApp call-to-action across the site MUST import from here so the
 * number and the default prefill stay consistent. Do not hard-code wa.me links
 * anywhere else.
 */

/** Sales/support WhatsApp number in international format, digits only. */
export const WHATSAPP_NUMBER = "447307410512";

/** Human-readable version for display in copy. */
export const WHATSAPP_DISPLAY = "+44 7307 410512";

/** Default prefill used unless a page passes a more specific message. */
export const WHATSAPP_PREFILL =
  "Hi, I came from iptvforfirestickusa.com and I want a subscription.";

/**
 * Build a wa.me deep link with a prefilled message.
 * @param message Optional custom prefill. Falls back to WHATSAPP_PREFILL.
 */
export function whatsappLink(message: string = WHATSAPP_PREFILL): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
