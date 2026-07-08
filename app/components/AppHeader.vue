<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const links = [
  { href: '#projects', label: () => t('nav.projects') },
  { href: '#experience', label: () => t('nav.experience') },
  { href: '#contact', label: () => t('nav.contact') },
]
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-black/5 bg-surface/80 backdrop-blur dark:border-white/10 dark:bg-surface-dark/80">
    <div class="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 sm:px-8">
      <NuxtLink :to="localePath('/')" class="font-semibold tracking-tight text-ink dark:text-ink-dark">
        Alexandre Chenieux
      </NuxtLink>

      <nav class="hidden items-center gap-6 text-sm font-medium text-ink-soft sm:flex dark:text-ink-dark-soft">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="transition-colors hover:text-ink dark:hover:text-ink-dark"
        >
          {{ link.label() }}
        </a>
      </nav>

      <div class="flex items-center gap-1">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>
