<template>
  <div class="projects-container">
    <div :key="project.id" v-for="project in projects">
      <Project :project="project" />
    </div>
  </div>
</template>

<script>
import Project from './Project.vue'

export default {
  name: "Projects", 
  props: {
    projects: Array
  },
  components: {
    Project
  },
  emits: []
}
</script>

<style>
  .projects-container {
    display: grid;
    grid-template-columns: auto auto auto;

    margin: 0 12rem;
  }
</style>