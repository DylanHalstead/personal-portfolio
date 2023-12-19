<template>
  <div
    class="w-full hover:cursor-pointer rounded-md transform hover:-translate-y-2 border bg-gray-300 border-gray-300 dark:bg-gray-700 dark:border-gray-700 ease-in-out transition-transform duration-500"
    @click="emit('project-clicked', project)"
  >
    <div class="relative">
      <div
        class="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-transparent via-30% opacity-70 z-10"
      ></div>
      <div class="h-56 md:w-96 overflow-hidden">
        <img
          :src="project.img_url ? project.img_url : '/default_project.png'"
          :alt="`${project.name} Picture`"
          class="w-full h-full object-cover rounded-t-md transition-transform duration-500 ease-in-out"
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
        v-if="removedTagsLength"
        class="mx-2 md:h-6 md:text-base text-sm h-4 font-nunito-sans opacity-50"
      >
        {{ `+${removedTagsLength}` }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
  selectedTagsIds: { type: Array, required: false, default: () => [] }
})

const emit = defineEmits(['project-clicked'])

const maxDisplayableTags = 8
const removedTagsLength = ref(0)
const displayedTags = ref([])
const displayedTagsHandler = () => {
  const sortedTags = [...props.project.tags].sort((a, b) => {
    const aInSelected = props.selectedTagsIds.includes(a.id)
    const bInSelected = props.selectedTagsIds.includes(b.id)
    if (aInSelected && !bInSelected) {
      return -1
    } else if (!aInSelected && bInSelected) {
      return 1
    } else {
      return 0
    }
  })

  if (
    props.project.tags.length > maxDisplayableTags &&
    props.project.tags.length != maxDisplayableTags + 1
  ) {
    removedTagsLength.value = sortedTags.length - maxDisplayableTags
    displayedTags.value = sortedTags.slice(0, maxDisplayableTags)
  } else {
    displayedTags.value = sortedTags
  }
}

onMounted(() => {
  displayedTagsHandler()
})

watch(
  () => props.selectedTagsIds,
  () => {
    displayedTagsHandler()
  }
)
</script>
