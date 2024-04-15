<template>
  <main-content>
    <div class="relative my-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
      <quiz-categories />

      <filter-toggle-button v-on:click="toggleFilter" />
      <filter-modal v-if="filterIsOpen" v-on:close="toggleFilter" />
    </div>

    <div class="mb-12 flex w-full flex-col items-center gap-8 font-inter lg:my-12">
      <quiz-grid :quizzes="quizzes" />

      <button
        v-on:click="loadMore"
        class="mt-10 flex h-12 w-40 items-center justify-center gap-2 rounded-lg bg-gray-150 font-semibold text-purple shadow-csm"
      >
        <span>
          <icon-arrow-load />
        </span>
        <span>Load more</span>
      </button>
    </div>
  </main-content>

  <page-toast :show="toast.show" :status="toast.status" :title="toast.title" :text="toast.text" />
</template>

<script>
import MainContent from '@/components/base/MainContent.vue'
import QuizCategories from '@/components/quizzes/scroll/CategoriesContainer.vue'
import FilterToggleButton from '@/components/quizzes/filtering-sorting/FilterToggleButton.vue'
import FilterModal from '@/components/quizzes/filtering-sorting/FilterModal.vue'
import QuizGrid from '@/components/quizzes/QuizGrid.vue'
import IconArrowLoad from '@/components/icons/IconArrowLoad.vue'
import PageToast from '@/components/shared/PageToast.vue'

import { computed } from 'vue'
import toast from '@/mixins/toast.js'

import { GetCategories, GetLevels, GetQuizzes } from '@/services/api/resources.js'

export default {
  components: {
    MainContent,
    QuizCategories,
    FilterToggleButton,
    FilterModal,
    QuizGrid,
    IconArrowLoad,
    PageToast
  },
  mixins: [toast],
  data() {
    return {
      categories: [],
      levels: [],
      quizzes: [],
      currentPage: 1,
      filterIsOpen: false
    }
  },
  provide() {
    return {
      categories: computed(() => this.categories),
      levels: computed(() => this.levels)
    }
  },
  mounted() {
    this.getCategories()
    this.getLevels()
    this.getQuizzes()
  },
  methods: {
    async getCategories() {
      try {
        const { data } = await GetCategories()
        this.categories = [...data]
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
    async getLevels() {
      const { data } = await GetLevels()
      this.levels = [...data]
    },
    async getQuizzes() {
      try {
        const { data } = await GetQuizzes()
        this.quizzes = [...data.data]
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
    async loadMore() {
      try {
        this.currentPage += 1

        const { data } = await GetQuizzes(9, this.currentPage)
        this.quizzes.push(...data.data)
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
