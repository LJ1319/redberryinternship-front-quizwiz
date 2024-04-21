<template>
  <scroll-button direction="left" v-on:scroll="scroll('left')" />

  <div
    ref="container"
    class="flex h-12 w-full items-center gap-5 overflow-x-scroll scroll-smooth border-b border-gray-300/40 no-scrollbar"
  >
    <button
      v-on:click="resetCategories"
      :class="isAllSelected ? 'border-b-2 border-black pt-0.5 text-black' : 'text-gray-500'"
      class="min-h-full min-w-max font-inter text-sm font-semibold"
    >
      All Quizzes
    </button>

    <quiz-category
      v-for="category in categories"
      :key="category.id"
      :id="category.id"
      :name="category.name"
      type="scrollable"
      v-on:change="changeCategories"
    />
  </div>

  <scroll-button direction="right" v-on:scroll="scroll('right')" />
</template>

<script>
import ScrollButton from '@/components/quizzes/scroll/ScrollButton.vue'
import QuizCategory from '@/components/quizzes/filtering-sorting/QuizCategory.vue'

import toast from '@/mixins/toast.js'

export default {
  components: {
    ScrollButton,
    QuizCategory
  },
  inject: ['categories'],
  mixins: [toast],
  emits: ['count'],
  data() {
    return {
      isAllSelected: true,
      selectedCategories: []
    }
  },
  watch: {
    '$route.query.categories'(val) {
      if (val) {
        this.checkData()
      } else {
        this.selectedCategories = []
      }

      this.isAllSelected = !val || val.length === 0
    }
  },
  mounted() {
    this.checkData()
    this.isAllSelected = !this.$route.query.categories
  },
  methods: {
    scroll(direction) {
      if (direction === 'left') {
        this.$refs.container.scrollLeft -= 80
      }

      if (direction === 'right') {
        this.$refs.container.scrollLeft += 80
      }
    },
    checkData() {
      const categories = this.$route.query.categories

      if (categories) {
        if (!Array.isArray(categories)) {
          this.selectedCategories.push(categories)
        } else {
          this.selectedCategories = [...categories]
        }
      } else {
        this.selectedCategories = []
      }
    },
    resetCategories() {
      this.$emit('count', -this.selectedCategories.length)

      this.selectedCategories = []
      this.$router.replace({
        query: { ...this.$route.query, categories: undefined }
      })
    },
    changeCategories(id) {
      if (!this.selectedCategories.includes(id)) {
        this.selectedCategories.push(id)

        this.$emit('count', 1)
      } else {
        const el = this.selectedCategories.indexOf(id)
        this.selectedCategories.splice(el, 1)

        this.$emit('count', -1)
      }

      this.$router.replace({
        query: {
          ...this.$route.query,
          categories: this.selectedCategories
        }
      })
    }
  }
}
</script>
