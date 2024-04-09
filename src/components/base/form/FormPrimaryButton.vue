<template>
  <button
    class="group mt-10 flex h-14 w-full items-center justify-center gap-2 rounded-clg bg-black font-inter font-semibold text-white focus:outline-none focus:ring-2 focus:ring-indigo-200 lg:my-10"
  >
    <span> {{ text }}</span>
    <span class="opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100">
      <icon-next color="white" />
    </span>
  </button>
</template>

<script>
import IconNext from '@/components/icons/IconNext.vue'

export default {
  components: { IconNext },
  props: ['text']
}
</script>
