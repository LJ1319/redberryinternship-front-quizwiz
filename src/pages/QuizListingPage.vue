<template>
  <main-content>
    <div class="relative mt-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
      <quiz-categories />

      <filter-toggle-button v-on:click="toggleFilter" />
      <filter-modal v-if="filterIsOpen" v-on:close="toggleFilter" />
    </div>

    <div>
      <div v-for="quiz in quizzes" :key="quiz.id">
        {{ quiz.name }}
      </div>

      <button v-on:click="loadMore">load more</button>
    </div>
  </main-content>

  <page-toast :show="toast.show" :status="toast.status" :title="toast.title" :text="toast.text" />
</template>

<script>
import MainContent from '@/components/base/MainContent.vue'
import QuizCategories from '@/components/quizzes/scroll/CategoriesContainer.vue'
import FilterToggleButton from '@/components/quizzes/filtering-sorting/FilterToggleButton.vue'
import FilterModal from '@/components/quizzes/filtering-sorting/FilterModal.vue'

import toast from '@/mixins/toast.js'
import { GetQuizzes } from '@/services/api/quizzes.js'
import PageToast from '@/components/shared/PageToast.vue'

export default {
  components: {
    PageToast,
    MainContent,
    QuizCategories,
    FilterToggleButton,
    FilterModal
  },
  mixins: [toast],
  data() {
    return {
      filterIsOpen: false,
      quizzes: [],
      currentPage: 1
    }
  },
  mounted() {
    this.getQuizzes()
  },
  methods: {
    async getQuizzes() {
      try {
        const { data } = await GetQuizzes()
        this.quizzes = data.data
        console.log(data)
      } catch (err) {
        console.log(err.response.data)
      }
    },
    async loadMore() {
      try {
        this.currentPage += 1
        const { data } = await GetQuizzes(9, this.currentPage)
        this.quizzes.push(...data.data)

        console.log(this.quizzes)
      } catch (err) {
        const toastData = {
          show: true,
          status: 'error',
          title: 'Error occurred',
          text: err.response.data.message
        }
        this.setToastData(toastData)

        this.toast.hide()
      }
    },
    toggleFilter() {
      this.filterIsOpen = !this.filterIsOpen
    }
  }
}
</script>
