# 🚀 Guide de Déploiement NovaSpine

## 📋 Prérequis

- Compte GitHub
- Compte Vercel
- Node.js 18+ installé
- Git installé

## 🔧 Configuration Git

### 1. Créer un nouveau dépôt GitHub

1. Allez sur [GitHub](https://github.com)
2. Cliquez sur "New repository"
3. Nommez-le : `novaspine-website`
4. Description : `Site web professionnel de NovaSpine - Spécialiste français des implants et instruments pour la chirurgie rachidienne`
5. Choisissez "Public" ou "Private"
6. **NE PAS** initialiser avec README, .gitignore ou licence
7. Cliquez sur "Create repository"

### 2. Connecter le dépôt local à GitHub

```bash
# Remplacez YOUR_USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/YOUR_USERNAME/novaspine-website.git

# Pousser le code vers GitHub
git push -u origin main
```

## 🌐 Déploiement sur Vercel

### 1. Connexion à Vercel

1. Allez sur [Vercel](https://vercel.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "New Project"

### 2. Import du projet

1. Sélectionnez le dépôt `novaspine-website`
2. Vercel détectera automatiquement Next.js
3. Cliquez sur "Deploy"

### 3. Configuration automatique

Vercel utilisera automatiquement :
- `vercel.json` pour la configuration
- `package.json` pour les scripts
- Les variables d'environnement par défaut

### 4. Variables d'environnement (optionnel)

Si nécessaire, ajoutez dans Vercel :
```
NEXT_PUBLIC_SITE_URL=https://votre-domaine.vercel.app
```

## 🔄 Déploiement continu

### 1. Branche main
- Chaque push sur `main` déclenche un déploiement automatique
- Vercel déploie automatiquement les changements

### 2. Branches de développement
- Créez des branches pour les nouvelles fonctionnalités
- Vercel créera des previews automatiquement

## 📱 Configuration du domaine personnalisé

### 1. Dans Vercel
1. Allez dans les paramètres du projet
2. Section "Domains"
3. Ajoutez votre domaine (ex: `novaspine.fr`)

### 2. Configuration DNS
Ajoutez ces enregistrements chez votre registrar :
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

## 🧪 Tests de déploiement

### 1. Test local
```bash
npm run build
npm start
```

### 2. Test de production
- Vérifiez que le site fonctionne sur Vercel
- Testez la responsivité sur différents appareils
- Vérifiez la performance avec Lighthouse

## 📊 Monitoring

### 1. Vercel Analytics
- Activer dans les paramètres du projet
- Suivre les performances et erreurs

### 2. Google Analytics (optionnel)
- Ajouter le code GA dans `app/layout.tsx`
- Configurer les événements personnalisés

## 🔒 Sécurité

Le projet inclut automatiquement :
- Headers de sécurité (XSS, Frame Options)
- Cache optimisé pour les images
- Protection contre les attaques courantes

## 📞 Support

En cas de problème :
1. Vérifiez les logs Vercel
2. Testez en local avec `npm run build`
3. Consultez la documentation Next.js et Vercel

---

**NovaSpine** - La colonne vertébrale de l'innovation 🏥
