<template>
  <div class="flex flex-col items-center mx-auto mt-12">
    <h2 class="md:text-5xl text-3xl mb-4 font-nunito-sans font-semibold">Projects</h2>
    <div class="relative overflow-hidden w-4/5">
      <div
        class="absolute inset-0 w-full h-full bg-gradient-to-r from-background via-transparent via-10% pointer-events-none transition-opacity ease-in duration-200"
        :class="scrollAmt > 0 + scrollThreshold ? 'opacity-100' : 'opacity-0'"
      ></div>
      <div
        class="absolute inset-0 w-full h-full bg-gradient-to-l from-background via-transparent via-10% pointer-events-none transition-opacity ease-in duration-200"
        :class="
          scrollAmt < maxScrollLeft - scrollThreshold || maxScrollLeft == 0
            ? 'opacity-100'
            : 'opacity-0'
        "
      ></div>
      <ul
        @scroll="tagScrollHandler"
        ref="tagsWrapper"
        class="list-none flex flex-auto overflow-x-scroll md:mb-6 md:p-0 mb-0 p-8 text-light box-border no-scrollbar scroll-smooth w-full"
      >
        <li v-for="tag in tags" :key="tag.id">
          <Tag :tag="tag" />
        </li>
      </ul>
    </div>
    <ul class="list-none md:px-6 md:mx-16 flex flex-wrap justify-center">
      <li class="m-4 w-full md:w-auto" v-for="project in projects" :key="project.id">
        <Project :project="project" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Project from './Project.vue'
import Tag from './Tag.vue'

const scrollAmt = ref(0)
const maxScrollLeft = ref(0)
const scrollThreshold = 100
defineProps({
  projects: { type: Array, required: true },
  tags: { type: Array, required: true }
})

const tagsWrapper = ref(null)
const startX = ref(null)

const tagScrollHandler = (e) => {
  scrollAmt.value = e.target.scrollLeft
  maxScrollLeft.value = tagsWrapper.value.scrollWidth - tagsWrapper.value.clientWidth
}
</script>
