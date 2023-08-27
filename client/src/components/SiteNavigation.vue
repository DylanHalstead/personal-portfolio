<!-- Modified version of: https://github.com/serresebastien/Nuxt-Tailwind-Responsive-Navbar -->
<template>
  <header class="w-full relative top-0 bg-background font-nunito-sans">
    <nav class="w-full p-6 text-white">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6" fill="currentColor" viewBox="0 0 16 16">
          <path
            d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"
          />
          <path
            d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"
          />
        </svg>
        <p class="text-lg font-semibold mx-2">Dylan Halstead</p>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isNavOpen = ref(false)
const isScreenSmall = ref(window.innerWidth <= 768)
const shouldApplySwipe = ref(true)
const resizeTimeout = ref(null)

const handleResize = () => {
  isScreenSmall.value = window.innerWidth <= 768
  if (!isScreenSmall.value) isNavOpen.value = false
  // Prevent slider effect on resize
  shouldApplySwipe.value = false
  clearTimeout(resizeTimeout)
  resizeTimeout.value = setTimeout(() => {
    shouldApplySwipe.value = true
  }, 300)
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
