<template>
  <form
    class="fixed left-0 top-0 z-50 h-screen w-full bg-white font-inter lg:absolute lg:left-auto lg:right-0 lg:top-14 lg:h-max lg:w-10/12 lg:rounded-xl lg:border lg:border-black lg:p-4"
  >
    <div
      class="flex justify-between border-b border-gray-300 bg-zinc-50 px-4 py-6 text-sm font-semibold text-gray-500 lg:hidden lg:rounded-xl"
    >
      <button>Reset</button>
      <span>FILTERS</span>
      <close-button v-on:click="close" class="h-6 w-6" />
    </div>

    <div class="items-center justify-between gap-4 bg-gray-150/70 lg:flex lg:rounded-xl lg:p-4">
      <div
        class="hidden h-10 w-20 shrink-0 items-center justify-center gap-2 rounded-clg bg-black focus:outline-none lg:flex"
      >
        <icon-settings color="white" />
        <span class="text-sm text-white">Filter</span>
      </div>

      <div
        class="w-full border-b border-gray-300 bg-white px-4 py-6 lg:rounded-3xl lg:border lg:border-gray-500/40 lg:px-6 lg:py-2"
      >
        <!--        <search-bar />-->
      </div>

      <actions-container class="hidden shrink-0 lg:flex" />
      <close-button v-on:click="close" width="10" height="10" class="hidden h-4 w-4 lg:block" />
    </div>

    <div class="flex items-center justify-center py-5 lg:hidden">
      <div
        v-on:click="toggleSelected"
        class="flex h-12 w-96 rounded-3xl bg-gray-300/30 text-sm font-semibold text-gray-500/50"
      >
        <button
          type="button"
          :class="filterIsSelected && 'rounded-3xl bg-white text-purple ring-1 ring-gray-300'"
          class="w-full focus:outline-none"
        >
          Filter
        </button>

        <button
          type="button"
          :class="sortingIsSelected && 'rounded-3xl bg-white text-purple ring-1 ring-gray-300'"
          class="w-full focus:outline-none"
        >
          Sorting
        </button>
      </div>
    </div>

    <div class="justify-between gap-2.5 lg:flex">
      <quiz-filters v-show="filterIsShown || filterIsSelected" />
      <quiz-sorts v-show="sortIngIsShown || sortingIsSelected" />
    </div>

    <actions-container class="lg:hidden" />
  </form>
</template>

<script>
import CloseButton from '@/components/base/buttons/CloseButton.vue'
import IconSettings from '@/components/icons/IconSettings.vue'
import SearchBar from '@/components/base/search/SearchBar.vue'
import ActionsContainer from '@/components/quizzes/filtering-sorting/ActionsContainer.vue'
import QuizFilters from '@/components/quizzes/filtering-sorting/QuizFilters.vue'
import QuizSorts from '@/components/quizzes/filtering-sorting/QuizSorts.vue'

import { removeBodyScroll } from '@/utils/helpers.js'

export default {
  components: {
    CloseButton,
    IconSettings,
    SearchBar,
    ActionsContainer,
    QuizFilters,
    QuizSorts
  },
  data() {
    return {
      filterIsShown: true,
      sortIngIsShown: true,
      filterIsSelected: true,
      sortingIsSelected: false
    }
  },
  emits: ['close'],
  mounted() {
    removeBodyScroll(true)
  },
  beforeUnmount() {
    removeBodyScroll(false)
  },
  methods: {
    close() {
      this.$emit('close')
    },
    toggleSelected() {
      this.filterIsShown = !this.filterIsShown
      this.sortIngIsShown = !this.sortIngIsShown

      this.filterIsSelected = !this.filterIsSelected
      this.sortingIsSelected = !this.sortingIsSelected
    }
  }
}
</script>
