<script setup lang="ts">
const scrollY = ref(0)
const reducedMotion = ref(false)
let ticking = false

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    scrollY.value = window.scrollY
    ticking = false
  })
}

function offset(speed: number) {
  return reducedMotion.value ? 0 : -(scrollY.value * speed)
}

onMounted(() => {
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="fixed inset-0 overflow-hidden" aria-hidden="true">
    <div class="bg-wash" />

    <div class="blob-layer" :style="{ transform: `translate3d(0, ${offset(0.05)}px, 0)` }">
      <svg class="wave wave-a" viewBox="0 0 2000 260" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad-a" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#4de6a0" stop-opacity="0" />
            <stop offset="38%" stop-color="#4de6a0" stop-opacity="1" />
            <stop offset="58%" stop-color="#4fd2ec" stop-opacity="0.9" />
            <stop offset="100%" stop-color="#4fd2ec" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M -300,150 C 300,-80 900,380 1400,120 C 1700,-30 1900,220 2300,100"
          fill="none"
          stroke="url(#grad-a)"
          stroke-width="26"
          stroke-linecap="round"
          class="wave-glow"
        />
        <path
          d="M -300,150 C 300,-80 900,380 1400,120 C 1700,-30 1900,220 2300,100"
          fill="none"
          stroke="url(#grad-a)"
          stroke-width="6"
          stroke-linecap="round"
          class="wave-core"
        />
      </svg>
    </div>

    <div class="blob-layer" :style="{ transform: `translate3d(0, ${offset(0.08)}px, 0)` }">
      <svg class="wave wave-b" viewBox="0 0 2000 260" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad-b" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#e768dc" stop-opacity="0" />
            <stop offset="50%" stop-color="#e768dc" stop-opacity="0.95" />
            <stop offset="100%" stop-color="#e768dc" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M -300,90 C 450,340 850,-60 1350,190 C 1680,360 1880,70 2300,200"
          fill="none"
          stroke="url(#grad-b)"
          stroke-width="24"
          stroke-linecap="round"
          class="wave-glow"
        />
        <path
          d="M -300,90 C 450,340 850,-60 1350,190 C 1680,360 1880,70 2300,200"
          fill="none"
          stroke="url(#grad-b)"
          stroke-width="5"
          stroke-linecap="round"
          class="wave-core"
        />
      </svg>
    </div>

    <div class="blob-layer" :style="{ transform: `translate3d(0, ${offset(0.065)}px, 0)` }">
      <svg class="wave wave-c" viewBox="0 0 2000 260" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad-c" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#4fd2ec" stop-opacity="0" />
            <stop offset="36%" stop-color="#4fd2ec" stop-opacity="0.95" />
            <stop offset="66%" stop-color="#e768dc" stop-opacity="0.7" />
            <stop offset="100%" stop-color="#e768dc" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M -300,210 C 380,-20 880,360 1380,100 C 1720,-50 1920,260 2300,120"
          fill="none"
          stroke="url(#grad-c)"
          stroke-width="26"
          stroke-linecap="round"
          class="wave-glow"
        />
        <path
          d="M -300,210 C 380,-20 880,360 1380,100 C 1720,-50 1920,260 2300,120"
          fill="none"
          stroke="url(#grad-c)"
          stroke-width="6"
          stroke-linecap="round"
          class="wave-core"
        />
      </svg>
    </div>
  </div>
</template>
