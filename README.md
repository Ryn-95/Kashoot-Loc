# Portfolio Moderne & Créatif

Ce projet est un portfolio ultra-moderne développé avec **Next.js 14**, **Tailwind CSS**, **Framer Motion** et **TypeScript**. Il a été conçu pour offrir une expérience utilisateur immersive, performante et esthétique.

## 🚀 Fonctionnalités Clés

-   **Architecture Moderne** : Utilisation de Next.js (App Router) pour des performances optimales (SSR/SSG).
-   **Design Unique** : Interface minimaliste et soignée avec un mode sombre/clair (Dark Mode) persistant.
-   **Animations Fluides** : Intégration de Framer Motion pour des transitions élégantes et Lenis pour un défilement ultra-doux (Smooth Scroll).
-   **Contenu Dynamique** :
    -   **Hero Section** : Introduction impactante avec animations.
    -   **Compétences** : Présentation claire des stacks techniques.
    -   **Projets** : Galerie filtrable par catégorie avec effets de survol.
    -   **Contact** : Formulaire de contact stylisé (prêt à être connecté à un backend).
-   **Performance** : Optimisation des images (`next/image`), code splitting automatique, et scores Lighthouse élevés.

## 🛠️ Stack Technique

-   **Framework** : [Next.js 14](https://nextjs.org/)
-   **Langage** : [TypeScript](https://www.typescriptlang.org/)
-   **Styling** : [Tailwind CSS](https://tailwindcss.com/)
-   **Animations** : [Framer Motion](https://www.framer.com/motion/)
-   **Scroll** : [Lenis](https://lenis.studiofreight.com/)
-   **Icônes** : [Lucide React](https://lucide.dev/)
-   **Qualité de Code** : ESLint, Prettier.

## 📦 Installation et Démarrage

### Prérequis

-   Node.js 18.17 ou supérieur
-   npm ou yarn

### Installation

1.  Clonez le dépôt (si applicable) ou accédez au dossier du projet :
    ```bash
    cd portfolio
    ```

2.  Installez les dépendances :
    ```bash
    npm install
    ```

### Développement

Pour lancer le serveur de développement local :

```bash
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

### Build & Production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Pour prévisualiser la version de production localement :

```bash
npm start
```

## 🚀 Déploiement

Ce projet est optimisé pour être déployé sur **Vercel** (la plateforme des créateurs de Next.js).

1.  Poussez votre code sur GitHub/GitLab/Bitbucket.
2.  Importez le projet sur Vercel.
3.  Les paramètres de build sont détectés automatiquement (`npm run build`).
4.  Déployez !

## 📁 Structure du Projet

```
src/
├── app/                # Pages et Layout (App Router)
│   ├── globals.css     # Styles globaux et configuration Tailwind
│   ├── layout.tsx      # Layout principal (Providers, Header, Footer)
│   └── page.tsx        # Page d'accueil (Composition des sections)
├── components/
│   ├── layout/         # Header, Footer
│   ├── sections/       # Hero, Skills, Projects, Contact
│   ├── ui/             # Composants réutilisables
│   ├── theme-provider.tsx # Gestion du mode sombre
│   └── smooth-scroller.tsx # Configuration Lenis Scroll
├── lib/                # Utilitaires (cn, etc.)
└── hooks/              # Hooks personnalisés
```

## 🎨 Personnalisation

-   **Couleurs** : Modifiez les variables CSS dans `src/app/globals.css` ou la configuration dans `tailwind.config.ts`.
-   **Contenu** : Les données (projets, compétences) sont actuellement définies dans les composants respectifs (`src/components/sections/`). Pour une application plus large, elles peuvent être déplacées dans des fichiers JSON ou une CMS.

---

© 2025 - Développé avec passion.
