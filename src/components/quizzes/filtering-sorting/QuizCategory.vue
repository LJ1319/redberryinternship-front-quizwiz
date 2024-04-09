<template>
  <button
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
      isSelected: false,
      isScrollable: this.type === 'scrollable'
    }
  },
  computed: {
    classObject() {
      return {
        'text-gray-500': this.isScrollable,
        'text-gray-600': !this.isScrollable,
        'border-b-2 border-black pt-0.5 text-black': this.isSelected && this.isScrollable,
        'rounded-3xl bg-black text-white': this.isSelected && !this.isScrollable
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
