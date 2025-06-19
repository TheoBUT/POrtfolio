
# Portfolio Théo V.

Portfolio personnel de Théo Vincent, étudiant en BUT Informatique - Cybersécurité, Systèmes & Réseaux.

## Technologies utilisées

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Shadcn/ui
- Lucide React (icônes)

## Installation et développement

1. Cloner le repository
```bash
git clone https://github.com/votre-username/portfolio-theo-v.git
cd portfolio-theo-v
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer le serveur de développement
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:8080`

## Déploiement

### GitHub Pages (Automatique)

Ce projet est configuré pour un déploiement automatique sur GitHub Pages via GitHub Actions.

1. Allez dans les paramètres de votre repository GitHub
2. Dans "Pages", sélectionnez "GitHub Actions" comme source
3. Chaque push sur la branche `main` déclenchera automatiquement le déploiement

### Déploiement manuel

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## Structure du projet

```
src/
├── components/          # Composants React
│   ├── ui/             # Composants UI de base (shadcn/ui)
│   ├── About.tsx       # Section À propos
│   ├── Contact.tsx     # Section Contact
│   ├── Footer.tsx      # Pied de page
│   ├── Hero.tsx        # Section d'accueil
│   ├── Navigation.tsx  # Navigation
│   └── Projects.tsx    # Section Projets
├── pages/              # Pages de l'application
├── hooks/              # Hooks personnalisés
├── lib/                # Utilitaires
└── main.tsx           # Point d'entrée de l'application
```

## Personnalisation

Pour adapter ce portfolio à vos besoins :

1. Modifiez les informations personnelles dans `src/components/Hero.tsx`
2. Ajoutez vos projets dans `src/components/Projects.tsx`
3. Mettez à jour les informations de contact dans `src/components/Contact.tsx`
4. Personnalisez les couleurs et le style dans les fichiers de composants

## Contact

- Email: TheoBUTInf@outlook.com
