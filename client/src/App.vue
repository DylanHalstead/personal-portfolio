<template>
  <div class="min-h-screen bg-background border-background background text-light font-martel">
    <SiteNavigation />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteNavigation from './components/SiteNavigation.vue'
import Footer from './components/Footer.vue'
</script>
