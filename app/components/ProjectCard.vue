<script setup lang="ts">
import type { Project } from '~/data/portfolio'

const props = defineProps<{
  project: Project
  compact?: boolean
  eagerImage?: boolean
}>()
</script>

<template>
  <article
    class="card flex h-full flex-col overflow-hidden"
    :class="props.project.highlight ? 'ring-1 ring-accent/40 dark:ring-accent-dark/40' : ''"
  >
    <div
      v-if="project.image"
      class="overflow-hidden bg-white"
      :class="[compact ? 'sm:w-40 sm:flex-shrink-0' : '', project.image.fit === 'contain' ? 'p-6' : '']"
    >
      <img
        :src="project.image.src"
        :alt="project.image.alt"
        :width="project.image.width"
        :height="project.image.height"
        :loading="eagerImage ? 'eager' : 'lazy'"
        :fetchpriority="eagerImage ? 'high' : undefined"
        class="h-48 w-full"
        :class="[
          compact ? 'sm:h-full' : 'sm:h-72',
          project.image.fit === 'contain' ? 'object-contain' : 'object-cover',
        ]"
      />
    </div>

    <div class="flex flex-1 flex-col gap-3 p-6">
      <span
        v-if="project.highlight"
        class="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent dark:bg-accent-dark/15 dark:text-accent-dark"
      >
        ♥ {{ project.org }}
      </span>
      <p v-else-if="project.org" class="text-sm font-medium text-ink-soft dark:text-ink-dark-soft">
        {{ project.org }}<span v-if="project.period"> · {{ project.period }}</span>
      </p>

      <h3 class="text-lg font-semibold tracking-tight">{{ project.title }}</h3>

      <p class="text-sm leading-relaxed text-ink-soft dark:text-ink-dark-soft">
        {{ project.description }}
      </p>

      <ul v-if="project.bullets?.length" class="list-disc space-y-1 pl-4 text-sm text-ink-soft dark:text-ink-dark-soft">
        <li v-for="bullet in project.bullets" :key="bullet">{{ bullet }}</li>
      </ul>

      <pre
        v-if="project.code"
        class="overflow-x-auto rounded-lg bg-ink/90 p-4 text-xs leading-relaxed text-ink-dark dark:bg-black/40"
      ><code>{{ project.code.code }}</code></pre>

      <div class="mt-auto flex flex-wrap items-center gap-2 pt-2">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>

      <div v-if="project.links?.length" class="flex flex-wrap gap-3 pt-1">
        <a
          v-for="link in project.links"
          :key="link.href"
          :href="link.href"
          class="text-sm font-semibold text-accent hover:underline dark:text-accent-dark"
          :target="link.href.startsWith('http') ? '_blank' : undefined"
          :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
        >
          {{ link.label }} →
        </a>
      </div>
    </div>
  </article>
</template>
