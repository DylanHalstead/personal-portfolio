<template>
  <div
    class="min-h-screen relative bg-background border-background background text-light font-martel"
  >
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>
