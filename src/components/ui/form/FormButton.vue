<template>
  <button class="my-10 h-14 w-full rounded-[0.625rem] bg-black font-inter font-semibold text-white">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ['text']
}
</script>
