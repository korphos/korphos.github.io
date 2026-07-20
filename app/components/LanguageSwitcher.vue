<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const available = computed(() =>
  (locales.value as Array<{ code: 'fr' | 'en'; name?: string }>).filter((l) => l.code !== locale.value),
)

async function change(code: 'fr' | 'en') {
  const path = switchLocalePath(code)
  // Strip any URL hash (e.g. #contact from clicking a nav link) so the new
  // locale's page doesn't jump to that anchor.
  const cleanPath = path?.split('#')[0]

  if (cleanPath) await navigateTo(cleanPath)
  else await setLocale(code)
}
</script>

<template>
  <div class="flex items-center gap-1 text-sm font-medium">
    <button
      v-for="l in available"
      :key="l.code"
      type="button"
      class="rounded-full px-2.5 py-1 text-ink-soft transition-colors hover:bg-black/5 hover:text-ink dark:text-ink-dark-soft dark:hover:bg-white/10 dark:hover:text-ink-dark"
      @click="change(l.code)"
    >
      {{ l.code.toUpperCase() }}
    </button>
  </div>
</template>
