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
  inject: ['changeCategories', 'filterCategories'],
  props: ['id', 'name', 'type'],
  emits: ['change'],
  data() {
    return {
      isScrollable: this.type === 'scrollable',
      isSelected: this.isAllSelected
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
  mounted() {
    this.checkData()
  },
  watch: {
    '$route.query.categories'(val) {
      this.isSelected = !(!val || !val.includes(this.id.toString()))
    },
    filterCategories(val) {
      this.isSelected = val.includes(this.id.toString())
    }
  },
  methods: {
    toggleSelected() {
      this.isSelected = !this.isSelected

      if (this.isScrollable) {
        this.$emit('change', this.id.toString())
      } else {
        this.changeCategories(this.id.toString())
      }
    },
    checkData() {
      const categories = this.$route.query.categories

      if (categories) {
        this.isSelected = categories.includes(this.id.toString())
      }
    }
  }
}
</script>
