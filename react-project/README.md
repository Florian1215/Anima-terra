# Anima Terra — React / Next.js rewrite

Ce dossier contient une base Next.js + Tailwind pour recréer le site exporté dans `websites/anima-terra.com`.

Principales décisions:
- Next.js (pages router) pour facilité de mapping des pages statiques
- Tailwind CSS pour styles utilitaires + un fichier `styles/globals.css` centralisant les règles (typographie, boutons, couleurs)
- SEO: exemples de meta tags, balisage sémantique pour index.html

Etapes suivantes (à exécuter localement):
1. Installer les dépendances: `cd react-project && npm install` (ou `pnpm`/`yarn`)
2. Copier les assets (images, fonts) depuis `websites/anima-terra.com/wp-content/uploads` dans `react-project/public/` et mettre à jour les chemins d'images
3. Créer les pages React correspondantes aux fichiers HTML exportés (nom de page et structure sémantique)
4. Lancer en dev: `npm run dev` puis vérifier l'accessibilité et le référencement

Notes:
- Le scaffold fournit `pages/index.js`, le layout et `styles/globals.css`.
- Le fichier `tailwind.config.js` référence le dossier `../websites/anima-terra.com/**/*.html` pour faciliter la transition des classes utilitaires si on migre progressivement.

Si tu veux, je peux:
- générer automatiquement des pages React pour chaque HTML exporté (conversion partielle du HTML en JSX)
- copier les images dans public/ et réécrire les chemins dans les pages

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
