<template>
  <button
    v-on:click="scroll"
    class="right-0 top-0 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-black/10 lg:flex"
  >
    <icon-left v-if="direction === 'left'" />
    <icon-right v-if="direction === 'right'" />
  </button>
</template>

<script>
import IconLeft from '@/components/icons/IconLeft.vue'
import IconRight from '@/components/icons/IconRight.vue'

export default {
  components: {
    IconLeft,
    IconRight
  },
  props: ['direction'],
  emits: ['scroll'],
  methods: {
    scroll() {
      this.$emit('scroll')
    }
  }
}
</script>
