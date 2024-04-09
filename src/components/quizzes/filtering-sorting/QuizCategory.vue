<template>
  <button
    v-on:click="toggleSelected"
    :class="
      isSelected && type === 'scroll'
        ? 'border-b-2 border-black pt-0.5 text-black'
        : type === 'scroll'
          ? 'text-gray-500'
          : isSelected && type !== 'scroll'
            ? 'rounded-3xl bg-black text-white'
            : 'text-gray-600'
    "
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
