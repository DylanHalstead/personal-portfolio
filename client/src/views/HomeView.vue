<template>
  <div>
    <LandingBanner />
    <ProjectsSection :projects="projects" :tags="tags" />
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import LandingBanner from '../components/LandingBanner.vue'
import ProjectsSection from '../components/ProjectsSection.vue'

const projects = ref([])
const tags = ref([])

const getProjects = async () => {
  await axios.get('/api/projects').then((res) => {
    projects.value = res.data
  })
}
const getTags = async () => {
  await axios.get('/api/tags').then((res) => {
    tags.value = res.data
  })
}
getProjects()
getTags()
</script>
