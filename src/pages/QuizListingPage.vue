<template>
  <main-content>
    <div class="relative mt-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
      <quiz-categories />

      <filter-toggle-button v-on:click="toggleFilter" />
      <filter-modal v-if="filterIsOpen" v-on:close="toggleFilter" />
    </div>
  </main-content>
</template>

<script>
import MainContent from '@/components/base/MainContent.vue'
import QuizCategories from '@/components/quizzes/QuizCategories.vue'
import FilterToggleButton from '@/components/quizzes/FilterToggleButton.vue'
import FilterModal from '@/components/quizzes/FilterModal.vue'

export default {
  components: {
    MainContent,
    QuizCategories,
    FilterToggleButton,
    FilterModal
  },
  data() {
    return {
      filterIsOpen: false
    }
  },
  methods: {
    toggleFilter() {
      this.filterIsOpen = !this.filterIsOpen
    }
  }
}
</script>
