<template>
  <div
    class="flex items-center whitespace-nowrap mr-3 md:px-3 md:py-2 px-2 py-1 rounded-full border-light md:border-2 border hover:cursor-pointer"
  >
    <svg
      viewBox="0 0 128 128"
      v-html="tag.inner_svg"
      fill="currentColor"
      stroke="currentColor"
      class="h-4 md:h-6 mr-1.5"
    ></svg>
    <p class="font-semibold font-nunito-sans md:text-base text-xs">{{ tag.name }}</p>
  </div>
</template>

<script setup>
defineProps({
  tag: { type: Object, required: true }
})
</script>
