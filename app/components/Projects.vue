<script setup lang="ts">
const content = usePortfolioContent()
</script>

<template>
  <section id="projects" class="section">
    <h2 class="section-title">{{ content.featuredProjects.heading }}</h2>
    <p class="mt-3 max-w-2xl text-ink-soft dark:text-ink-dark-soft">{{ content.featuredProjects.intro }}</p>

    <div class="mt-10 grid gap-6 sm:grid-cols-2">
      <ProjectCard
        v-for="(project, i) in content.featuredProjects.items"
        :key="project.id"
        :project="project"
        :eager-image="i === 0"
        :class="project.highlight || project.image ? 'sm:col-span-2' : ''"
      />
    </div>

    <div class="mt-16">
      <h3 class="text-xl font-semibold tracking-tight">{{ content.otherProjects.heading }}</h3>
      <div class="mt-6 grid gap-4">
        <ProjectCard
          v-for="project in content.otherProjects.items"
          :key="project.id"
          :project="project"
          compact
          class="sm:flex-row"
        />
      </div>
    </div>
  </section>
</template>
