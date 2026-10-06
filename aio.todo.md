# À compléter (non lisible sur le site — rien n'a été inventé)

- Débit d'encodage du flux (bitrate vidéo) : `tech.bitrate` = null. La page buffering publie une bande passante minimale, pas un bitrate de flux. Cette bande passante est dans `tech.minBandwidth` (15 Mbps HD, 25 Mbps pour un stick 4K).
- Nombre de chaînes / liste des chaînes : `tech.channelCount` = null
- Horaires d'ouverture du support au-delà de « including weekends » pour l'activation : non publiés
- Durée exacte en jours des paliers 1 / 3 / 6 / 12 mois : non publiée (seuls les libellés et les prix le sont)
- Images : aucune `<img>` sur les pages. Pas d'image produit à décrire. Le composant `AioTranscript` n'a rien à illustrer.
- Vidéos tutoriels : aucune `<video>` ni iframe YouTube/Vimeo. Transcription = null. Le champ injectable est `components/aio-transcript.tsx` (`transcript: string | null`).
- Product : pas d'image produit ni d'avis. `aggregateRating` / `Review` restent interdits (déjà filtrés par `lib/json-ld.ts`). Non inventés.
- Ancre pricing de l'ancien `llms.txt` (`#premium-channels`) : la page d'accueil publie `id="plans"`. Le lien a été aligné sur `/#plans`.
- Test Rich Results Google : à faire à la main sur l'URL de preview. Non exécuté dans cet environnement.
