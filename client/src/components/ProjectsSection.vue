<template>
  <div class="flex flex-col items-center mx-auto mt-12 pb-16">
    <h2 class="md:text-5xl text-3xl md:mb-6 mb-4 font-nunito-sans font-semibold">Projects</h2>
    <div v-if="isLoaded" class="relative overflow-hidden w-4/5">
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
        class="list-none flex flex-auto overflow-x-scroll md:mb-6 md:p-0 mb-0 p-6 text-light box-border no-scrollbar scroll-smooth w-full"
      >
        <li v-for="tag in tags" :key="tag.id">
          <Tag :tag="tag" :selectedTagsIds="selectedTagsIds" @tag-clicked="tagClickedHandler" />
        </li>
      </ul>
    </div>
    <ul v-if="isLoaded" class="list-none md:px-6 md:mx-16 flex flex-wrap justify-center">
      <li class="m-4 w-full md:w-auto" v-for="project in projects" :key="project.id">
        <Project :project="project" :selectedTagsIds="selectedTagsIds" />
      </li>
    </ul>
    <div role="status" v-if="!isLoaded">
      <svg
        aria-hidden="true"
        class="w-12 h-12 text-light animate-spin dark:text-gray-600 fill-primary"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import axios from 'axios'
import Project from './Project.vue'
import Tag from './Tag.vue'

const tagsWrapper = ref(null)
const scrollAmt = ref(0)
const maxScrollLeft = ref(0)
const scrollThreshold = 100
const tagScrollHandler = (e) => {
  scrollAmt.value = e.target.scrollLeft
  maxScrollLeft.value = tagsWrapper.value.scrollWidth - tagsWrapper.value.clientWidth
}

const isLoaded = ref(false)

const projects = ref([])
const getProjects = async () => {
  await axios
    .get('http://127.0.0.1:5000/api/projects')
    .then((res) => {
      projects.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setTimeout(() => {
        isLoaded.value = true
      }, 1000)
    })
}

const tags = ref([])
const getTags = async () => {
  await axios
    .get('http://127.0.0.1:5000/api/tags')
    .then((res) => {
      tags.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setTimeout(() => {
        isLoaded.value = true
      }, 1000)
    })
}

onMounted(() => {
  getProjects()
  getTags()
})

const selectedTagsIds = ref([])
const tagClickedHandler = (tagId) => {
  if (selectedTagsIds.value.includes(tagId)) {
    selectedTagsIds.value = selectedTagsIds.value.filter((id) => id !== tagId)
  } else {
    selectedTagsIds.value = [...selectedTagsIds.value, tagId]
  }
}

watch(selectedTagsIds, () => {
  projects.value.forEach((project) => {
    project.tags = project.tags.sort((a, b) => {
      const aInSelected = selectedTagsIds.value.includes(a.id)
      const bInSelected = selectedTagsIds.value.includes(b.id)
      if (aInSelected && !bInSelected) {
        return -1
      } else if (!aInSelected && bInSelected) {
        return 1
      } else {
        return 0
      }
    })
  })
  // Find projects which include all selected tags
  projects.value.sort((a, b) => {
    const aTags = a.tags.map((tag) => tag.id)
    const bTags = b.tags.map((tag) => tag.id)
    const aTagsInSelected = aTags.filter((tag) => selectedTagsIds.value.includes(tag))
    const bTagsInSelected = bTags.filter((tag) => selectedTagsIds.value.includes(tag))
    return bTagsInSelected.length - aTagsInSelected.length
  })
})
</script>
