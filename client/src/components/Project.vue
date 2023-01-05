<template>
  <div class="project-container">
    <img src="" alt="">
    <h3>{{ project.name }}</h3>
    <p>{{ project.description }}</p>
    <!-- <p><a v-if="project.devURL" :href="project.devURL">Git Link</a></p>
    <p><a v-if="project.prouctionURL" :href="project.prouctionURL">Production Link</a></p> -->
    <div class="tags-container"></div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: Object
  }
}
</script>

<style>
  
</style>