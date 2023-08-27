<template>
  <div class="flex flex-col items-center max-w-screen-xl mx-auto">
    <ul class="list-none m-0 flex overflow-scroll mb-6 text-light max-w-screen-xl no-scrollbar">
      <li class="m-0" v-for="tag in tags" :key="tag.id">
        <Tag :tag="tag" />
      </li>
    </ul>
    <ul class="list-none w-full m-0 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <li class="m-0" v-for="project in projects" :key="project.id">
        <Project :project="project" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import Project from './Project.vue'
import Tag from './Tag.vue'

defineProps({
  projects: { type: Array, required: true },
  tags: { type: Array, required: true }
})
</script>
