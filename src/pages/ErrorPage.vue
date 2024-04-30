<template>
  <div class="flex flex-col items-center justify-center gap-8 px-14 py-10 lg:gap-11">
    <div class="flex flex-col items-center justify-center gap-4">
      <h1 class="text-center font-raleway text-c4xl font-black lg:text-6xl">
        {{ title }}
      </h1>
      <h2 class="font-inter text-lg font-bold">Error {{ status }}</h2>
    </div>

    <img :src="imageUrl" alt="Error Image" class="lg:w-1/3" />

    <router-link to="/quizzes" class="flex items-center gap-2.5">
      <icon-arrow-back />
      <span class="font-inter text-lg text-purple">Go Home</span>
    </router-link>
  </div>
</template>

<script>
import IconArrowBack from '@/components/icons/IconArrowBack.vue'

export default {
  components: {
    IconArrowBack
  },
  data() {
    return {
      status: this.$route.query.status,
      title: '',
      imageUrl: ''
    }
  },
  mounted() {
    if (this.status === '404') {
      this.title = 'Oops!'
      this.imageUrl = '/src/assets/images/Error404.svg'
    }

    if (this.status === '500') {
      this.title = 'Internal server error!'
      this.imageUrl = '/src/assets/images/Error500.svg'
    }

    this.$router.replace({ query: undefined })
  }
}
</script>
