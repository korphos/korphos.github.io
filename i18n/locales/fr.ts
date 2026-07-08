export default defineI18nLocale(async () => {
  return {
    nav: {
      projects: 'Projets',
      experience: 'Expérience',
      contact: 'Contact',
    },
    theme: {
      toggleToDark: 'Activer le thème sombre',
      toggleToLight: 'Activer le thème clair',
    },
    languageSwitcher: {
      label: 'Langue',
    },
    hero: {
      scrollHint: 'Découvrir',
    },
    projects: {
      viewOthers: 'Voir plus de projets',
      otherOrgFallback: 'Projet',
    },
    footer: {
      rights: 'Tous droits réservés.',
    },
    seo: {
      title: 'Alexandre Chenieux — Développeur Full-Stack Senior · Cloud & DevOps',
      description:
        "Portfolio d'Alexandre Chenieux, développeur full-stack senior à Montréal spécialisé en Node.js, TypeScript et infrastructure cloud (Docker, Kubernetes, Azure).",
    },
  }
})
