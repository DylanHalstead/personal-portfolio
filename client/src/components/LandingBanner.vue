<template>
  <div class="md:h-[40rem] h-72 relative">
    <div class="absolute inset-x-0 top-1/2 transform -translate-y-1/2 max-w-4xl md:mx-32 mx-12">
      <h2 class="text-light font-martel lg:text-xl md:text-lg text-xs">My name is</h2>
      <h1
        class="text-primary lg:text-8xl md:text-6xl text-4xl md:my-8 my-2 font-semibold font-nunito-sans"
      >
        Dylan Halstead
      </h1>
      <h2 class="text-light lg:text-xl md:text-lg text-xs">
        I'm a software engineer trying to learn as much as possible about the SWE landscape.
        Creating full-stack applications, exploring software solutions, and building cool stuff.
      </h2>
    </div>
    <div id="jparticles" class="bg-background w-full h-full overflow-hidden"></div>
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
