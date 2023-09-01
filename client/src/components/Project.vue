<template>
  <div class="group">
    <div
      class="w-full hover:cursor-pointer rounded-md transform hover:-translate-y-2 border border-transparent ease-in-out transition-transform duration-500"
      @click="toggleModal"
    >
      <div class="relative">
        <div
          class="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-transparent via-30% opacity-70 z-10"
        ></div>
        <div class="md:h-56 md:w-96 overflow-hidden">
          <img
            :src="project.img_url ? project.img_url : '/default_project.png'"
            :alt="`${project.name} Picture`"
            class="w-full h-full object-cover rounded-t-md group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>
        <h2 class="w-fit font-nunito-sans font-semibold text-2xl absolute bottom-2 left-4 z-20">
          {{ project.name }}
        </h2>
      </div>
      <ul class="flex text-light py-2 rounded-b-md bg-secondary">
        <li
          v-for="tag in displayedTags"
          :key="tag.id"
          class="mx-2"
          :class="selectedTagsIds.includes(tag.id) ? 'text-primary' : 'opacity-50'"
        >
          <svg
            class="md:h-6 h-4"
            viewBox="0 0 128 128"
            v-html="tag.inner_svg"
            fill="currentColor"
          ></svg>
        </li>
        <li
          v-if="removedTags"
          class="mx-2 md:h-6 md:text-base text-sm h-4 font-nunito-sans opacity-50"
        >
          {{ `+${removedTags}` }}
        </li>
      </ul>
      <ProjectModal :project="project" :modalActive="modalActive" @close-modal="toggleModal" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import ProjectModal from './ProjectModal.vue'

const props = defineProps({
  project: { type: Object, required: true },
  selectedTagsIds: { type: Array, required: false, default: () => [] }
})

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
</script>
