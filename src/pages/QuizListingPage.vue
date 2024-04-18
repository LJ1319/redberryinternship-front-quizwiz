<template>
  <main-content>
    <div class="relative my-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
      <quiz-categories />

      <filter-toggle-button v-on:click="toggleFilter" />
      <filter-modal v-if="filterIsOpen" v-on:close="toggleFilter" />
    </div>

    <div v-if="quizzes.length === 0 && isLoading" class="flex items-center justify-center">
      <icon-spinner class="animate-spin" />
    </div>

    <div
      class="mb-12 flex w-full flex-col items-center gap-8 font-inter lg:my-12"
      v-if="quizzes.length > 0"
    >
      <quiz-grid :quizzes="quizzes" />

      <button
        v-if="canLoadMore"
        v-on:click="loadMore"
        class="mt-10 flex h-12 w-40 items-center justify-center gap-2 rounded-lg bg-gray-150 font-semibold text-purple shadow-csm"
      >
        <span v-if="!isLoading">
          <icon-arrow-load />
        </span>

        <span v-if="isLoading">
          <icon-spinner class="animate-spin" />
        </span>

        <span>Load more</span>
      </button>
    </div>

    <p
      v-if="quizzes.length === 0 && !isLoading"
      class="text-center font-raleway text-3xl font-bold text-purple"
    >
      No quizzes to show. Search for other ones.
    </p>
  </main-content>

  <page-toast :show="toast.show" :status="toast.status" :title="toast.title" :text="toast.text" />
</template>

<script>
import MainContent from '@/components/base/MainContent.vue'
import QuizCategories from '@/components/quizzes/scroll/CategoriesContainer.vue'
import FilterToggleButton from '@/components/quizzes/filtering-sorting/FilterToggleButton.vue'
import FilterModal from '@/components/quizzes/filtering-sorting/FilterModal.vue'
import IconSpinner from '@/components/icons/IconSpinner.vue'
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
    IconSpinner,
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
      canLoadMore: true,
      isLoading: false,
      filterIsOpen: false
    }
  },
  provide() {
    return {
      categories: computed(() => this.categories),
      levels: computed(() => this.levels)
    }
  },
  watch: {
    canLoadMore(val) {
      if (!val) {
        this.currentPage = 1
      }
    },
    '$route.query'(val) {
      if (val) {
        this.getQuizzes()
      }
    }
  },
  mounted() {
    const categories = this.$route.query.categories

    if (categories && !Array.isArray(categories)) {
      this.$route.query.categories = Object.values(this.$route.query.categories)
    }

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
        this.isLoading = true

        const params = {
          page: this.currentPage,
          ...this.$route.query
        }

        const { data } = await GetQuizzes(params)
        this.quizzes = [...data.data]

        this.isLoading = false

        this.canLoadMore = this.currentPage < data.last_page
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
        this.isLoading = true

        const params = {
          page: this.currentPage,
          ...this.$route.query
        }

        const { data } = await GetQuizzes(params)
        this.quizzes.push(...data.data)

        this.canLoadMore = this.currentPage < data.last_page

        this.isLoading = false
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
