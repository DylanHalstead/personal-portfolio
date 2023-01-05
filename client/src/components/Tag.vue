<template>
  <div class="tag-container">
    <svg viewBox="0 0 128 128" class="tag-icon">
      <path fill="#F2F5F8" :d="tag.svgPath"></path>
    </svg>
    {{ tag.name }}
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    tag: Object
  }
}
</script>

<style scoped>
  .tag-container {
    display: flex;
    padding: .5rem .75rem;
    border: .1rem white solid;
    font-family: 'Archivo', sans-serif;
    font-weight: 800;
    font-size: 1rem;
    border-radius: 20rem;
    align-items: center;
    margin: 0 .75rem;
    cursor: pointer;
  }
  .tag-icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .5rem;
  }
</style>