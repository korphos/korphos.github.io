<script setup lang="ts">
const content = usePortfolioContent()
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <section id="contact" class="section text-center">
    <h2 class="section-title">{{ content.contact.heading }}</h2>
    <p class="mx-auto mt-4 max-w-xl text-ink-soft dark:text-ink-dark-soft">{{ content.contact.blurb }}</p>

    <a :href="`mailto:${content.contact.email}`" class="btn-primary mt-8 inline-flex">
      {{ content.contact.email }}
    </a>

    <p class="mx-auto mt-6 max-w-xl text-sm text-ink-soft dark:text-ink-dark-soft">
      {{ content.contact.references }}
    </p>
  </section>

  <footer class="border-t border-black/5 py-8 text-center text-sm text-ink-soft dark:border-white/10 dark:text-ink-dark-soft">
    <p>© {{ year }} Alexandre Chenieux — {{ t('footer.rights') }}</p>
  </footer>
</template>
