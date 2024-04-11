<template>
  <button
    type="button"
    v-on:click="toggleSelected"
    :class="classObject"
    class="min-h-full min-w-max font-inter text-sm font-semibold"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  props: ['name', 'type'],
  data() {
    return {
      isScrollable: this.type === 'scrollable',
      isSelected: false
    }
  },
  computed: {
    classObject() {
      return {
        'text-gray-500': this.isScrollable && !this.isSelected,
        'text-gray-600': !this.isScrollable && !this.isSelected,
        'border-b-2 border-black pt-0.5 text-black': this.isScrollable && this.isSelected,
        'rounded-3xl bg-black text-white': !this.isScrollable && this.isSelected
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
