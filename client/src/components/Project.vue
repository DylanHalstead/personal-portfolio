<template>
  <div class="w-full hover:cursor-pointer bg-secondary" @click="toggleModal">
    <div class="relative">
      <div
        class="absolute inset-0 w-full h-full rounded-md bg-gradient-to-t from-black via-transparent via-30% opacity-70"
      ></div>
      <img
        :src="project.img_url ? project.img_url : '/default_project.png'"
        :alt="`${project.name} Picture`"
        class="w-full h-64 object-cover rounded-md"
      />
      <h2 class="w-full font-nunito-sans font-semibold text-2xl absolute bottom-2 left-4">
        {{ project.name }}
      </h2>
    </div>
    <ul class="flex text-light opacity-50 py-2">
      <li v-for="tag in displayedTags" :key="tag.id" class="ml-4">
        <svg class="h-6" viewBox="0 0 128 128" v-html="tag.inner_svg" fill="currentColor"></svg>
      </li>
      <li v-if="removedTags" class="ml-4 font-nunito-sans">
        {{ `+${removedTags}` }}
      </li>
    </ul>
    <ProjectModal :project="project" :modalActive="modalActive" @close-modal="toggleModal" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ProjectModal from './ProjectModal.vue'

const maxDisplayableTags = 8
const removedTags = ref(0)
const displayedTags = ref([])
const displayedTagsHandler = () => {
  if (
    props.project.tags.length > maxDisplayableTags &&
    props.project.tags.length != maxDisplayableTags + 1
  ) {
    removedTags.value = props.project.tags.length - maxDisplayableTags
    displayedTags.value = props.project.tags.slice(0, maxDisplayableTags)
  } else {
    displayedTags.value = props.project.tags
  }
}

onMounted(() => {
  displayedTagsHandler()
})

const modalActive = ref(false)
const toggleModal = () => {
  modalActive.value = !modalActive.value
}

const props = defineProps({
  project: { type: Object, required: true }
})
</script>
