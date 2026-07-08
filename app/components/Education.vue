<script setup lang="ts">
const content = usePortfolioContent()
</script>

<template>
  <section id="education" class="section !pt-0">
    <h2 class="section-title">{{ content.education.heading }}</h2>

    <div class="mt-8 grid gap-4 sm:grid-cols-3">
      <div v-for="edu in content.education.items" :key="edu.school" class="card p-5">
        <p class="text-sm text-ink-soft dark:text-ink-dark-soft">{{ edu.period }}</p>
        <h3 class="mt-1 font-semibold">{{ edu.school }}</h3>
        <p class="mt-1 text-sm text-ink-soft dark:text-ink-dark-soft">{{ edu.degree }}</p>
      </div>
    </div>
  </section>
</template>
