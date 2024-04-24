<template>
  <button
    type="button"
    v-on:click="change"
    :class="isSelected && 'bg-zinc-300/20'"
    class="group flex h-10 w-full items-center justify-between rounded-md px-4 hover:bg-zinc-300/20"
  >
    <span class="flex gap-4">
      <span class="flex w-4 items-center">
        <slot />
      </span>
      <span>{{ text }}</span>
    </span>

    <span :class="isSelected ? '' : 'hidden'">
      <icon-completion class="h-4 w-4" />
    </span>
  </button>
</template>

<script>
import IconCompletion from '@/components/icons/IconCompletion.vue'

export default {
  components: {
    IconCompletion
  },
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
