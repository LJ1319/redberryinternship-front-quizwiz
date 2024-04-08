<template>
  <scroll-button direction="left" v-on:scroll="scroll('left')" />

  <div
    ref="container"
    class="flex h-12 w-full items-center gap-5 overflow-x-scroll scroll-smooth border-b border-gray-300/40 no-scrollbar"
  >
    <quiz-category
      name="All Quizzes"
      :class="categoryIsSelected && 'border-b-2 border-black pt-0.5 text-black'"
      v-on:click="toggleSelected"
    />
    <quiz-category name="Geography" />
    <quiz-category name="Music" />
    <quiz-category name="Movies" />
    <quiz-category name="Television" />
    <quiz-category name="Just for fun" />
    <quiz-category name="Personality" />
    <quiz-category name="Sports" />
    <quiz-category name="History" />
    <quiz-category name="Language" />
    <quiz-category name="Literature" />
    <quiz-category name="Philosophy" />
    <quiz-category name="Math" />

    <quiz-category name="All Quizzes" />
    <quiz-category name="Geography" />
    <quiz-category name="Music" />
    <quiz-category name="Movies" />
    <quiz-category name="Television" />
    <quiz-category name="Just for fun" />
    <quiz-category name="Personality" />
    <quiz-category name="Sports" />
    <quiz-category name="History" />
    <quiz-category name="Language" />
    <quiz-category name="Literature" />
    <quiz-category name="Philosophy" />
    <quiz-category name="Math" />
  </div>

  <scroll-button direction="right" v-on:scroll="scroll('right')" />
</template>

<script>
import ScrollButton from '@/components/quizzes/ScrollButton.vue'
import QuizCategory from '@/components/quizzes/QuizCategory.vue'

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
    },
    toggleSelected() {
      this.categoryIsSelected = !this.categoryIsSelected
    }
  }
}
</script>
