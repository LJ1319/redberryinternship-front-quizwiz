<template>
  <div
    ref="filter"
    class="fixed left-0 top-0 z-40 h-screen w-full bg-white font-inter lg:absolute lg:left-auto lg:right-0 lg:top-14 lg:h-max lg:w-10/12 lg:rounded-xl lg:border lg:border-black lg:p-4"
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
        class="flex h-20 w-full items-center gap-2 border-b border-gray-300 bg-white px-4 lg:h-10 lg:rounded-3xl lg:border lg:border-gray-500/40"
      >
        <icon-search />

        <input
          ref="searchInput"
          v-model="searchText"
          v-on:input="handleInput"
          type="text"
          placeholder="Search"
          class="h-full w-full bg-inherit font-inter text-sm focus:outline-none"
        />
      </div>

      <actions-container
        v-show="hasNewFilters"
        v-on:confirm="confirm"
        v-on:reset="reset"
        class="hidden shrink-0 lg:flex"
      />
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
      <quiz-filters
        v-show="filterIsShown || filterIsSelected"
        :filtered-levels="filteredLevels"
        :filtered-categories="filteredCategories"
      />
      <quiz-sorts v-show="sortIngIsShown || sortingIsSelected" />
    </div>

    <actions-container
      v-show="hasNewFilters"
      v-on:confirm="confirm"
      v-on:reset="reset"
      class="lg:hidden"
    />
  </div>
</template>

<script>
import CloseButton from '@/components/base/buttons/CloseButton.vue'
import IconSettings from '@/components/icons/IconSettings.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import ActionsContainer from '@/components/quizzes/filtering-sorting/ActionsContainer.vue'
import QuizFilters from '@/components/quizzes/filtering-sorting/QuizFilters.vue'
import QuizSorts from '@/components/quizzes/filtering-sorting/QuizSorts.vue'

import { diffArrays, removeBodyScroll } from '@/utils/helpers.js'
import { computed } from 'vue'

export default {
  components: {
    CloseButton,
    IconSettings,
    IconSearch,
    ActionsContainer,
    QuizFilters,
    QuizSorts
  },
  inject: ['levels', 'categories'],
  emits: ['close', 'count'],
  data() {
    return {
      filterIsShown: true,
      sortIngIsShown: true,
      filterIsSelected: true,
      sortingIsSelected: false,
      searchText: '',
      filteredLevels: this.levels,
      filteredCategories: this.categories,
      filter: undefined,
      sort: undefined,
      orderColumn: undefined,
      orderDirection: undefined,
      filterLevels: [],
      filterCategories: [],
      oldFilter: undefined,
      oldSort: undefined,
      oldOrderColumn: undefined,
      oldOrderDirection: undefined,
      oldLevels: [],
      oldCategories: [],
      count: 0
    }
  },
  computed: {
    hasNewFilters() {
      return (
        this.oldFilter !== this.filter ||
        this.oldSort !== this.sort ||
        diffArrays(this.oldLevels, this.filterLevels) ||
        diffArrays(this.oldCategories, this.filterCategories) ||
        diffArrays(this.filterCategories, this.$route.query.categories)
      )
    }
  },
  provide() {
    return {
      fFilter: computed(() => this.filter),
      fSort: computed(() => this.sort),
      filterLevels: computed(() => this.filterLevels),
      filterCategories: computed(() => this.filterCategories),
      changeFilter: this.changeFilter,
      changeLevels: this.changeLevels,
      changeCategories: this.changeCategories,
      changeSort: this.changeSort
    }
  },
  mounted() {
    window.addEventListener('click', this.handleClickOutside)
    removeBodyScroll(true)

    this.checkData()
    this.$refs.searchInput.focus()
  },
  beforeUnmount() {
    window.removeEventListener('click', this.handleClickOutside)
    removeBodyScroll(false)
  },
  watch: {
    '$route.query'(val) {
      if (val) {
        this.checkData()
      }
    }
  },
  methods: {
    handleClickOutside(e) {
      if (!this.$refs.filter.contains(e.target)) {
        this.close()
      }
    },
    close() {
      this.$emit('close')
    },
    toggleSelected() {
      this.filterIsShown = !this.filterIsShown
      this.sortIngIsShown = !this.sortIngIsShown

      this.filterIsSelected = !this.filterIsSelected
      this.sortingIsSelected = !this.sortingIsSelected
    },
    checkData() {
      this.filter = this.$route.query?.filter

      const filterLevels = this.$route.query.levels
      if (filterLevels) {
        if (!Array.isArray(filterLevels)) {
          this.filterLevels.push(filterLevels)
        } else {
          this.filterLevels = [...filterLevels]
        }
      } else {
        this.filterLevels = []
      }

      const filterCategories = this.$route.query.categories
      if (filterCategories) {
        if (!Array.isArray(filterCategories)) {
          this.filterCategories.push(filterCategories)
        } else {
          this.filterCategories = [...filterCategories]
        }
      } else {
        this.filterCategories = []
      }

      this.sort = this.$route.query?.sort
      this.oldSort = this.sort
      this.orderColumn = this.$route.query?.order_column
      this.orderDirection = this.$route.query?.order_direction

      this.revert()
    },
    handleInput() {
      const search = this.searchText

      this.filteredLevels = this.levels.filter((level) =>
        level.name.toLowerCase().includes(search.toLowerCase())
      )

      this.filteredCategories = this.categories.filter((category) =>
        category.name.toLowerCase().includes(search.toLowerCase())
      )
    },
    changeFilter(value) {
      this.filter = value
    },
    changeLevels(id) {
      if (!this.filterLevels.includes(id)) {
        this.filterLevels.push(id)

        this.count++
      } else {
        const el = this.filterLevels.indexOf(id)
        this.filterLevels.splice(el, 1)

        this.count--
      }
    },
    changeCategories(id) {
      if (!this.filterCategories.includes(id)) {
        this.filterCategories.push(id)

        this.count++
      } else {
        const el = this.filterCategories.indexOf(id)
        this.filterCategories.splice(el, 1)

        this.count--
      }
    },
    changeSort(values) {
      this.sort = values.sort
      this.orderColumn = values.orderColumn
      this.orderDirection = values.orderDirection
    },
    revert() {
      this.oldFilter = this.filter
      this.oldSort = this.sort
      this.oldOrderColumn = this.orderColumn
      this.oldOrderDirection = this.orderDirection
      this.oldLevels = [...this.filterLevels]
      this.oldCategories = [...this.filterCategories]
    },
    confirm() {
      this.$router.replace({
        query: {
          ...this.$route.query,
          filter: this.filter,
          sort: this.sort,
          order_column: this.orderColumn,
          order_direction: this.orderDirection,
          levels: this.filterLevels,
          categories: this.filterCategories
        }
      })

      this.$emit('count', this.count)
      this.count = 0
      this.$emit('close')
    },
    reset() {
      this.filter = this.oldFilter
      this.sort = this.oldSort
      this.orderColumn = this.oldOrderColumn
      this.orderDirection = this.oldOrderDirection
      this.filterLevels = [...this.oldLevels]
      this.filterCategories = [...this.oldCategories]
      this.hasNewFilters = false
    }
  }
}
</script>
