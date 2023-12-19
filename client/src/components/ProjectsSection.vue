<template>
  <div class="flex flex-col items-center mx-auto mt-12 pb-24">
    <h2 class="md:text-5xl text-3xl md:mb-6 mb-4 font-nunito-sans font-semibold">Projects</h2>
    <slot v-if="isLoaded">
      <div class="relative overflow-hidden w-4/5">
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
      <ul class="list-none md:px-6 md:mx-16 flex flex-wrap justify-center">
        <li class="m-4 w-full md:w-auto" v-for="project in shownProjects" :key="project.id">
          <Project :project="project" :selectedTagsIds="selectedTagsIds" />
        </li>
      </ul>
      <Pagination :itemsPerPage="6" :totalItems="projects.length" @change-page="changePage" />
    </slot>
    <Spinner v-else />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import axios from 'axios'
import Project from './Project.vue'
import Tag from './Tag.vue'
import Spinner from './Spinner.vue'
import Pagination from './Pagination.vue'

const tagsWrapper = ref(null)
const scrollAmt = ref(0)
const maxScrollLeft = ref(0)
const scrollThreshold = 100
const tagScrollHandler = (e) => {
  scrollAmt.value = e.target.scrollLeft
  maxScrollLeft.value = tagsWrapper.value.scrollWidth - tagsWrapper.value.clientWidth
}

const isLoaded = ref(false)
const apiUri = import.meta.env.VITE_API_URI || ''
const projectsPerPage = 6

let projects = []
const shownProjects = ref([])
const getProjects = async () => {
  await axios
    .get(`${apiUri}/api/projects`)
    .then((res) => {
      projects = res.data
      shownProjects.value = projects.slice(0, projectsPerPage)
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
    .get(`${apiUri}/api/tags`)
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
  projects.forEach((project) => {
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
  projects.sort((a, b) => {
    const aTags = a.tags.map((tag) => tag.id)
    const bTags = b.tags.map((tag) => tag.id)
    const aTagsInSelected = aTags.filter((tag) => selectedTagsIds.value.includes(tag))
    const bTagsInSelected = bTags.filter((tag) => selectedTagsIds.value.includes(tag))
    return bTagsInSelected.length - aTagsInSelected.length
  })
  shownProjects.value = projects.slice(0, projectsPerPage)
})

const changePage = (page) => {
  shownProjects.value = projects.slice((page - 1) * projectsPerPage, page * projectsPerPage)
}
</script>
