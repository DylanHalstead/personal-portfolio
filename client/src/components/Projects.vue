<template>
  <Tags :tags="tags" />
  <div class="projects-container">
    <Project v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<script>
import Project from './Project.vue'
import Tags from './Tags.vue'


export default {
  name: "Projects", 
  props: {
    projects: Array,
    tags: Array
  },
  components: {
    Project,
    Tags
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