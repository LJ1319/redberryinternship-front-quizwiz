<template>
  <div class="lg:min-w-2/3 lg:flex-1 lg:rounded-xl lg:border lg:p-4">
    <div class="flex flex-col gap-10 border-b py-6 text-sm font-semibold lg:gap-4 lg:pt-0">
      <span class="hidden text-purple lg:block">Filter by</span>

      <div class="flex items-center gap-4">
        <label for="quizzes">My Quizzes</label>
        <filter-checkbox />
      </div>

      <div class="flex items-center gap-4">
        <label for="completed">Not completed</label>
        <filter-checkbox />
      </div>
    </div>

    <div class="flex flex-col gap-4 border-b py-6 text-sm lg:py-4">
      <span class="font-semibold">Levels</span>

      <div class="flex flex-wrap gap-2 font-medium lg:flex-nowrap">
        <quiz-level name="Starter" />
        <quiz-level name="Beginner" />
        <quiz-level name="Middle" />
        <quiz-level name="High" />
        <quiz-level name="Very high" />
        <quiz-level name="Dangerously high" />
      </div>
    </div>

    <div class="flex flex-col gap-4 py-6">
      <span class="text-sm font-semibold">Categories</span>

      <div class="flex max-h-60 flex-wrap items-start gap-2 overflow-scroll">
        <quiz-category
          v-for="index in 100"
          :key="index"
          :name="index % 2 === 0 ? 'Music' : 'Geography'"
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
  }
}
</script>
