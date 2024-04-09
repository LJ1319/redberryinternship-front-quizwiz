<template>
  <button class="flex items-center justify-center">
    <icon-close :width="width" :height="height" />
  </button>
</template>

<script>
import IconClose from '@/components/icons/IconClose.vue'

export default {
  components: {
    IconClose
  },
  props: ['width', 'height']
}
</script>
