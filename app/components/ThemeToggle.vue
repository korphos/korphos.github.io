<script setup lang="ts">
const { isDark, toggle, init } = useTheme()
const { t } = useI18n()

onMounted(() => {
  init()
})
</script>

<template>
  <button
    type="button"
    class="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-black/5 dark:text-ink-dark-soft dark:hover:bg-white/10"
    :aria-label="isDark ? t('theme.toggleToLight') : t('theme.toggleToDark')"
    @click="toggle"
  >
    <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5">
      <circle cx="12" cy="12" r="4.2" />
      <path stroke-linecap="round" d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7Z" />
    </svg>
  </button>
</template>
