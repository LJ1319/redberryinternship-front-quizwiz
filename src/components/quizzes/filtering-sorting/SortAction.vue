<template>
  <button
    type="button"
    v-on:click="change"
    :class="isSelected && 'bg-gray-300'"
    class="flex w-max items-center gap-4 rounded-md p-1 hover:bg-gray-300"
  >
    <span class="flex w-4 items-center justify-center">
      <slot />
    </span>
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  inject: ['changeSort', 'fSort'],
  props: ['text', 'value', 'order_column', 'order_direction'],
  data() {
    return {
      isSelected: false
    }
  },
  watch: {
    '$route.query.sort'(val) {
      this.isSelected = val === this.value
    },
    fSort(val) {
      this.isSelected = val === this.value
    }
  },
  mounted() {
    this.sort = this.$route.query?.sort
  },
  methods: {
    change() {
      let sort = this.value
      let orderColumn = this.order_column
      let orderDirection = this.order_direction

      if (this.fSort === this.value) {
        this.isSelected = !this.isSelected

        sort = undefined
        orderColumn = undefined
        orderDirection = undefined
      }

      const values = {
        sort: sort,
        orderColumn: orderColumn,
        orderDirection: orderDirection
      }
      this.changeSort(values)
    }
  }
}
</script>
