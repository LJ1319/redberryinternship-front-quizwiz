<template>
  <div
    class="fixed bottom-0 left-0 flex h-24 w-full items-center gap-2.5 bg-white px-4 py-5 text-sm shadow-c3xl lg:static lg:h-10 lg:w-max lg:gap-4 lg:bg-gray-150/70 lg:p-0 lg:shadow-none"
  >
    <button
      v-on:click="confirm"
      class="h-full w-2/3 rounded-clg bg-purple font-semibold text-white focus:outline-none lg:w-28"
    >
      Confirm
    </button>

    <div class="hidden h-3 w-[1px] bg-black/40 lg:block"></div>

    <button
      v-on:click="reset"
      class="h-full w-1/3 rounded-clg border text-gray-600 focus:outline-none lg:w-max lg:rounded-none lg:border-0"
    >
      <span class="font-semibold text-gray-500 lg:hidden">Cancel</span>
      <span class="hidden text-gray-600 lg:block">Reset all filters</span>
    </button>
  </div>
</template>

<script>
export default {
  emits: ['confirm', 'reset'],
  methods: {
    confirm() {
      this.$emit('confirm')
    },
    reset() {
      this.$emit('reset')
    }
  }
}
</script>
