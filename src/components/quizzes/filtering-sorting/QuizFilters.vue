<template>
  <div class="lg:min-w-2/3 px-4 lg:flex-1 lg:rounded-xl lg:border lg:p-4">
    <div
      v-if="user.isAuth"
      class="flex flex-col gap-10 border-b py-6 text-sm font-semibold lg:gap-4 lg:pt-0"
    >
      <span class="hidden text-purple lg:block">Filter by</span>

      <div class="flex items-center gap-4">
        <label for="quizzes">My Quizzes</label>
        <filter-checkbox name="quizzes" />
      </div>

      <div class="flex items-center gap-4">
        <label for="completed">Not completed</label>
        <filter-checkbox name="completed" />
      </div>
    </div>

    <div class="flex flex-col gap-4 border-b py-6 text-sm lg:py-4">
      <span class="font-semibold">Levels</span>

      <div class="flex flex-wrap gap-2 font-medium lg:flex-nowrap">
        <quiz-level
          v-for="level in levels"
          :key="level.id"
          :name="level.name"
          :bg_color="level.bg_color"
          :color="level.color"
        />
      </div>
    </div>

    <div class="flex flex-col gap-4 py-6">
      <span class="text-sm font-semibold">Categories</span>

      <div class="flex max-h-60 flex-wrap items-start gap-2 overflow-scroll">
        <quiz-category
          v-for="category in categories"
          :key="category.id"
          :id="category.id"
          :name="category.name"
          class="flex h-9 items-center justify-center px-3 py-2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FilterCheckbox from '@/components/quizzes/filtering-sorting/FilterCheckbox.vue'
import QuizLevel from '@/components/quizzes/filtering-sorting/QuizLevel.vue'
import QuizCategory from '@/components/quizzes/filtering-sorting/QuizCategory.vue'

export default {
  components: {
    FilterCheckbox,
    QuizLevel,
    QuizCategory
  },
  inject: ['user', 'levels', 'categories']
}
</script>
