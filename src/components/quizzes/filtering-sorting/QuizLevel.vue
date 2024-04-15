<template>
  <button
    type="button"
    v-on:click="toggleSelected"
    :style="[baseStyles, isSelected && selectedStyles]"
    class="flex h-10 min-w-max items-center justify-center rounded-2xl px-5 font-inter focus:outline-none lg:h-7 lg:px-3"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  props: ['name', 'bg_color', 'color'],
  data() {
    return {
      isSelected: false,
      baseStyles: {
        backgroundColor: this.bg_color,
        color: this.color
      },
      selectedStyles: {
        backgroundColor: this.color,
        color: 'white'
      }
    }
  },
  methods: {
    toggleSelected() {
      this.isSelected = !this.isSelected
    }
  }
}
</script>
