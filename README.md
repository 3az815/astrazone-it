# AstraZone IT Solutions — Site Web

Site vitrine complet pour **AstraZone IT Solutions**, construit avec React + Vite + TypeScript + Tailwind CSS.

## Démarrage

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:5173`.

## Build de production

```bash
npm run build
npm run preview   # pour prévisualiser le build
```

## Structure du projet

```
src/
├── components/       → un composant par section (Navbar, Hero, Services, ...)
├── data/              → contenu éditable (services, équipes, technologies, tarifs, FAQ)
├── hooks/             → useReveal (animations au scroll), useActiveSection (navbar)
├── assets/            → logo AstraZone
├── App.tsx            → assemblage des sections
├── main.tsx           → point d'entrée
└── index.css          → styles globaux, tokens Tailwind, utilitaires
```

## ⚠️ À propos du logo

Aucun fichier logo n'a été fourni dans la conversation. Un **wordmark de remplacement**
(`src/assets/astrazone-logo.svg`) a été créé pour que le site soit fonctionnel dès
maintenant. Pour utiliser le vrai logo AstraZone :

1. Placez votre fichier logo (`.svg` ou `.png`) dans `src/assets/`.
2. Ouvrez `src/components/Logo.tsx` et mettez à jour l'import en haut du fichier :
   ```ts
   import logo from '../assets/astrazone-logo.png' // ou .svg
   ```
3. Le logo se mettra à jour automatiquement dans la Navbar et le Footer.

Pour le favicon, remplacez `public/astrazone-icon.svg` (ou changez le lien
`<link rel="icon">` dans `index.html` si vous préférez un `.ico`/`.png`).

## Modifier le contenu

Tout le contenu répétitif (services, équipes, technologies, tarifs, FAQ) vit dans
`src/data/`. Modifiez ces fichiers `.ts` pour changer les textes, ajouter ou retirer
des éléments — aucun changement de composant n'est nécessaire.

## Design

Identité "White Cyber IT" : fond blanc, bleu `#006BFF` / `#008CFF`, accent cyan
`#00C2FF`, texte `#0F172A`. Typographies Space Grotesk (titres) + Inter (texte) +
JetBrains Mono (labels techniques). Le visuel signature (bouclier + topologie
réseau animée) est en SVG pur pour rester léger et net à toute résolution.

## Formulaire de devis

Le formulaire (`src/components/QuoteForm.tsx`) valide les champs côté client puis
ouvre le client mail de l'utilisateur (`mailto:`) avec les informations
pré-remplies, adressées à `astrazoneit@gmail.com`. Aucun envoi d'email n'est simulé
côté serveur — vous pouvez brancher un vrai service d'envoi (Formspree, EmailJS,
API backend, etc.) en remplaçant la logique dans `handleSubmit`.
