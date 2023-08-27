<template>
  <div class="h-[40rem] relative">
    <div class="absolute inset-x-0 top-1/2 transform -translate-y-1/2 max-w-4xl md:mx-32 mx-16">
      <h2 class="text-light font-martel md:text-xl text-lg">My name is</h2>
      <h1 class="text-primary md:text-8xl text-6xl md:my-8 my-4 font-semibold font-nunito-sans">
        Dylan Halstead
      </h1>
      <h2 class="text-light md:text-xl text-lg">
        I'm a software engineer student creating full-stack applications, exploring computer science
        solutions, and building cool stuff.
      </h2>
    </div>
    <div id="jparticles" class="bg-background w-full h-full"></div>
  </div>
</template>

<script setup>
import { Particle } from 'jparticles'
import { onMounted } from 'vue'
import colors from '../constants/colors'

onMounted(() => {
  new Particle('#jparticles', {
    num: 0.05,
    maxSpeed: 0.2,
    proximity: 100,
    range: 2000,
    color: colors.light,
    opacity: 0.5,
    resize: true
  })
})
</script>
