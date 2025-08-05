# Access-Ability Website

Site web pour Access-Ability - Solutions d'accessibilité numérique.

## Technologies utilisées

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **React 18** - Bibliothèque UI

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Démarrer en production
npm start
```

## Structure du projet

```
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants React
│   └── layout/           # Composants de mise en page
│       ├── Header.tsx    # En-tête du site
│       └── Footer.tsx    # Pied de page
├── public/               # Assets statiques
└── package.json          # Dépendances et scripts
```

## Développement

Le site est accessible sur `http://localhost:3000` en mode développement.

## Déploiement

Le projet peut être déployé sur Vercel, Netlify ou tout autre service supportant Next.js.
