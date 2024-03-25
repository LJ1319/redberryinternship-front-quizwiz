<template>
  <button
    class="group my-10 flex h-14 w-full items-center justify-center gap-2 rounded-[0.625rem] bg-black font-inter font-semibold text-white"
  >
    <span> {{ text }}</span>
    <span class="opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100">
      <icon-next-light />
    </span>
  </button>
</template>

<script>
import IconNextLight from '@/components/icons/IconNextLight.vue'

export default {
  components: { IconNextLight },
  props: ['text']
}
</script>
