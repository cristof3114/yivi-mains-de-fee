# Yivi mains de fée

Site des sacs en perles de Valérie (Astro, site statique).

## Commandes
- `npm install` puis `npm run dev` : site en local sur http://localhost:4321
- `npm run build` : génère le site dans `dist/`
- `node scripts/preview.mjs` : copie navigable sans serveur dans `preview/`

## Ajouter ou modifier un sac
Tout est dans `src/data/sacs.js` : copier un bloc, changer nom, prix, dimensions…
`vendu: true` affiche « Vendu ». `stripeLink` reçoit le lien de paiement Stripe du sac.

## À faire avant la mise en ligne
- Remplacer les illustrations par les photos (face, dos, intérieur, détail, porté).
- Ajouter le logo.
- Compléter les pages légales (texte entre crochets) : SIRET, adresse, médiateur, tarifs de livraison.
- Créer les liens de paiement Stripe et brancher les formulaires (Netlify Forms).
- Retirer la bannière « Aperçu » dans `src/layouts/Base.astro`.
