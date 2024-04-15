<template>
  <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
    <quiz-card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
  </div>
</template>

<script>
import QuizCard from '@/components/quizzes/QuizCard.vue'

export default {
  components: { QuizCard },
  props: ['quizzes']
}
</script>
