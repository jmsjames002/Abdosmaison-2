# PRD - Blog Fitness Maison

## Problème Statement Original
Créer une page de blog professionnelle, épurée et motivante intitulée "Fitness à la maison : Comment sculpter ses abdos avec les objets du quotidien". 

Le site doit être conforme aux critères de qualité Google AdSense avec :
- Contenu éducatif de qualité
- Design professionnel
- Disclaimers légaux appropriés
- Pages légales (Politique de Confidentialité, Mentions Légales)

## Architecture Technique
- **Frontend**: React avec design system basé sur Network guidelines
- **Backend**: FastAPI avec MongoDB (à implémenter)
- **Styling**: CSS personnalisé suivant les guidelines Network exactes
- **Composants UI**: Composants React personnalisés

## User Personas
1. **L'Économe Motivé** : Cherche des solutions fitness sans abonnement coûteux
2. **Le Parent Occupé** : Manque de temps pour aller en salle, veut s'entraîner à la maison
3. **Le Débutant Confus** : Ne sait pas quel équipement acheter ni comment commencer

## Core Requirements (Static)

### Design System - Network Guidelines
- Palette de couleurs exacte Network :
  - Backgrounds : #FAFFEE (page), #FAFAFF (cards), #EDEDFE (subtle)
  - Text : #004534 (primary), #0C6951 (secondary), #807979 (light)
  - Brand : #D3FF62 (primary accent), #004534 (dark), #0C6951 (hover)
- Boutons pill-shape avec border-radius 25px
- Typographie : Inter font family
- Espacement system : 8px, 16px, 24px, 32px, 48px, 64px
- Cards avec border-radius 32px et shadow subtle
- Hover effects : translateY(-4px) avec shadow enhancement

### Sections Requises
1. **Header** : Navigation fixe avec logo et liens smooth scroll
2. **Hero** : Titre principal, problématique, CTA, image motivante
3. **Système D** : 4 transformations d'objets quotidiens en équipement
4. **Programme** : Routine 15 minutes avec 4 exercices détaillés
5. **FAQ** : Accordion design avec 4 questions/réponses
6. **Disclaimer** : Avertissement légal professionnel
7. **Footer** : Liens légaux, contact, copyright

## Implémenté (Phase 1 - Frontend Only)

### Date : 2025-01-XX

✅ **Frontend Complet avec Mock Data**
- Composants React créés :
  - `Header.jsx` : Navigation fixe avec smooth scroll
  - `Hero.jsx` : Section héro avec métadonnées article
  - `SystemeD.jsx` : Grid de 4 cartes transformation objets
  - `WorkoutRoutine.jsx` : Programme exercices avec cards détaillées
  - `FAQ.jsx` : Accordion interactif avec animations
  - `Disclaimer.jsx` : Avertissement légal
  - `Footer.jsx` : Footer avec liens légaux

- Mock Data (`mockData.js`) :
  - Contenu héro complet
  - 4 items système D avec images
  - 4 exercices avec détails complets
  - 4 FAQ items
  - Disclaimer text
  - Article metadata

- Styling (`App.css`) :
  - Design system Network complet implémenté
  - Responsive design (breakpoints 1024px, 781px, 480px)
  - Animations hover et transitions
  - Accordion smooth animations
  - Grid layouts adaptatifs

- Images professionnelles via Unsplash/Pexels :
  - 3 images hero section
  - 3 images équipement maison
  - 4 images exercices abdos

### Tests Frontend
✅ Navigation smooth scroll fonctionnelle
✅ Hero section avec CTA et image
✅ Grids responsive (Système D et Workout)
✅ Accordion FAQ avec interactions
✅ Disclaimer visible et professionnel
✅ Footer avec liens légaux
✅ Design conforme guidelines Network
✅ Hover effects et animations

## Backend Requirements (À Implémenter - Phase 2)

### Base de Données MongoDB

#### Collections

**1. Articles**
```javascript
{
  _id: ObjectId,
  title: String,
  slug: String, // URL-friendly
  subtitle: String,
  description: String,
  content: {
    hero: {
      title: String,
      subtitle: String,
      description: String,
      image: String,
      imageAlt: String
    },
    systemeDItems: [{
      household: String,
      replacement: String,
      tips: String,
      image: String
    }],
    workoutRoutine: {
      title: String,
      duration: String,
      frequency: String,
      tip: String,
      exercises: [{
        name: String,
        duration: String,
        rest: String,
        description: String,
        image: String,
        tips: String
      }]
    },
    faqItems: [{
      question: String,
      answer: String
    }]
  },
  meta: {
    author: String,
    publishDate: Date,
    readTime: String,
    category: String
  },
  status: String, // "draft", "published", "archived"
  createdAt: Date,
  updatedAt: Date
}
```

**2. Settings**
```javascript
{
  _id: ObjectId,
  disclaimer: {
    title: String,
    content: String
  },
  footer: {
    aboutText: String,
    contactEmail: String
  },
  siteInfo: {
    siteName: String,
    tagline: String
  },
  updatedAt: Date
}
```

### API Endpoints à Créer

#### Articles
- `GET /api/articles` - Liste tous les articles (published only)
- `GET /api/articles/:slug` - Récupère un article par slug
- `POST /api/admin/articles` - Créer un article (admin)
- `PUT /api/admin/articles/:id` - Modifier un article (admin)
- `DELETE /api/admin/articles/:id` - Supprimer un article (admin)

#### Settings
- `GET /api/settings` - Récupère les settings du site
- `PUT /api/admin/settings` - Met à jour les settings (admin)

#### Admin Auth (Simple)
- `POST /api/admin/login` - Authentification admin
- `GET /api/admin/verify` - Vérifier token admin

### Frontend Integration Plan

1. **Remplacer Mock Data** :
   - Créer service API (`/frontend/src/services/api.js`)
   - Hook personnalisé `useArticle()` pour fetcher data
   - Loader state et error handling

2. **Dynamic Routing** :
   - Route `/` : Homepage avec article featured
   - Route `/articles/:slug` : Page article dynamique
   - Route `/admin` : Dashboard admin (optionnel phase 3)

3. **API Integration Points** :
   - `App.js` : Fetch article principal au mount
   - Error boundaries pour gérer les erreurs API
   - Loading skeletons pendant fetch

### Backend Data Seeding

Créer script de seed initial avec :
- Article principal (contenu actuel du mock)
- Settings par défaut (disclaimer, footer)
- Compte admin par défaut

## Prioritized Backlog

### P0 (Critique - Phase 2)
- [ ] Backend : Modèles MongoDB (Articles, Settings)
- [ ] Backend : Endpoints GET articles/settings
- [ ] Frontend : Service API et integration
- [ ] Backend : Seed script avec article initial
- [ ] Testing : Test complet frontend + backend

### P1 (Important - Phase 3)
- [ ] Backend : Admin authentication
- [ ] Backend : CRUD endpoints admin
- [ ] Frontend : Admin dashboard simple
- [ ] Pages légales : Politique Confidentialité et Mentions Légales

### P2 (Nice to Have - Phase 4)
- [ ] Multi-articles support avec liste
- [ ] Search et filtering articles
- [ ] Categories et tags
- [ ] Images upload pour admin
- [ ] Newsletter signup
- [ ] Analytics integration

## Next Tasks (Immediate)
1. Créer modèles MongoDB pour Articles et Settings
2. Implémenter endpoints GET pour fetcher data
3. Créer script de seed avec contenu actuel
4. Intégrer API dans frontend React
5. Tester l'application complète avec testing_agent_v3

## Technical Notes

### Mock to Backend Migration Map
```
mockData.js → MongoDB Collection 'articles'
  - heroContent → articles.content.hero
  - systemeDItems → articles.content.systemeDItems
  - workoutRoutine → articles.content.workoutRoutine
  - faqItems → articles.content.faqItems
  - articleMeta → articles.meta
  - disclaimer → settings.disclaimer
```

### API Response Format
```javascript
// GET /api/articles/transformez-votre-salon
{
  "success": true,
  "data": {
    "article": { /* article object */ },
    "settings": { /* settings object */ }
  }
}
```

## Success Metrics
- ✅ Design professionnel conforme AdSense
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Performance (images optimisées, lazy loading)
- ⏳ Backend CMS fonctionnel
- ⏳ Contenu éditable facilement
- ⏳ SEO optimisé (meta tags, structured data)

---
*Dernière mise à jour : 2025-01-XX*
