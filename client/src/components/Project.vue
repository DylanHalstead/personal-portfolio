<template>
  <div>
    <h3>{{ project.name }}</h3>
    <p>{{ project.description }}</p>
    <!-- <p><a v-if="project.devURL" :href="project.devURL">Git Link</a></p>
    <p><a v-if="project.prouctionURL" :href="project.prouctionURL">Production Link</a></p> -->
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