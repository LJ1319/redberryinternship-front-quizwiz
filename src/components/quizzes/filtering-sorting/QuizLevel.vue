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
  inject: ['changeLevels', 'filterLevels'],
  props: ['id', 'name', 'bg_color', 'color'],
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
  mounted() {
    this.checkData()
  },
  watch: {
    '$route.query.levels'(val) {
      this.isSelected = !(!val || !val.includes(this.id.toString()))
    },
    filterLevels(val) {
      this.isSelected = val.includes(this.id.toString())
    }
  },
  methods: {
    toggleSelected() {
      this.isSelected = !this.isSelected

      this.changeLevels(this.id.toString())
    },
    checkData() {
      const levels = this.$route.query.levels

      if (levels) {
        this.isSelected = levels.includes(this.id.toString())
      }
    }
  }
}
</script>
