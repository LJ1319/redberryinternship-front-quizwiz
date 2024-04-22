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
      filter: {
        oldValue: undefined,
        newValue: undefined
      },
      sort: {
        old: {
          value: undefined,
          orderColumn: undefined,
          orderDirection: undefined
        },
        new: {
          value: undefined,
          orderColumn: undefined,
          orderDirection: undefined
        }
      },
      filterLevels: {
        oldValues: [],
        newValues: []
      },
      filterCategories: {
        oldValues: [],
        newValues: []
      },
      count: 0
    }
  },
  computed: {
    hasNewFilters() {
      return (
        this.filter.oldValue !== this.filter.newValue ||
        this.sort.old.value !== this.sort.new.value ||
        diffArrays(this.filterLevels.oldValues, this.filterLevels.newValues) ||
        diffArrays(this.filterCategories.oldValues, this.filterCategories.newValues) ||
        diffArrays(this.filterLevels.newValues, this.$route.query.levels) ||
        diffArrays(this.filterCategories.newValues, this.$route.query.categories)
      )
    }
  },
  provide() {
    return {
      fFilter: computed(() => this.filter.newValue),
      fSort: computed(() => this.sort.new.value),
      filterLevels: computed(() => this.filterLevels.newValues),
      filterCategories: computed(() => this.filterCategories.newValues),
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
      this.filter.newValue = this.$route.query?.filter

      const filterLevels = this.$route.query.levels
      if (filterLevels) {
        if (!Array.isArray(filterLevels)) {
          this.filterLevels.newValues.push(filterLevels)
        } else {
          this.filterLevels.newValues = [...filterLevels]
        }
      } else {
        this.filterLevels.newValues = []
      }

      const filterCategories = this.$route.query.categories
      if (filterCategories) {
        if (!Array.isArray(filterCategories)) {
          this.filterCategories.newValues.push(filterCategories)
        } else {
          this.filterCategories.newValues = [...filterCategories]
        }
      } else {
        this.filterCategories.newValues = []
      }

      this.sort.new.value = this.$route.query?.sort
      this.sort.old.value = this.sort.new.value
      this.sort.new.orderColumn = this.$route.query?.order_column
      this.sort.old.orderColumn = this.sort.new.orderColumn
      this.sort.new.orderDirection = this.$route.query?.order_direction
      this.sort.old.orderDirection = this.sort.new.orderDirection

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
      this.filter.newValue = value
    },
    changeLevels(id) {
      if (!this.filterLevels.newValues.includes(id)) {
        this.filterLevels.newValues.push(id)

        this.count++
      } else {
        const el = this.filterLevels.newValues.indexOf(id)
        this.filterLevels.newValues.splice(el, 1)

        this.count--
      }
    },
    changeCategories(id) {
      if (!this.filterCategories.newValues.includes(id)) {
        this.filterCategories.newValues.push(id)

        this.count++
      } else {
        const el = this.filterCategories.newValues.indexOf(id)
        this.filterCategories.newValues.splice(el, 1)

        this.count--
      }
    },
    changeSort(values) {
      this.sort.new.value = values.sort
      this.sort.new.orderColumn = values.orderColumn
      this.sort.new.orderDirection = values.orderDirection
    },
    revert() {
      this.filter.oldValue = this.filter.newValue
      this.sort.old.value = this.sort.new.value
      this.sort.old.orderColumn = this.sort.new.orderColumn
      this.sort.old.orderDirection = this.sort.new.orderDirection
      this.filterLevels.oldValues = [...this.filterLevels.newValues]
      this.filterCategories.oldValues = [...this.filterCategories.newValues]
    },
    confirm() {
      this.$router.replace({
        query: {
          ...this.$route.query,
          filter: this.filter.newValue,
          sort: this.sort.new.value,
          order_column: this.sort.new.orderColumn,
          order_direction: this.sort.new.orderDirection,
          levels: this.filterLevels.newValues,
          categories: this.filterCategories.newValues
        }
      })

      this.$emit('count', this.count)
      this.count = 0
      this.$emit('close')
    },
    reset() {
      this.filter.newValue = this.filter.oldValue
      this.sort.new.value = this.sort.old.value
      this.sort.new.orderColumn = this.sort.old.orderColumn
      this.sort.new.orderDirection = this.sort.old.orderDirection
      this.filterLevels.newValues = [...this.filterLevels.oldValues]
      this.filterCategories.newValues = [...this.filterCategories.oldValues]
      this.hasNewFilters = false
    }
  }
}
</script>
