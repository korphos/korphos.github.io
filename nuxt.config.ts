export default defineNuxtConfig({
  compatibilityDate: '2026-07-08',
  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/sitemap'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      script: [
        {
          key: 'theme-init',
          innerHTML:
            "(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d){document.documentElement.classList.add('dark')}}catch(e){}})();",
          tagPosition: 'head',
        },
      ],
    },
  },

  nitro: {
    preset: 'github_pages',
    prerender: {
      ignore: ['/cross-stitch-pattern-generator', '/cross-stitch-pattern-generator/'],
    },
  },

  site: {
    url: 'https://korphos.github.io',
    name: 'Alexandre Chenieux — Portfolio',
  },

  i18n: {
    baseUrl: 'https://korphos.github.io',
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    locales: [
      { code: 'fr', iso: 'fr-CA', name: 'Français', file: 'fr.ts' },
      { code: 'en', iso: 'en-CA', name: 'English', file: 'en.ts' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  sitemap: {
    urls: ['/cross-stitch-pattern-generator/'],
  },
})
