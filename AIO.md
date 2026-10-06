# AIO (Sprint) — source unique : aio.config.json

- `pnpm aio:llms` régénère `public/llms.txt` depuis les faits du config (prix, technique, 10 Q/R). Les valeurs `null` restent « not stated ».
- `pnpm build && pnpm start`, puis `node scripts/aio-check.mjs http://localhost:3000/` : preuve sur le HTML brut (Citation Hooks 40–60 mots, JSON-LD parsable, alt, transcription vidéo, `/llms.txt`).
- Les h3 de FAQ et le paragraphe qui suit sont rendus en SSR (`AioCitationHooks`), jamais dans un accordéon.
- JSON-LD existant (Organization, WebSite, Service, OfferCatalog, FAQPage, HowTo) est complété avec des `Product` pour l'essai 24 h et les quatre durées. Pas de second FAQPage sur une page qui en a déjà un.
- Vidéo : `AioTranscript` avec `transcript={null}` tant qu'aucune vidéo n'est publiée. Voir `aio.todo.md`.
