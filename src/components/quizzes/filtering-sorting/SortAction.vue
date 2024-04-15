<template>
  <button
    type="button"
    v-on:click="toggleIsSelected"
    :class="isSelected && 'bg-gray-300'"
    class="flex w-max items-center gap-4 rounded-md p-1 hover:bg-gray-300"
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
