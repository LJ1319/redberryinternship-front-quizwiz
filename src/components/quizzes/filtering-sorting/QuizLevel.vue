<template>
  <button
    type="button"
    v-on:click="toggleSelected"
    :class="isSelected ? 'bg-purple text-white' : 'bg-[#F0F9FF] text-[#026AA2]'"
    class="flex h-10 min-w-max items-center justify-center rounded-2xl px-5 py-2.5 font-inter focus:outline-none lg:h-7 lg:px-3"
  >
    {{ name }}
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
    toggleSelected() {
      this.isSelected = !this.isSelected
    }
  }
}
</script>
