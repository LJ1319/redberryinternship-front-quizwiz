<template>
  <button
    type="button"
    v-on:click="toggleIsSelected"
    :class="isSelected && 'rounded-md bg-gray-300 p-1'"
    class="flex w-max items-center gap-4"
  >
    <span class="flex w-4 items-center justify-center">
      <slot />
    </span>
    <span>{{ name }}</span>
  </button>
</template>

<script>
export default {
  props: ['name'],
  data() {
    return {
      isSelected: false
    }
  },
  methods: {
    toggleIsSelected() {
      this.isSelected = !this.isSelected
    }
  }
}
</script>
