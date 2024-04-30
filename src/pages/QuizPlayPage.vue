<template>
  <div v-if="isLoading" class="flex h-screen w-screen items-center justify-center">
    <page-backdrop class="bg-white" />

    <icon-spinner-large class="z-50 animate-spin" />
  </div>

  <form v-else v-on:submit.prevent="handleSubmit">
    <quiz-header :quiz="quiz" :points="points" :countdown="countdown" />

    <main-content class="flex gap-10 font-inter lg:py-20">
      <ul class="flex flex-col gap-14 py-6 lg:w-2/3 lg:py-0">
        <li
          v-for="(question, index) in quiz.questions"
          :key="question.id"
          class="flex flex-col gap-5"
        >
          <div class="flex items-center gap-2.5 text-sm font-semibold">
            <span class="text-purple">Question - {{ index + 1 }}</span>
            <div class="h-4 w-px bg-gray-300"></div>
            <span class="text-pink">Points - {{ question.points }} </span>
          </div>

          <p class="text-lg font-bold">{{ question.body }}</p>

          <div
            class="flex h-9 items-center gap-2.5 rounded border border-emerald-600 bg-slate-50 px-5 lg:w-max"
          >
            <icon-info />
            <span class="font-medium text-emerald-700">
              You can select {{ question.correct_answers }} options from answers
            </span>
          </div>

          <ul class="flex flex-col gap-2">
            <li v-for="answer in question.answers" :key="answer.id">
              <label
                class="flex h-14 cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-600 has-[:checked]:border-purple/40 has-[:checked]:bg-violet-50 has-[:checked]:text-purple"
              >
                <span>{{ answer.body }}</span>

                <span class="relative flex items-center justify-center">
                  <input
                    v-model="checkedAnswers[question.id]"
                    v-on:change="handleChange(question.id, question.correct_answers)"
                    type="checkbox"
                    :id="answer.id"
                    :value="answer.id"
                    class="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 checked:border-0 checked:bg-purple focus:outline-none"
                  />

                  <icon-check
                    class="pointer-events-none absolute hidden stroke-white peer-checked:block"
                  />
                </span>
              </label>
            </li>
          </ul>
        </li>
      </ul>

      <div class="sticky top-60 hidden h-64 w-1/3 rounded-lg p-10 shadow-c3xl lg:block">
        <div class="absolute -top-6 left-0 flex w-full items-center justify-center">
          <div class="flex h-12 w-32 items-center justify-center rounded-lg shadow-cmd">
            <span class="font-bold text-gray-500">Time</span>
          </div>
        </div>

        <div class="flex items-center justify-center border-b border-gray-300 py-4">
          <span class="w-40 text-6xl text-gray-600">
            {{ countdown }}
          </span>
        </div>

        <div class="py-8">
          <button class="h-12 w-full rounded-clg bg-purple text-lg font-semibold text-white">
            Submit
          </button>
        </div>
      </div>
    </main-content>
  </form>

  <quiz-modal
    v-if="isSubmitted && !isLoading"
    :name="quiz.name"
    :level="quiz.level.name"
    :level-color="quiz.level.color"
    :total-time="totalTime"
    :mistakes="mistakes"
    :score="score"
  />
</template>

<script>
import PageBackdrop from '@/components/shared/PageBackdrop.vue'
import IconSpinnerLarge from '@/components/icons/IconSpinnerLarge.vue'
import QuizHeader from '@/components/quizzes/QuizHeader.vue'
import MainContent from '@/components/base/MainContent.vue'
import IconInfo from '@/components/icons/IconInfo.vue'
import IconCheck from '@/components/icons/IconCheck.vue'
import QuizModal from '@/components/quizzes/QuizModal.vue'

import toast from '@/mixins/toast.js'

import { GetQuiz, SubmitQuiz } from '@/services/api/resources.js'

export default {
  components: {
    PageBackdrop,
    IconSpinnerLarge,
    QuizHeader,
    MainContent,
    IconInfo,
    IconCheck,
    QuizModal
  },
  inject: ['user'],
  mixins: [toast],
  data() {
    return {
      id: null,
      quiz: {},
      points: 0,
      duration: undefined,
      countdown: '00:00',
      time: 0,
      totalTime: '00:00',
      checkedAnswers: {},
      isSubmitted: false,
      mistakes: undefined,
      score: undefined,
      isLoading: false
    }
  },
  mounted() {
    this.id = this.$route.params.id

    this.getQuiz()
  },
  watch: {
    duration: {
      handler(val) {
        if (!this.isSubmitted) {
          const timer = this.updateTimer(this.duration)
          this.countdown = `${timer.minutes}:${timer.seconds}`

          if (val > 0) {
            setTimeout(() => {
              this.duration--
              this.time++
            }, 1000)
          }

          if (val === 0) {
            this.handleSubmit()
          }
        }
      },
      immediate: true
    }
  },
  methods: {
    async getQuiz() {
      try {
        this.isLoading = true

        const { data } = await GetQuiz(this.id)
        this.quiz = data

        const canPlay = !this.quiz.users.some((user) => user.id === this.user.id)
        if (!canPlay) {
          return this.$router.replace({ name: 'quiz-detail', params: { id: this.id } })
        }

        this.duration = this.quiz.duration * 60

        this.points = this.quiz.questions.reduce((acc, curr) => acc + curr.points, 0)
        this.quiz.questions.forEach((question) => (this.checkedAnswers[question.id] = []))

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
    updateTimer(timer) {
      let minutes = Math.floor(timer / 60)
      let seconds = timer % 60

      minutes = minutes < 10 ? '0' + minutes : minutes
      seconds = seconds < 10 ? '0' + seconds : seconds

      return { minutes, seconds }
    },
    handleChange(questionId, limit) {
      if (this.checkedAnswers[questionId].length > limit) {
        this.checkedAnswers[questionId].splice(-2, 1)
      }

      this.checkedAnswers[questionId].sort()
    },
    async handleSubmit() {
      try {
        this.isLoading = true

        const { data } = await SubmitQuiz(this.quiz.id, {
          checkedAnswers: this.checkedAnswers,
          time: this.time
        })

        this.mistakes = data.results.mistakes
        this.score = data.results.score

        const timer = this.updateTimer(this.time)
        this.totalTime = `${timer.minutes}:${timer.seconds}`

        this.isSubmitted = true
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
    }
  }
}
</script>
