<template>
  <div v-if="isLoading" class="mt-6 flex items-center justify-center">
    <icon-spinner class="animate-spin" />
  </div>

  <main-content v-else class="mb-20">
    <router-link to="/quizzes" class="mb-6 flex w-max items-center justify-center gap-2">
      <span>
        <icon-back />
      </span>
      <span class="text-sm font-medium text-gray-500">Back</span>
    </router-link>

    <div class="flex gap-10">
      <div class="w-full lg:w-2/3">
        <div class="border-gray-300 pb-12 lg:flex lg:gap-8 lg:border-b">
          <div class="flex flex-col gap-4 font-inter capitalize lg:w-3/5">
            <div class="order-1 flex flex-wrap gap-3 text-sm lg:order-2">
              <div
                v-for="(category, index) in quiz.categories"
                :key="category.id"
                class="flex items-center gap-3"
              >
                <p class="font-semibold text-purple">
                  {{ category.name }}
                </p>
                <div
                  v-if="index !== quiz.categories.length - 1"
                  class="block h-1 w-1 rounded-full bg-gray-300"
                ></div>
              </div>
            </div>

            <h1 class="text-c4xl order-2 font-raleway font-bold text-gray-900 lg:order-1">
              {{ quiz.name }}
            </h1>

            <p class="order-3 text-sm font-bold text-gray-500">{{ quiz.description }} 🧠</p>

            <div class="order-last lg:hidden">
              <img
                :src="quiz.image && `${storageUrl}/${quiz.image}`"
                alt="Quiz Image"
                class="rounded-[1.25rem]"
              />
            </div>

            <div
              class="order-last mt-4 flex flex-col gap-0 font-inter text-sm font-semibold text-gray-500 lg:flex-row lg:gap-3"
            >
              <div class="flex items-center gap-2 border-b border-gray-300 py-3 lg:border-0 lg:p-0">
                <div class="flex gap-2">
                  <icon-hashtag class="h-5 w-5" />
                  <span>{{ quiz.questions_count }} Questions</span>
                </div>

                <div class="hidden h-4 w-px bg-gray-300 lg:block"></div>
              </div>

              <div class="flex items-center gap-2 border-b border-gray-300 py-3 lg:border-0 lg:p-0">
                <div class="flex gap-2">
                  <icon-diploma class="h-5 w-5" />
                  <span>{{ points }} Points</span>
                </div>

                <div class="hidden h-4 w-px bg-gray-300 lg:block"></div>
              </div>

              <div class="flex items-center gap-2 border-b border-gray-300 py-3 lg:border-0 lg:p-0">
                <div class="flex gap-2">
                  <icon-rocket class="h-5 w-5" />
                  <span>{{ quiz.total_users }} Plays</span>
                </div>

                <div class="hidden h-4 w-px bg-gray-300 lg:block"></div>
              </div>

              <div class="flex items-center gap-2 py-3 lg:border-0 lg:p-0">
                <div class="flex gap-2">
                  <icon-time class="h-5 w-5" />
                  <span class="lowercase">{{ quiz.duration }} m</span>
                </div>

                <div class="hidden h-4 w-px bg-gray-300 lg:block"></div>
              </div>
            </div>

            <router-link
              :to="`/quizzes/${id}/play`"
              v-if="canPlay"
              class="order-last mt-10 flex h-14 w-full items-center justify-center rounded-clg bg-purple font-inter text-lg font-semibold text-white lg:h-12 lg:w-80 lg:text-base"
            >
              Start Quiz
            </router-link>
          </div>

          <div class="hidden w-2/5 shrink-0 lg:block">
            <img
              :src="quiz.image && `${storageUrl}/${quiz.image}`"
              alt="Quiz Image"
              class="rounded-[1.25rem]"
            />
          </div>
        </div>

        <div class="border-t border-gray-300 py-8 font-inter lg:border-t-0">
          <span class="text-lg font-bold">Instructions</span>
          <p class="mt-3">{{ quiz.instructions }}</p>
        </div>
      </div>

      <div
        :class="similarQuizzes.length > 0 ? 'border-0' : 'rounded-xl border border-gray-300'"
        class="hidden flex-col gap-8 lg:flex lg:w-1/3"
      >
        <quiz-card
          v-for="quiz in similarQuizzes"
          :key="quiz.id"
          :quiz="quiz"
          class="rounded-xl border border-gray-300 bg-stone-50 shadow-none"
        />

        <p
          v-if="similarQuizzes.length === 0"
          class="p-2 text-center font-raleway text-lg font-bold text-purple"
        >
          No similar quizzes found.
        </p>
      </div>
    </div>
  </main-content>
</template>

<script>
import IconSpinner from '@/components/icons/IconSpinner.vue'
import MainContent from '@/components/base/MainContent.vue'
import IconBack from '@/components/icons/IconBack.vue'
import IconHashtag from '@/components/icons/IconHashtag.vue'
import IconDiploma from '@/components/icons/IconDiploma.vue'
import IconRocket from '@/components/icons/IconRocket.vue'
import IconTime from '@/components/icons/IconTime.vue'

import QuizCard from '@/components/quizzes/QuizCard.vue'
import toast from '@/mixins/toast.js'

import { GetQuiz, GetSimilarQuizzes } from '@/services/api/resources.js'

export default {
  components: {
    IconSpinner,
    MainContent,
    IconBack,
    IconHashtag,
    IconDiploma,
    IconRocket,
    IconTime,
    QuizCard
  },
  inject: ['user'],
  mixins: [toast],
  data() {
    return {
      id: null,
      quiz: {},
      points: 0,
      storageUrl: `${import.meta.env.VITE_API_URL}/storage`,
      canPlay: true,
      similarQuizzes: [],
      isLoading: false
    }
  },
  mounted() {
    this.id = this.$route.params.id

    this.getQuiz()
  },
  watch: {
    '$route.params.id'() {
      this.id = this.$route.params.id

      this.getQuiz()
    }
  },
  methods: {
    async getQuiz() {
      try {
        this.isLoading = true

        const { data } = await GetQuiz(this.id)
        await this.getSimilarQuizzes()

        this.quiz = data
        this.points = this.quiz.questions.reduce((acc, curr) => acc + curr.points, 0)
        this.canPlay = !this.quiz.users.some((user) => user.id === this.user.id)

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
    async getSimilarQuizzes() {
      try {
        const { data } = await GetSimilarQuizzes(this.id)
        this.similarQuizzes = data
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
