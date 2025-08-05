# 🚀 Structure UX AccessAbility - Plan de développement

## 🏠 1. Accueil — Objectif : captiver et segmenter

**Structure UX :**
- **Hero avec promesse + CTA clair** : "Configurez votre véhicule accessible", "Je suis un particulier / Je suis un pro"
- **Blocs services cliquables**, segmentés par besoin ("Transport PMR", "Aménagement utilitaires", "Solutions professionnelles")
- **Micro-engagement** (quiz 3 questions / mini simulateur embedded)
- **Témoignages clients** → trust
- **Bloc "Pourquoi nous"** : différenciateurs (prix, délais, SAV, labels)
- **Blog preview** (contenu utile) → stratégie de nurturing soft
- **Footer dense mais hiérarchisé** (SEO + parcours secondaire)

🎯 **Conversion visée :** 1 clic = 1 parcours

---

## 🛠 2. Page "Services" — Objectif : structurer l'offre

**Structure UX :**
- **Intro courte avec image mentale** ("Des solutions adaptées à chaque mobilité")
- **3 ou 4 cartes de services cliquables**, avec picto + tagline
- **Chaque carte mène vers une landing de service dédiée** SEO optimisée
- **Intégration d'avis ou "mini-cas clients"** sur chaque carte
- **Encart lead capture** : "Faites une demande pour ce service"

🎯 **Conversion visée :** clic vers page service → CTA vers configurateur ou prise de contact

---

## ⚙️ 3. Page "Configurateur" — Objectif : déclencher des demandes chaudes

**Structure UX :**
- **Formulaire en étapes** (5 max), type Typeform ou swipe UX
- **UX pensée pour le pouce** : sliders, pictos, validation en 1 clic
- **Progress bar + CTA visibles** → éviter la fatigue cognitive
- **À la fin** : "Votre configuration est presque prête – souhaitez-vous recevoir un devis ?" avec email + téléphone préremplis (si cookie)

🎯 **Conversion visée :** formulaire complété = lead chaud ultra-qualifié
🔍 **SEO :** possibilité de déclinaisons "Configurer mon Peugeot Partner PMR", etc.

---

## ✅ 4. Page "Réalisations" — Objectif : preuve sociale massive

**Structure UX :**
- **Grille visuelle de projets** (avec filtres : pro / perso / type véhicule)
- **Chaque réalisation = fiche SEO** : images avant/après, texte riche, citation client, localisation
- **📍 Données locales pour Google** : "Projet mené à Nantes", "Intervention en Drôme"
- **CTA** : "Un projet similaire ? Contactez-nous"

🎯 **Conversion visée :** réassurance, crédibilité → déclencheur d'appel ou demande de devis

---

## 👥 5. Page "À propos" — Objectif : renforcer le facteur humain

**Structure UX :**
- **Histoire de la boîte**, storytelling avec dates-clés
- **Photos ou portraits de l'équipe**
- **Valeurs illustrées** → "Respect – Efficacité – Adaptabilité"
- **Bloc "Nos engagements accessibilité & qualité"**
- **Badge "Entreprise handi-accueillante"** si possible

🎯 **Conversion visée :** création de lien → clic vers services ou contact
🔍 **SEO :** requêtes type "Entreprise aménagement PMR + ville"

---

## 📚 6. Centre de ressources (Blog) — Objectif : SEO + nurturing

**Structure UX :**
- **Catégories** : "Aménagements accessibles", "Normes & aides", "Pro tips pros"
- **Format blog mobile-first**, temps de lecture visible
- **Chaque article = SEO long tail** (ex : "Comment obtenir la PCH pour adapter son véhicule ?")
- **Fin d'article** : suggestion de service ou de prise de contact

🎯 **Conversion visée :** trust → reconnaissance → lead indirect

---

## 📬 7. Contact — Objectif : faciliter l'action

**Structure UX :**
- **Formulaire simplifié**
- **Bouton téléphone & WhatsApp** visibles sur mobile
- **Intégration Google Maps** + coordonnées
- **Bloc "Pourquoi nous contacter ?"** : 3 arguments simples

🎯 **Conversion visée :** appel / formulaire rempli
🔍 **SEO local optimisé** (balises schema.org + hreflang si multilingue)

---

## 🧭 8. Pages satellites SEO (10 à 20 pages)

**Objectif :** capter du trafic qualifié sur des requêtes longues ou spécifiques

**Exemples :**
- "Aménagement de véhicules pour fauteuil roulant"
- "Peugeot Rifter PMR financement"
- "Transformer un van en véhicule accessible"
- "Entreprise aménagement TPMR Seine-et-Marne"

🎯 **Conversion visée :** entrée directe sur un besoin précis → redirection configurateur ou service

---

## 🧰 Tech & optimisation à prévoir

- **Framework :** Next.js 14+ (SSR + SSG + rapidité)
- **Design :** TailwindCSS + composants Atomic Design
- **SEO :** Open Graph, balisage schema.org, sitemap.xml, hreflang, etc.
- **RGPD + performance :** ConsentManager, images WebP, lazy loading, cache CDN, Lighthouse score 90+
- **Analytics :** GA4, Microsoft Clarity, Heatmaps

---

## 📋 Prochaines étapes

1. **Mise à jour de la homepage** selon la structure UX définie
2. **Création des composants** pour les blocs services
3. **Intégration du micro-engagement** (quiz/simulateur)
4. **Développement du configurateur** en étapes
5. **Optimisation SEO** et performance 