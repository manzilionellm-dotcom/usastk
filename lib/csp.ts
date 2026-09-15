/** Report-Only CSP. Tighten to Content-Security-Policy after 7 days of clean reports. */
export const CSP_REPORT_ONLY =
  "default-src 'self'; " +
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net; " +
  "style-src 'self' 'unsafe-inline'; " +
  "img-src 'self' data: blob: https:; " +
  "font-src 'self' data: https://fonts.gstatic.com; " +
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net https://graph.facebook.com https://wa.me; " +
  "frame-src https://www.facebook.com https://www.youtube.com; " +
  "frame-ancestors 'self'; " +
  "base-uri 'self'; " +
  "form-action 'self' https://wa.me; " +
  "object-src 'none'; " +
  "upgrade-insecure-requests";

export const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  // No includeSubDomains / preload until www TLS SAN is issued on Vercel.
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "Content-Security-Policy-Report-Only", value: CSP_REPORT_ONLY },
];
