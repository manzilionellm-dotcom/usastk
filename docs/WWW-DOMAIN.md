# Add `www.iptvforfirestickusa.com` on Vercel (SSL SAN)

Canonical host is the **apex**: `https://iptvforfirestickusa.com`.

`www` currently fails TLS (`subjectAltName` mismatch). In-repo 308s only run
after the handshake succeeds. Git / this PR cannot issue the certificate.

## Dashboard steps

1. Vercel → project **usastk** → Settings → Domains.
2. Add `www.iptvforfirestickusa.com`.
3. Point DNS CNAME `www` at `cname.vercel-dns.com` (or the value Vercel shows).
4. Wait until the certificate includes `DNS:www.iptvforfirestickusa.com`.
5. Redirect **www → apex**, never apex → www.
6. After www TLS is green, restore HSTS `includeSubDomains; preload` in `lib/csp.ts`.

Until then HSTS is `max-age=63072000` only — no `includeSubDomains`, no `preload`.
