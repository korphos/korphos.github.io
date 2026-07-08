<script setup lang="ts">
const content = usePortfolioContent()

const yearsOfExperience = new Date().getFullYear() - 2008

const pitch = computed(() => content.value.hero.pitch.replace('{years}', String(yearsOfExperience)))
</script>

<template>
  <section class="section flex flex-col gap-6 pb-16 pt-16 sm:pt-24">
    <p class="flex items-center gap-2 text-sm font-medium text-ink-soft dark:text-ink-dark-soft">
      <span class="h-2 w-2 rounded-full bg-accent dark:bg-accent-dark" />
      {{ content.hero.location }}
    </p>

    <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
      {{ content.hero.name }}
    </h1>

    <p class="text-lg font-medium text-accent dark:text-accent-dark sm:text-xl">
      {{ content.hero.title }}
    </p>

    <p class="max-w-2xl text-base leading-relaxed text-ink-soft dark:text-ink-dark-soft sm:text-lg">
      {{ pitch }}
    </p>

    <div class="flex flex-wrap items-center gap-3 pt-2">
      <a href="#projects" class="btn-primary">{{ content.hero.ctaPrimary }}</a>
      <a href="#contact" class="btn-secondary">{{ content.hero.ctaSecondary }}</a>
    </div>

    <div class="flex items-center gap-4 pt-4 text-ink-soft dark:text-ink-dark-soft">
      <a
        href="https://github.com/korphos"
        target="_blank"
        rel="noopener noreferrer"
        class="transition-colors hover:text-ink dark:hover:text-ink-dark"
        aria-label="GitHub"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
          <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58l-.01-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .3Z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/alexandre-chenieux"
        target="_blank"
        rel="noopener noreferrer"
        class="transition-colors hover:text-ink dark:hover:text-ink-dark"
        aria-label="LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
        </svg>
      </a>
      <a
        :href="`mailto:${content.contact.email}`"
        class="transition-colors hover:text-ink dark:hover:text-ink-dark"
        aria-label="Email"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="h-6 w-6">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path stroke-linecap="round" stroke-linejoin="round" d="m3.5 6 8.5 7 8.5-7" />
        </svg>
      </a>
    </div>
  </section>
</template>
