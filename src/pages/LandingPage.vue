<template>
  <div class="relative overflow-hidden lg:h-screen">
    <div class="p-12 lg:px-24 lg:pb-28 lg:pt-0">
      <img src="../assets/images/HeroTitle.svg" alt="QuizWiz Logo" class="lg:h-64" />
      <h1 class="w-max font-raleway text-xl font-semibold text-zinc-500 lg:text-3xl">
        Play with us, Explore with us
      </h1>
    </div>

    <div class="absolute right-0 top-14 hidden lg:block">
      <img src="../assets/images/HeroImageLarge.svg" alt="Hero Illustration" />
    </div>

    <div
      class="bg-no-repeat lg:hidden"
      style="background-image: url('src/assets/images/HeroImage.svg')"
    >
      <p class="px-16 pb-12 pt-56 font-raleway text-5xl font-bold text-cyan-50">
        Our mission <br />
        is to <br />
        entertain <br />
        & educate.
      </p>
    </div>

    <div class="flex h-72 items-center bg-orange px-12 lg:h-64 lg:px-24">
      <info-link :number="quizCount" text="Quiz games" />
    </div>

    <div class="flex h-72 items-center bg-purple px-12 lg:h-60 lg:px-24">
      <info-link :number="genreCount" text="Different genres" />
    </div>
  </div>
</template>

<script>
import InfoLink from '@/components/landing/InfoLink.vue'
import { GetCategories, GetQuizzes } from '@/services/api/resources.js'

export default {
  components: {
    InfoLink
  },
  data() {
    return {
      quizCount: 0,
      genreCount: 0
    }
  },
  mounted() {
    this.getQuizzes()
    this.getCategories()
  },
  methods: {
    async getQuizzes() {
      try {
        const { data } = await GetQuizzes(this.currentPage)
        this.quizCount = data.total ?? 200
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
    async getCategories() {
      try {
        const { data } = await GetCategories()
        this.genreCount = data.length ?? 25
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
