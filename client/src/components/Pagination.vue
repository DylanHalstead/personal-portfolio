<template>
  <div>
    <div class="flex flex-col items-center mb-2">
      <span class="text-sm text-gray-700 dark:text-gray-400">
        Showing
        <span class="font-semibold text-gray-900 dark:text-white">{{
          (currentPage - 1) * itemsPerPage + 1
        }}</span>
        to
        <span class="font-semibold text-gray-900 dark:text-white">{{
          Math.min(currentPage * itemsPerPage, totalItems)
        }}</span>
        of
        <span class="font-semibold text-gray-900 dark:text-white">{{ totalItems }}</span>
        Entries
      </span>
    </div>
    <!-- https://flowbite.com/docs/components/pagination/ -->
    <nav aria-label="Project navigation">
      <ul class="flex items-center -space-x-px h-10 text-base">
        <li>
          <button
            href="#"
            class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @click="changePage(currentPage - 1)"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        <li v-for="page in Array(totalPages).keys()" :key="page">
          <button
            href="#"
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            :class="
              page + 1 === currentPage
                ? 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white'
                : ''
            "
            @click="changePage(page + 1)"
          >
            {{ page + 1 }}
          </button>
        </li>

        <li>
          <button
            href="#"
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @click="changePage(currentPage + 1)"
          >
            <span class="sr-only">Next</span>
            <svg
              class="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  totalItems: { type: Number, required: true },
  itemsPerPage: { type: Number, required: false, default: () => 6 }
})
const emit = defineEmits(['change-page'])

const totalPages = ref(Math.ceil(props.totalItems / props.itemsPerPage))
let currentPage = ref(1)
const changePage = (page) => {
  if (page < 1 || page > props.totalPages) return
  currentPage.value = page
  emit('change-page', page)
}
</script>
