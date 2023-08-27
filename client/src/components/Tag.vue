<template>
  <div
    class="flex items-center whitespace-nowrap mr-3 px-3 py-2 rounded-full border-light border-2 hover:cursor-pointer"
  >
    <svg
      viewBox="0 0 128 128"
      v-html="tag.inner_svg"
      fill="currentColor"
      stroke="currentColor"
      class="h-6 mr-1.5"
    ></svg>
    <p class="font-semibold font-nunito-sans">{{ tag.name }}</p>
  </div>
</template>

<script setup>
defineProps({
  tag: { type: Object, required: true }
})
</script>
