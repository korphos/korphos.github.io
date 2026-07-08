<script setup lang="ts">
const { t, locale } = useI18n()
const content = usePortfolioContent()
const localeHead = useLocaleHead()

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  link: [...(localeHead.value.link ?? [])],
  meta: [...(localeHead.value.meta ?? [])],
}))

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  ogTitle: () => t('seo.title'),
  ogDescription: () => t('seo.description'),
  ogType: 'website',
  ogImage: 'https://korphos.github.io/images/oneroom.webp',
  twitterCard: 'summary_large_image',
})

useHead(() => ({
  script: [
    {
      key: 'person-jsonld',
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: content.value.hero.name,
        jobTitle: content.value.hero.title,
        url: 'https://korphos.github.io',
        email: `mailto:${content.value.contact.email}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Montreal',
          addressRegion: 'QC',
          addressCountry: 'CA',
        },
        sameAs: ['https://github.com/korphos', 'https://www.linkedin.com/in/alexandre-chenieux'],
        knowsAbout: content.value.about.skillGroups.flatMap((g) => g.items),
      }),
    },
  ],
}))
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  </div>
</template>
