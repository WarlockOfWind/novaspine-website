# 🎨 Guidelines Stylistiques - AccessAbility

## 📋 Table des matières
- [Palette de couleurs](#palette-de-couleurs)
- [Typographie](#typographie)
- [Espacements](#espacements)
- [Effets visuels](#effets-visuels)
- [Composants](#composants)
- [Animations](#animations)
- [Responsive Design](#responsive-design)

---

## 🎨 Palette de couleurs

### Couleurs principales
```css
/* Bleu principal - AccessAbility */
--blue-primary: #1e62d0;        /* Bleu principal de la marque */
--blue-secondary: #4b94e6;       /* Bleu secondaire plus clair */
--blue-dark: #0C1C3D;           /* Bleu foncé pour les textes */
--blue-sky: #d9e6f8;            /* Bleu ciel très clair */

/* Jaune principal - Call-to-Action */
--yellow-primary: #f2cb05;      /* Jaune principal pour les CTA */
--yellow-hover: #e6c205;        /* Jaune au survol */

/* Neutres */
--white: #ffffff;
--white-transparent: rgba(255, 255, 255, 0.1);  /* Fond transparent */
--white-transparent-20: rgba(255, 255, 255, 0.2); /* Bordures */
```

### Utilisation des couleurs
- **Bleu principal** : Headers, navigation, icônes principales
- **Bleu secondaire** : Éléments secondaires, hover states
- **Jaune** : Boutons CTA, éléments d'action
- **Blanc transparent** : Fond glassmorphism, cartes

---

## 📝 Typographie

### Famille de police
```css
font-family: 'Poppins', sans-serif;
```

### Hiérarchie des titres
```css
/* H1 - Titre principal hero */
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* H2 - Titres de section */
h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 600;
  line-height: 1.2;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* H3 - Titres de cartes */
h3 {
  font-size: clamp(1.25rem, 3vw, 1.875rem);
  font-weight: 600;
  line-height: 1.2;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
```

### Textes de contenu
```css
/* Texte principal */
.text-primary {
  font-size: 1.125rem;
  color: white;
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* Texte secondaire */
.text-secondary {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
```

---

## 📏 Espacements

### Système de spacing
```css
/* Padding sections */
.section-padding {
  padding: 4rem 2rem;  /* py-16 px-8 */
}

/* Marges entre éléments */
.section-margin {
  margin-bottom: 3rem;  /* mb-12 */
}

/* Espacement des grilles */
.grid-gap {
  gap: 2rem;  /* gap-8 */
}
```

### Breakpoints
```css
/* Mobile First */
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

---

## ✨ Effets visuels

### Glassmorphism
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
}
```

### Ombres
```css
/* Ombre légère */
.shadow-light {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Ombre moyenne */
.shadow-medium {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

/* Ombre forte */
.shadow-heavy {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
```

### Drop shadows pour le texte
```css
.drop-shadow-lg {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.drop-shadow-md {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

.drop-shadow-sm {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05));
}
```

---

## 🧩 Composants

### Header
```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 0.5rem 2rem;
  transition: all 0.3s ease;
}

.header-transparent {
  background: transparent;
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

### Boutons CTA
```css
.btn-primary {
  background: #f2cb05;
  color: #1e62d0;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.btn-primary:hover {
  background: #e6c205;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}
```

### Cartes
```css
.card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: scale(1.05);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}
```

### Icônes circulaires
```css
.icon-circle {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.icon-circle-primary {
  background: #1e62d0;
  color: white;
}

.icon-circle-secondary {
  background: #4b94e6;
  color: white;
}

.icon-circle-accent {
  background: #f2cb05;
  color: #1e62d0;
}
```

---

## 🎬 Animations

### Transitions de base
```css
.transition-base {
  transition: all 0.3s ease;
}

.transition-smooth {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### Animations d'entrée
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```

### Hover effects
```css
.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
```

---

## 📱 Responsive Design

### Mobile First
```css
/* Base mobile */
.container {
  padding: 0 1rem;
  max-width: 100%;
}

/* Tablette */
@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
    max-width: 768px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
    max-width: 1024px;
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .container {
    padding: 0 2rem;
    max-width: 1280px;
  }
}
```

### Grilles responsives
```css
.grid-responsive {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 🎯 Bonnes pratiques

### 1. Cohérence visuelle
- Utiliser toujours la même palette de couleurs
- Maintenir la hiérarchie typographique
- Respecter les espacements définis

### 2. Accessibilité
- Contraste suffisant (4.5:1 minimum)
- Tailles de texte lisibles (16px minimum)
- Focus visible sur les éléments interactifs

### 3. Performance
- Utiliser `will-change` pour les animations
- Optimiser les images et icônes
- Minimiser les reflows avec `transform`

### 4. Mobile
- Toujours tester sur mobile en premier
- Utiliser des tailles de touch target appropriées (44px minimum)
- Éviter les animations complexes sur mobile

---

## 📚 Classes utilitaires

### Couleurs
```css
.text-white { color: white; }
.text-blue { color: #1e62d0; }
.text-yellow { color: #f2cb05; }
.bg-blue { background: #1e62d0; }
.bg-yellow { background: #f2cb05; }
.bg-glass { background: rgba(255, 255, 255, 0.1); }
```

### Espacements
```css
.p-section { padding: 4rem 2rem; }
.m-section { margin: 4rem 0; }
.gap-standard { gap: 2rem; }
```

### Effets
```css
.glass { backdrop-filter: blur(10px); }
.shadow-standard { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
.hover-lift { transition: all 0.3s ease; }
.hover-lift:hover { transform: translateY(-2px); }
```

---

*Ces guidelines garantissent une cohérence visuelle et une expérience utilisateur optimale sur tous les composants AccessAbility.* 