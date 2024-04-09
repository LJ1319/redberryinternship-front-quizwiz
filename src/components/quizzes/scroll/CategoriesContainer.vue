<template>
  <scroll-button direction="left" v-on:scroll="scroll('left')" />

  <div
    ref="container"
    class="flex h-12 w-full items-center gap-5 overflow-x-scroll scroll-smooth border-b border-gray-300/40 no-scrollbar"
  >
    <quiz-category v-for="index in 50" :key="index" name="All Quizzes" type="scroll" />
  </div>

  <scroll-button direction="right" v-on:scroll="scroll('right')" />
</template>

<script>
import ScrollButton from '@/components/quizzes/scroll/ScrollButton.vue'
import QuizCategory from '@/components/quizzes/filtering-sorting/QuizCategory.vue'

import { removeBodyScroll } from '@/utils/helpers.js'

export default {
  components: {
    ScrollButton,
    QuizCategory
  },
  data() {
    return {
      categoryIsSelected: false,
      filterIsOpen: false
    }
  },
  updated() {
    removeBodyScroll(this.filterIsOpen)
  },
  methods: {
    scroll(direction) {
      if (direction === 'left') {
        this.$refs.container.scrollLeft -= 80
      }

      if (direction === 'right') {
        this.$refs.container.scrollLeft += 80
      }
    }
  }
}
</script>
