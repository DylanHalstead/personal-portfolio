<template>
  <div
    class="flex items-center whitespace-nowrap mr-3 px-3 py-2 rounded-full hover:border-primary border-light md:border-2 border hover:cursor-pointer transition-all duration-150 ease-in-out"
    :class="
      selectedTagsIds.includes(tag.id) ? 'bg-primary border-primary text-background opacity-90' : ''
    "
    @click="$emit('tag-clicked', tag.id)"
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
  tag: { type: Object, required: true },
  selectedTagsIds: { type: Array, required: false, default: () => [] }
})
</script>
