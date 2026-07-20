export interface ImageAsset {
  src: string
  alt: string
  width: number
  height: number
  fit?: 'cover' | 'contain'
}

export interface ProjectLink {
  label: string
  href: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface CodeSnippet {
  lang: string
  code: string
}

export interface Project {
  id: string
  title: string
  org?: string
  period?: string
  description: string
  bullets?: string[]
  tags: string[]
  image?: ImageAsset
  code?: CodeSnippet
  links?: ProjectLink[]
  highlight?: boolean
  wide?: boolean
}

export interface ExperienceEntry {
  org: string
  role: string
  period: string
  bullets: string[]
}

export interface EducationEntry {
  school: string
  degree: string
  period: string
}

export interface PortfolioContent {
  hero: {
    name: string
    title: string
    pitch: string
    location: string
    ctaPrimary: string
    ctaSecondary: string
  }
  about: {
    skillGroups: SkillGroup[]
  }
  featuredProjects: {
    heading: string
    intro: string
    items: Project[]
  }
  otherProjects: {
    heading: string
    items: Project[]
  }
  experience: {
    heading: string
    items: ExperienceEntry[]
  }
  education: {
    heading: string
    items: EducationEntry[]
  }
  contact: {
    heading: string
    blurb: string
    email: string
    references: string
  }
}

const fr: PortfolioContent = {
  hero: {
    name: 'Alexandre Chenieux',
    title: 'Développeur Full-Stack Senior — Cloud & DevOps',
    pitch:
      "{years} ans d'expérience en développement, spécialisé en Node.js, TypeScript et infrastructure cloud. Je prends en charge des projets complexes de l'architecture à la production, aussi à l'aise en autonomie qu'en étroite collaboration avec les équipes produit et ingénierie.",
    location: 'Montréal, QC, Canada',
    ctaPrimary: 'Voir mes projets',
    ctaSecondary: 'Me contacter',
  },
  about: {
    skillGroups: [
      {
        label: 'Langages',
        items: [
          'TypeScript',
          'JavaScript',
          'Node.js',
          'React',
          'Next.js',
          'Vue',
          'Nuxt',
          'Angular',
          'Rust',
          'PHP',
          'Python',
          'Java',
          'C++',
        ],
      },
      { label: 'Bases de données', items: ['PostgreSQL', 'MongoDB', 'SQL Server', 'MySQL'] },
      {
        label: 'DevOps / Cloud',
        items: ['Docker', 'Kubernetes', 'Azure', 'AWS', 'GCP', 'GitHub Actions', 'GitLab CI', 'Jenkins'],
      },
      {
        label: 'Auth / Sécurité',
        items: ['WebAuthn / FIDO2 Passkeys', 'OAuth2', 'SSO', 'HTTPS', 'Pare-feux', 'Protection XSS/SQLi/DNS'],
      },
      { label: 'Protocoles', items: ["SMTP", 'DNS (SPF/DKIM/DMARC)', 'RADIUS', "HTTPS (Let's Encrypt)"] },
      { label: 'Autres', items: ['WebRTC', 'GraphQL', 'LiveKit', 'D3.js', 'Keycloak', 'WASM', 'Linux/Bash'] },
    ],
  },
  featuredProjects: {
    heading: 'Projets phares',
    intro: "Une sélection de projets menés de l'architecture à la mise en production, en solo ou en collaboration avec des équipes produit et ingénierie.",
    items: [
      {
        id: 'oneroom',
        title: 'OneRoom — Visioconférence hybride',
        org: 'X2O Media',
        period: '2025 – 2026',
        description:
          "OneRoom combine du matériel en salle (écrans, caméras, micros) avec une expérience web distante en une plateforme de visioconférence unifiée, pour éliminer la friction entre salles physiques et participants à distance.",
        bullets: [
          'Configuration du serveur LiveKit pour le routage média temps réel entre appareils en salle et clients distants',
          'Signalement WebRTC et subscriptions GraphQL pour synchroniser l\'état entre clients hétérogènes',
          'Intégration de Keycloak (SSO) et front-end Next.js avec Shadcn UI / Tailwind CSS',
        ],
        tags: ['Next.js', 'GraphQL', 'WebRTC', 'LiveKit', 'Keycloak', 'TypeScript'],
        image: {
          src: '/images/oneroom.webp',
          alt: 'Salle de conférence hybride OneRoom avec écran de participants distants et table connectée',
          width: 1280,
          height: 720,
        },
        wide: true,
      },
      {
        id: 'cross-stitch',
        title: 'Générateur de patrons de point de croix',
        org: 'Projet personnel',
        description:
          "Une application qui transforme n'importe quelle image en patron de point de croix imprimable, avec légende de couleurs DMC automatique. Codée avec Claude Code pour ma copine, qui adore le point de croix et voulait transformer ses propres photos en patrons sans jongler avec un logiciel compliqué.",
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Claude Code'],
        image: {
          src: '/images/cross-stitch-app.webp',
          alt: "Capture d'écran de l'application montrant un patron de point de croix coloré généré à partir d'une image, avec sa légende de couleurs DMC",
          width: 1280,
          height: 593,
        },
        links: [
          { label: "Essayer l'application", href: '/cross-stitch-pattern-generator/' },
          { label: 'Code source', href: 'https://github.com/korphos/cross-stitch-pattern-generator' },
        ],
        highlight: true,
      },
      {
        id: 'digital-signage',
        title: "Lecteur d'affichage numérique multiplateforme",
        org: 'Eye-In Media',
        description:
          "Un lecteur d'affichage numérique conçu pour tourner sur pratiquement n'importe quel écran : une seule codebase, pensée pour des mises à jour fréquentes du front-end sans jamais perdre le contrôle à distance sur le parc de machines.",
        bullets: [
          "Coquille Electron embarquant une PWA pour le front-end : les mises à jour d'interface se déploient sans nouvelle build Electron ; packaging et auto-updates gérés avec electron-builder",
          'Connexion temps réel via Socket.io pour synchroniser contenu et planification sur tout le parc',
          "Une seule codebase pour Windows, Ubuntu (Electron), Android et Amazon Fire TV Stick (Capacitor), Samsung Tizen et le web (PWA), avec du code spécifique à chaque OS pour les réglages bas niveau (ex. gestion de l'hibernation)",
          "Prise de contrôle à distance façon TeamViewer développée en Rust (souris/clavier), avec le flux vidéo transmis en WebRTC vers l'application de monitoring",
        ],
        tags: ['Electron', 'PWA', 'Rust', 'WebRTC', 'Socket.io', 'Capacitor', 'Tizen'],
        image: {
          src: '/images/eye-infinite-player.webp',
          alt: 'Logo du lecteur multimédia Eye-Infinite Player',
          width: 240,
          height: 264,
          fit: 'contain',
        },
        links: [
          {
            label: 'Voir le produit',
            href: 'https://eye-in.com/fr/affichage-numerique/logiciel-multimedia/eye-infinite-player',
          },
        ],
        wide: true,
      },
      {
        id: 'guest-wifi',
        title: 'Portails Wi-Fi invité & gestion de flotte de routeurs',
        org: 'Eye-In Media',
        description:
          "Pages de connexion (captive portal) développées en Nuxt, optimisées pour rester rapides même sur des réseaux Wi-Fi de qualité médiocre. Configuration et supervision d'une flotte de routeurs multi-marques.",
        bullets: [
          'Captive portal en Nuxt, pensé pour la performance sur des connexions Wi-Fi limitées',
          'Intégration des API de plusieurs marques de routeurs : Mikrotik, Cisco, Meraki, Peplink',
          'Mises à jour automatiques de la flotte par scheduled pulling',
        ],
        tags: ['Nuxt', 'Captive Portal', 'Mikrotik', 'Cisco', 'Meraki', 'Peplink'],
        image: {
          src: '/images/wifi-captive-portal.webp',
          alt: 'Écran de connexion Wi-Fi invité (captive portal) avec options de connexion par email ou réseaux sociaux',
          width: 600,
          height: 1298,
        },
        links: [{ label: 'Voir la solution Wi-Fi', href: 'https://eye-in.com/wifi' }],
      },
      {
        id: 'foodforce',
        title: 'FoodForce — Plateforme de gestion de menus',
        org: 'Eye-In Media',
        description:
          "Plateforme de gestion de menus, POS et commandes pour restaurants. Développement d'une bonne partie du backend, contribution significative au frontend, et intégration des paiements et du POS avec Square et PayPal.",
        bullets: [
          'Backend de la gestion des menus, prix et items',
          'Contribution au frontend, en binôme avec un collègue développeur qui gérait le design',
          'Intégration POS et paiements avec Square et PayPal',
        ],
        tags: ['Node.js', 'Vue.js', 'Square', 'PayPal', 'POS'],
        image: {
          src: '/images/foodforce-menu-manager.webp',
          alt: "Interface d'administration FoodForce pour la gestion des items de menu, prix et allergènes",
          width: 1000,
          height: 799,
        },
        links: [{ label: 'Voir la solution Restaurants', href: 'https://eye-in.com/solutions/restaurants' }],
      },
      {
        id: 'infra-migration',
        title: 'Migration infrastructure Azure / Docker / Kubernetes',
        org: 'Eye-In Media',
        period: '2018 – 2025',
        description:
          "La plateforme tournait sur des serveurs Windows nus avec du code PHP déployé directement, sans isolation ni reproductibilité. Modernisation complète de la stack, initiée par mes soins et menée avec l'équipe infrastructure.",
        bullets: [
          'Conteneurisation de toutes les applications, pipelines de build et déploiement reproductibles',
          "Cluster Kubernetes sur Azure : déploiements rolling, zéro interruption de service",
          "Remplacement des certificats SSL payants par Let's Encrypt : coût réduit à 0$",
        ],
        tags: ['Azure', 'Docker', 'Kubernetes', "Let's Encrypt", 'CI/CD'],
      },
      {
        id: 'webauthn-sso',
        title: 'SSO avec WebAuthn / Passkeys',
        org: 'Eye-In Media',
        period: '2018 – 2025',
        description:
          "Système d'authentification unifié pour l'ensemble des plateformes internes et clients, avec un focus sur les standards modernes et sans mot de passe.",
        bullets: [
          'SSO avec connexion Google et Microsoft sur toutes les plateformes',
          "Support WebAuthn / FIDO2 Passkeys — l'un des premiers déploiements passkeys en production de la compagnie",
          'Gestion du stockage des identifiants et du challenge flow entièrement en interne, sans fournisseur tiers',
        ],
        tags: ['WebAuthn', 'FIDO2', 'OAuth2', 'Node.js', 'Vue.js'],
      },
      {
        id: 'hosting-dashboard',
        title: "Dashboard d'hébergement interne",
        org: 'Eye-In Media',
        period: '2018 – 2025',
        description:
          "Un dashboard centralisant la gestion de tous les sites et services hébergés, intégrant plusieurs API externes pour automatiser les tâches d'infrastructure répétitives.",
        bullets: [
          'Kubernetes : création et gestion de déploiements directement depuis l\'interface',
          'GitHub Actions : génération automatique de workflows CI/CD pour les nouveaux projets',
          "Let's Encrypt et GoDaddy : gestion automatisée des certificats et des enregistrements DNS",
        ],
        tags: ['Node.js', 'Vue.js', 'Kubernetes API', 'GitHub Actions'],
      },
      {
        id: 'smtp-server',
        title: 'Serveur SMTP sur mesure',
        org: 'Eye-In Media',
        period: '2018 – 2025',
        description:
          "Un serveur SMTP entièrement custom pour remplacer un service payant tiers (Sendgrid), avec des fonctionnalités additionnelles taillées pour la plateforme.",
        bullets: [
          "Routage entrant/sortant des emails pour tous les services de la plateforme",
          "Parsing des emails entrants pour déclencher automatiquement des actions (ex. ingestion d'images en pièce jointe)",
          'Stack complète SPF, DKIM, DMARC pour garantir la délivrabilité',
        ],
        tags: ['Node.js', 'SMTP', 'DNS', 'Linux'],
      },
    ],
  },
  otherProjects: {
    heading: 'Autres projets',
    items: [
      {
        id: 'vue-eyein-translation',
        title: 'vue-eyein-translation',
        org: 'Eye-In Media — Open source',
        description:
          "Plugin open source d'internationalisation pour Vue/Nuxt, inspiré de l'approche i18n d'Angular : extraction statique des clés de traduction et support du format ICU pour la pluralisation.",
        tags: ['Vue.js', 'Nuxt.js', 'TypeScript', 'npm'],
        code: {
          lang: 'html',
          code: `<!-- Traduction dans le template, sans fichier de langue -->
<button><t>Click Me!</t></button>

<!-- Traduction d'un attribut avec la directive v-t -->
<input placeholder="Text to translate" v-t:placeholder>`,
        },
        links: [{ label: 'Voir sur npm', href: 'https://www.npmjs.com/package/vue-eyein-translation' }],
      },
      {
        id: 'chart-creator',
        title: 'Chart Creator — Outil de data visualisation pour journalistes',
        org: 'Le Devoir — Stage',
        period: '2017',
        description:
          "Générateur de graphiques conçu et développé seul pour des journalistes non-techniques : graphiques en barres, lignes, nuages de points, camemberts et cartes interactives, sans code requis.",
        tags: ['Angular', 'D3.js', 'Leaflet', 'Node.js', 'PostgreSQL'],
        image: {
          src: '/images/chart-creator-dashboard.webp',
          alt: 'Interface du Chart Creator du Devoir affichant une galerie de graphiques générés',
          width: 800,
          height: 391,
        },
      },
      {
        id: 'robotic-arm',
        title: 'Bras robotique mobile — Vision et IA',
        org: 'École des Mines de Douai — Projet académique',
        period: '2015',
        description:
          "Projet d'un mois combinant robotique, vision par ordinateur et IA : un robot capable de détecter, suivre et saisir des objets de façon autonome.",
        tags: ['ROS', 'Arduino', 'OpenCV', 'Python', 'C++'],
        image: {
          src: '/images/robotic-arm.webp',
          alt: 'Bras robotique PhantomX et base mobile TurtleBot utilisés pour le projet académique',
          width: 331,
          height: 669,
        },
      },
      {
        id: 'personal-projects',
        title: 'Projets personnels',
        org: '2008 – 2013',
        description: "En dehors du travail, j'ai toujours exploré de nouvelles technologies :",
        bullets: [
          'Moteur de jeu 3D from scratch (C++, OpenGL, Ogre3D, Bullet Physics)',
          'IDE collaboratif avec édition multi-utilisateur en temps réel (C++, Qt)',
          'Bot Discord pour la gestion de communauté (Node.js, Discord API)',
        ],
        tags: ['C++', 'OpenGL', 'Qt', 'Node.js'],
      },
    ],
  },
  experience: {
    heading: 'Expérience',
    items: [
      {
        org: 'X2O Media',
        role: 'Développeur Full-Stack',
        period: 'Mai 2025 – Avril 2026',
        bullets: [
          "Contribution à OneRoom, plateforme de visioconférence hybride combinant matériel en salle et expérience web distante, en collaboration avec les équipes produit et backend",
          'WebRTC et subscriptions GraphQL pour synchroniser l\'état entre clients hétérogènes',
          'Intégration Keycloak (SSO) et front-end Next.js (TypeScript, Shadcn/Tailwind)',
        ],
      },
      {
        org: 'Eye-In Media',
        role: 'Développeur Full-Stack',
        period: 'Janvier 2018 – Avril 2025 (7 ans)',
        bullets: [
          "Migration complète de l'infrastructure (serveurs Windows bare-metal vers Azure, Docker, Kubernetes) menée avec l'équipe infrastructure, CI/CD entièrement automatisé",
          "Conception du SSO avec WebAuthn/FIDO2 Passkeys, l'un des premiers déploiements passkeys en production de la compagnie",
          "Serveur SMTP et dashboard d'hébergement internes, en remplacement de services payants tiers",
        ],
      },
      {
        org: 'Le Devoir',
        role: 'Développeur Web (Stage)',
        period: 'Mai – Août 2017',
        bullets: ['Conception et développement from scratch d\'un générateur de graphiques pour journalistes'],
      },
      {
        org: 'The Coding Machine, Paris',
        role: 'Développeur Web (Stage)',
        period: 'Mai – Août 2015',
        bullets: ['Outil web pour le transport de matériaux (HTML, CSS, JS, PHP, MySQL)'],
      },
      {
        org: 'Dassault Systèmes, France',
        role: 'Développeur Web (Stage)',
        period: 'Mai – Août 2014',
        bullets: ['Widget web pour la plateforme 3DS avec algorithmes de tri et de recherche'],
      },
    ],
  },
  education: {
    heading: 'Formation',
    items: [
      { school: 'École Polytechnique de Montréal', degree: 'Maîtrise professionnelle en ingénierie', period: '2015 – 2017' },
      { school: 'École des Mines de Douai, France', degree: "Diplôme d'ingénieur généraliste", period: '2013 – 2015' },
      { school: 'Lycée Condorcet, Paris, France', degree: 'Classe préparatoire Mathématiques et Physique avancées', period: '2011 – 2013' },
    ],
  },
  contact: {
    heading: 'Discutons',
    blurb: "Ouvert aux opportunités et toujours curieux d'échanger sur des projets techniques.",
    email: 'alexandre.chenieux@gmail.com',
    references: 'Références professionnelles disponibles sur demande.',
  },
}

const en: PortfolioContent = {
  hero: {
    name: 'Alexandre Chenieux',
    title: 'Senior Full-Stack Developer — Cloud & DevOps',
    pitch:
      "{years} years of development experience, specializing in Node.js, TypeScript, and cloud infrastructure. I take complex projects from architecture to production, equally comfortable working independently or in close collaboration with product and engineering teams.",
    location: 'Montreal, QC, Canada',
    ctaPrimary: 'View my projects',
    ctaSecondary: 'Get in touch',
  },
  about: {
    skillGroups: [
      {
        label: 'Languages',
        items: [
          'TypeScript',
          'JavaScript',
          'Node.js',
          'React',
          'Next.js',
          'Vue',
          'Nuxt',
          'Angular',
          'Rust',
          'PHP',
          'Python',
          'Java',
          'C++',
        ],
      },
      { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'SQL Server', 'MySQL'] },
      {
        label: 'DevOps / Cloud',
        items: ['Docker', 'Kubernetes', 'Azure', 'AWS', 'GCP', 'GitHub Actions', 'GitLab CI', 'Jenkins'],
      },
      {
        label: 'Auth / Security',
        items: ['WebAuthn / FIDO2 Passkeys', 'OAuth2', 'SSO', 'HTTPS', 'Firewalls', 'XSS/SQLi/DNS hardening'],
      },
      { label: 'Protocols', items: ['SMTP', 'DNS (SPF/DKIM/DMARC)', 'RADIUS', "HTTPS (Let's Encrypt)"] },
      { label: 'Other', items: ['WebRTC', 'GraphQL', 'LiveKit', 'D3.js', 'Keycloak', 'WASM', 'Linux/Bash'] },
    ],
  },
  featuredProjects: {
    heading: 'Featured projects',
    intro: 'A selection of projects spanning architecture to production — some led solo, others built with a team.',
    items: [
      {
        id: 'oneroom',
        title: 'OneRoom — Hybrid Video Conferencing',
        org: 'X2O Media',
        period: '2025 – 2026',
        description:
          'OneRoom combines in-room hardware (screens, cameras, microphones) with a remote web experience into a unified conferencing platform, eliminating the friction between physical meeting rooms and remote participants.',
        bullets: [
          'Set up and configured the LiveKit server for real-time media routing between in-room devices and remote clients',
          'WebRTC signaling and GraphQL subscriptions to synchronize state across heterogeneous clients',
          'Integrated Keycloak (SSO) and built the Next.js front-end with Shadcn UI / Tailwind CSS',
        ],
        tags: ['Next.js', 'GraphQL', 'WebRTC', 'LiveKit', 'Keycloak', 'TypeScript'],
        image: {
          src: '/images/oneroom.webp',
          alt: 'OneRoom hybrid conference room with remote participant wall and connected desks',
          width: 1280,
          height: 720,
        },
        wide: true,
      },
      {
        id: 'cross-stitch',
        title: 'Cross-Stitch Pattern Generator',
        org: 'Personal project',
        description:
          "An app that turns any image into a printable cross-stitch pattern, complete with an automatic DMC color legend. Built with Claude Code for my girlfriend, who loves cross-stitching and wanted to turn her own photos into patterns without wrestling with complicated software.",
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Claude Code'],
        image: {
          src: '/images/cross-stitch-app.webp',
          alt: 'Screenshot of the app showing a colorful cross-stitch pattern generated from an image, with its DMC color legend',
          width: 1280,
          height: 593,
        },
        links: [
          { label: 'Try the app', href: '/cross-stitch-pattern-generator/' },
          { label: 'Source code', href: 'https://github.com/korphos/cross-stitch-pattern-generator' },
        ],
        highlight: true,
      },
      {
        id: 'digital-signage',
        title: 'Cross-Platform Digital Signage Player',
        org: 'Eye-In Media',
        description:
          'A digital signage player built to run on almost any screen: a single codebase, architected for frequent front-end updates without ever losing remote control over the device fleet.',
        bullets: [
          'Electron shell embedding a PWA front-end: UI updates ship without a new Electron build; packaging and auto-updates handled with electron-builder',
          'Real-time content and schedule sync across the whole fleet over Socket.io',
          'One codebase for Windows, Ubuntu (Electron), Android and Amazon Fire TV Stick (Capacitor), Samsung Tizen, and the web (PWA), with OS-specific native code for low-level settings (e.g. hibernation control)',
          'Built a TeamViewer-like remote control tool in Rust (mouse/keyboard input), streaming the display back to our monitoring app over WebRTC',
        ],
        tags: ['Electron', 'PWA', 'Rust', 'WebRTC', 'Socket.io', 'Capacitor', 'Tizen'],
        image: {
          src: '/images/eye-infinite-player.webp',
          alt: 'Eye-Infinite Player media player logo',
          width: 240,
          height: 264,
          fit: 'contain',
        },
        links: [
          {
            label: 'View product',
            href: 'https://eye-in.com/fr/affichage-numerique/logiciel-multimedia/eye-infinite-player',
          },
        ],
        wide: true,
      },
      {
        id: 'guest-wifi',
        title: 'Guest Wi-Fi Portals & Router Fleet Management',
        org: 'Eye-In Media',
        description:
          'Captive portal login pages built in Nuxt, optimized to stay fast even on mediocre Wi-Fi connections. Configured and monitored a multi-vendor router fleet.',
        bullets: [
          'Captive portal built in Nuxt, engineered for performance on constrained Wi-Fi connections',
          'Integrated APIs from multiple router vendors: Mikrotik, Cisco, Meraki, Peplink',
          'Automated fleet updates via scheduled pulling',
        ],
        tags: ['Nuxt', 'Captive Portal', 'Mikrotik', 'Cisco', 'Meraki', 'Peplink'],
        image: {
          src: '/images/wifi-captive-portal.webp',
          alt: 'Guest Wi-Fi captive portal login screen with email and social sign-in options',
          width: 600,
          height: 1298,
        },
        links: [{ label: 'View the Wi-Fi solution', href: 'https://eye-in.com/wifi' }],
      },
      {
        id: 'foodforce',
        title: 'FoodForce — Menu Management Platform',
        org: 'Eye-In Media',
        description:
          'A menu, POS, and ordering management platform for restaurants. Built a large part of the backend, contributed significantly to the front-end, and integrated POS and payments with Square and PayPal.',
        bullets: [
          'Backend for menu, pricing, and item management',
          'Front-end contributions, paired with a developer colleague who handled the design',
          'POS and payment integration with Square and PayPal',
        ],
        tags: ['Node.js', 'Vue.js', 'Square', 'PayPal', 'POS'],
        image: {
          src: '/images/foodforce-menu-manager.webp',
          alt: 'FoodForce admin interface for managing menu items, pricing, and allergens',
          width: 1000,
          height: 799,
        },
        links: [{ label: 'View the Restaurants solution', href: 'https://eye-in.com/solutions/restaurants' }],
      },
      {
        id: 'infra-migration',
        title: 'Azure / Docker / Kubernetes Infrastructure Migration',
        org: 'Eye-In Media',
        period: '2018 – 2025',
        description:
          'The platform originally ran on bare Windows servers with PHP code deployed directly, with no isolation or reproducibility. I initiated a full stack modernization, carried out together with the infrastructure team.',
        bullets: [
          'Containerized all applications with reproducible build and deployment pipelines',
          'Kubernetes cluster on Azure: rolling deployments, zero-downtime updates',
          "Replaced paid SSL certificates with Let's Encrypt automation, cutting that cost to $0",
        ],
        tags: ['Azure', 'Docker', 'Kubernetes', "Let's Encrypt", 'CI/CD'],
      },
      {
        id: 'webauthn-sso',
        title: 'SSO with WebAuthn / Passkeys',
        org: 'Eye-In Media',
        period: '2018 – 2025',
        description:
          'A unified authentication system covering all internal and customer-facing platforms, focused on modern, passwordless security standards.',
        bullets: [
          'SSO across all platforms, enabling login with Google and Microsoft accounts',
          "WebAuthn / FIDO2 passkey support — one of the company's first production passkey deployments",
          'Credential storage and challenge flow managed entirely in-house, without third-party providers',
        ],
        tags: ['WebAuthn', 'FIDO2', 'OAuth2', 'Node.js', 'Vue.js'],
      },
      {
        id: 'hosting-dashboard',
        title: 'Internal Hosting Dashboard',
        org: 'Eye-In Media',
        period: '2018 – 2025',
        description:
          'A custom dashboard centralizing management of all hosted websites and services, integrating multiple external APIs to automate repetitive infrastructure tasks.',
        bullets: [
          'Kubernetes: create and manage deployments directly from the UI',
          'GitHub Actions: auto-generated CI/CD workflows for new projects',
          "Let's Encrypt and GoDaddy: automated certificate and DNS record management",
        ],
        tags: ['Node.js', 'Vue.js', 'Kubernetes API', 'GitHub Actions'],
      },
      {
        id: 'smtp-server',
        title: 'Custom SMTP Server',
        org: 'Eye-In Media',
        period: '2018 – 2025',
        description:
          'A fully custom SMTP server replacing a paid third-party service (Sendgrid), with extra features tailored to the platform.',
        bullets: [
          'Inbound and outbound email routing for all platform services',
          'Parses inbound emails to automatically trigger actions (e.g. image ingestion from attachments)',
          'Full SPF, DKIM, DMARC stack to ensure deliverability',
        ],
        tags: ['Node.js', 'SMTP', 'DNS', 'Linux'],
      },
    ],
  },
  otherProjects: {
    heading: 'Other projects',
    items: [
      {
        id: 'vue-eyein-translation',
        title: 'vue-eyein-translation',
        org: 'Eye-In Media — Open source',
        description:
          "Open-source internationalization plugin for Vue/Nuxt, inspired by Angular's i18n approach: static translation key extraction and ICU message format support for pluralization.",
        tags: ['Vue.js', 'Nuxt.js', 'TypeScript', 'npm'],
        code: {
          lang: 'html',
          code: `<!-- Translate directly in the template, no locale file needed -->
<button><t>Click Me!</t></button>

<!-- Translate an attribute with the v-t directive -->
<input placeholder="Text to translate" v-t:placeholder>`,
        },
        links: [{ label: 'View on npm', href: 'https://www.npmjs.com/package/vue-eyein-translation' }],
      },
      {
        id: 'chart-creator',
        title: 'Chart Creator — Data Visualization Tool for Journalists',
        org: 'Le Devoir — Internship',
        period: '2017',
        description:
          'A chart generator designed and built solo for non-technical journalists: bar, line, scatter, and pie charts plus interactive maps, no coding required.',
        tags: ['Angular', 'D3.js', 'Leaflet', 'Node.js', 'PostgreSQL'],
        image: {
          src: '/images/chart-creator-dashboard.webp',
          alt: "Le Devoir's Chart Creator interface showing a gallery of generated charts",
          width: 800,
          height: 391,
        },
      },
      {
        id: 'robotic-arm',
        title: 'Mobile Robot Manipulator — Vision & AI',
        org: 'Ecole des Mines de Douai — Academic project',
        period: '2015',
        description:
          'A one-month project combining robotics, computer vision, and AI: a robot able to detect, follow, and pick up objects autonomously.',
        tags: ['ROS', 'Arduino', 'OpenCV', 'Python', 'C++'],
        image: {
          src: '/images/robotic-arm.webp',
          alt: 'PhantomX robotic arm and TurtleBot mobile base used in the academic project',
          width: 331,
          height: 669,
        },
      },
      {
        id: 'personal-projects',
        title: 'Personal Projects',
        org: '2008 – 2013',
        description: 'Outside of work, I have consistently explored new technologies:',
        bullets: [
          'Custom 3D game engine from scratch (C++, OpenGL, Ogre3D, Bullet Physics)',
          'Collaborative IDE with real-time multi-user editing (C++, Qt)',
          'Discord bot for community management (Node.js, Discord API)',
        ],
        tags: ['C++', 'OpenGL', 'Qt', 'Node.js'],
      },
    ],
  },
  experience: {
    heading: 'Experience',
    items: [
      {
        org: 'X2O Media',
        role: 'Full-Stack Developer',
        period: 'May 2025 – April 2026',
        bullets: [
          'Contributed to OneRoom, a hybrid video conferencing platform combining in-room hardware with a remote web experience, working closely with the product and backend teams',
          'WebRTC signaling and GraphQL subscriptions to synchronize state across heterogeneous clients',
          'Integrated Keycloak (SSO) and built the Next.js front-end (TypeScript, Shadcn/Tailwind)',
        ],
      },
      {
        org: 'Eye-In Media',
        role: 'Full-Stack Developer',
        period: 'Jan 2018 – April 2025 (7 years)',
        bullets: [
          'Led full infrastructure migration (bare Windows servers to Azure, Docker, Kubernetes) together with the infrastructure team, fully automated CI/CD',
          "Designed SSO with WebAuthn/FIDO2 Passkeys, one of the company's first production passkey deployments",
          'Built a custom SMTP server and internal hosting dashboard, replacing paid third-party services',
        ],
      },
      {
        org: 'Le Devoir',
        role: 'Web Developer (Intern)',
        period: 'May – Aug 2017',
        bullets: ['Designed and built from scratch a data visualization generator for journalists'],
      },
      {
        org: 'The Coding Machine, Paris',
        role: 'Web Developer (Intern)',
        period: 'May – Aug 2015',
        bullets: ['Web application for material transport management (HTML, CSS, JS, PHP, MySQL)'],
      },
      {
        org: 'Dassault Systemes, France',
        role: 'Web Developer (Intern)',
        period: 'May – Aug 2014',
        bullets: ['Web widget for the 3DS platform with data sort and search algorithms'],
      },
    ],
  },
  education: {
    heading: 'Education',
    items: [
      { school: 'Ecole Polytechnique de Montreal', degree: "M.Sc. Engineering (Professional Master's)", period: '2015 – 2017' },
      { school: 'Ecole des Mines de Douai, France', degree: 'General Engineer Diploma', period: '2013 – 2015' },
      { school: 'Lycee Condorcet, Paris, France', degree: 'Advanced Mathematics & Physics (CPGE)', period: '2011 – 2013' },
    ],
  },
  contact: {
    heading: "Let's talk",
    blurb: "Open to opportunities and always happy to talk about interesting technical projects.",
    email: 'alexandre.chenieux@gmail.com',
    references: 'Professional references available upon request.',
  },
}

export const portfolioContent: Record<'fr' | 'en', PortfolioContent> = { fr, en }
