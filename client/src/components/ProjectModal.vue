<template>
  <Teleport to="body">
    <div class="flex justify-center items-center">
      <Transition
        enter-from-class="opacity-0 scale-75"
        leave-to-class="opacity-0 scale-75"
        enter-active-class="transition-all duration-200 ease-in-out"
        leave-active-class="transition-all duration-200 ease-in-out"
        enter-to-class="opacity-100 scale-100"
        leave-from-class="opacity-100 scale-100"
      >
        <div
          v-if="modalActive"
          class="fixed max-w-5xl w-full top-1/2 transform -translate-y-1/2 z-20 p-8 m-8"
        >
          <div class="bg-background rounded-lg shadow-md box-border text-light">
            <div class="relative">
              <div class="absolute inset-0 w-full h-full bg-black opacity-70 rounded-t-md"></div>
              <img
                v-if="project.img_url"
                :src="project.img_url"
                :alt="`${project.name} Picture`"
                class="w-full md:h-72 h-48 object-cover rounded-t-md"
              />
              <div
                v-else
                class="w-full md:h-72 h-48 bg-gradient-to-r from-accent to-primary rounded-t-md"
              ></div>
              <button
                class="absolute top-0 right-0 flex justify-end opacity-50 hover:opacity-100 transition-opacity ease-in-out duration-200 m-4"
                @click="$emit('close-modal')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <div class="flex flex-col absolute bottom-8 left-6">
                <h2 class="w-full font-nunito-sans font-semibold md:text-6xl text-4xl mb-2">
                  {{ project.name }}
                </h2>
                <div class="flex">
                  <a
                    v-if="project.github_url"
                    :href="project.github_url"
                    class="opacity-50 hover:opacity-100 transition-opacity ease-in-out duration-200 mr-2"
                    target="_blank"
                  >
                    <svg viewBox="0 0 128 128" fill="currentColor" class="h-5 md:h-6">
                      <g>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                        ></path>
                        <path
                          d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"
                        ></path>
                      </g>
                    </svg>
                  </a>
                  <a
                    v-if="project.deployment_url"
                    :href="project.deployment_url"
                    class="hover:opacity-100 opacity-50 transition-opacity ease-in-out duration-200"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-5 md:h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="mx-6 my-4">
              <p class="md:text-lg text-xs max-h-80 overflow-y-scroll">
                {{ project.description }}
              </p>
              <ul class="pb-4 flex flex-wrap text-light overflow-scroll my-2">
                <li v-for="tag in project.tags" :key="tag.id" class="my-1 mr-4">
                  <div class="flex items-center whitespace-nowrap py-1 rounded-full">
                    <svg
                      viewBox="0 0 128 128"
                      v-html="tag.inner_svg"
                      fill="currentColor"
                      stroke="currentColor"
                      class="md:h-5 h-4 md:mr-1.5 mr-1"
                    ></svg>
                    <p class="font-semibold md:text-sm text-xs font-nunito-sans">
                      {{ tag.name }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Transition>
    </div>
    <!-- Dark Background Transition -->
    <Transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-all"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-all"
      leave-to-class="opacity-0"
    >
      <div v-show="modalActive" class="fixed z-10 inset-0 transition-opacity">
        <div
          @click="$emit('close-modal')"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
// import { watch, computed } from 'vue'

defineEmits(['close-modal'])
defineProps({
  project: { type: Object, required: true },
  modalActive: {
    type: Boolean,
    default: false
  }
})

// const isModalActive = computed(() => {
//   return props.modalActive
// })

// watch(isModalActive, (newVal) => {
//   toggleScroll(newVal)
// })

// const toggleScroll = (isActive) => {
//   if (isActive) {
//     document.body.style.overflow = 'hidden'
//   } else {
//     document.body.style.overflow = 'auto'
//   }
// }
</script>
