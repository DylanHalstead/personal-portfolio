<template>
  <div class="tags-container">
    <Tag v-for="tag in tags" :key="tag.name" :tag="tag" />
  </div>
</template>

<script>
import Tag from './Tag.vue'

export default {
  name: "Tags",
  props: {
    tags: Array
  },
  components: {
    Tag
  },
  emits: []
}
</script>

<style scoped>
  .tags-container {
    display: flex;
    margin: 0 auto;
    width: 80%;
    overflow: scroll;
    /* Hiding scrollbar */
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .tags-container::-webkit-scrollbar{
    display: none;
  }
</style>