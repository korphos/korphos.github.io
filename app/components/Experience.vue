<script setup lang="ts">
const content = usePortfolioContent()
</script>

<template>
  <section id="experience" class="section">
    <h2 class="section-title">{{ content.experience.heading }}</h2>

    <ol class="mt-10 space-y-10 border-l border-black/10 pl-6 dark:border-white/10">
      <li v-for="job in content.experience.items" :key="job.org + job.period" class="relative">
        <span class="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent dark:bg-accent-dark" />
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 class="text-lg font-semibold">{{ job.role }} · {{ job.org }}</h3>
          <span class="text-sm text-ink-soft dark:text-ink-dark-soft">{{ job.period }}</span>
        </div>
        <ul class="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-ink-soft dark:text-ink-dark-soft">
          <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
      </li>
    </ol>
  </section>
</template>
