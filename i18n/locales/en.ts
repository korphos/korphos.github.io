export default defineI18nLocale(async () => {
  return {
    nav: {
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    theme: {
      toggleToDark: 'Switch to dark theme',
      toggleToLight: 'Switch to light theme',
    },
    languageSwitcher: {
      label: 'Language',
    },
    hero: {
      scrollHint: 'Explore',
    },
    projects: {
      viewOthers: 'More projects',
      otherOrgFallback: 'Project',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    seo: {
      title: 'Alexandre Chenieux — Senior Full-Stack Developer · Cloud & DevOps',
      description:
        'Portfolio of Alexandre Chenieux, a Montreal-based senior full-stack developer specializing in Node.js, TypeScript, and cloud infrastructure (Docker, Kubernetes, Azure).',
    },
  }
})
