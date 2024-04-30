<template>
  <header
    class="sticky top-0 z-40 flex w-full flex-col items-center gap-5 bg-white p-5 shadow-clg lg:gap-2.5 lg:px-24"
  >
    <div
      class="flex w-full items-center justify-between gap-8 border-b border-gray-300 pb-5 lg:border-0 lg:p-0"
    >
      <h1
        class="hidden text-center font-raleway text-[2.5rem] font-bold capitalize lg:block lg:text-start"
      >
        {{ quiz.name }}
      </h1>

      <div class="flex h-16 w-full gap-2.5 lg:hidden">
        <button
          class="w-2/3 shrink rounded-clg bg-purple font-inter text-lg font-semibold text-white"
        >
          Submit
        </button>
        <div
          class="flex w-1/3 flex-1 flex-col rounded-clg border border-gray-300 bg-gray-150 px-4 py-3"
        >
          <span class="font-raleway text-xs font-bold">Timer</span>
          <span class="font-inter text-xl font-semibold text-gray-600">{{ countdown }}</span>
        </div>
      </div>

      <router-link :to="`/quizzes/${quiz.id}`">
        <close-button />
      </router-link>
    </div>

    <div
      class="flex w-full flex-wrap justify-center gap-4 font-inter text-sm font-semibold text-gray-500 lg:flex-nowrap lg:justify-start"
    >
      <h1
        class="w-full text-center font-raleway text-4xl font-bold capitalize text-black lg:hidden lg:text-start"
      >
        {{ quiz.name }}
      </h1>

      <div class="flex gap-4">
        <icon-pin class="h-5 w-5 shrink-0" />

        <span v-if="!allCategoriesShown">Show all categories</span>

        <div v-else class="flex flex-wrap gap-3">
          <div
            v-for="(category, index) in quiz.categories"
            :key="category.id"
            class="flex w-max items-center gap-3"
          >
            <p>{{ category.name }}</p>
            <div
              v-if="index !== quiz.categories.length - 1"
              class="block h-1 w-1 rounded-full bg-gray-300"
            ></div>
          </div>
        </div>

        <button
          v-on:click="toggleCategories"
          type="button"
          class="flex h-5 items-center justify-center"
        >
          <icon-chevron-down v-if="!allCategoriesShown" class="h-3 w-3 shrink-0" />
          <icon-chevron-up v-if="allCategoriesShown" class="h-3 w-3 shrink-0" />
        </button>

        <div class="my-0.5 h-4 w-px shrink-0 bg-gray-300"></div>
      </div>

      <div class="flex h-max shrink-0 items-center gap-4">
        <div class="flex gap-2">
          <icon-hashtag class="h-5 w-5" />
          <span>{{ quiz.questions_count }} Questions</span>
        </div>

        <div class="h-4 w-px bg-gray-300"></div>
      </div>

      <div class="flex h-max shrink-0 items-center gap-4">
        <div class="flex gap-2">
          <icon-diploma class="h-5 w-5" />
          <span>{{ points }} Points</span>
        </div>

        <div class="h-4 w-px bg-gray-300"></div>
      </div>

      <div class="flex h-max shrink-0 items-center gap-4">
        <div class="flex gap-2">
          <icon-rocket class="h-5 w-5" />
          <span class="">{{ quiz.total_users }} Plays</span>
        </div>

        <div class="h-4 w-px bg-gray-300"></div>
      </div>

      <div class="flex h-max shrink-0 items-center gap-4">
        <div class="flex gap-2">
          <icon-time class="h-5 w-5" />
          <span class="lowercase">{{ quiz.duration }} m</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CloseButton from '@/components/base/buttons/CloseButton.vue'
import IconChevronDown from '@/components/icons/IconChevronDown.vue'
import IconChevronUp from '@/components/icons/IconChevronUp.vue'
import IconPin from '@/components/icons/IconPin.vue'
import IconHashtag from '@/components/icons/IconHashtag.vue'
import IconDiploma from '@/components/icons/IconDiploma.vue'
import IconRocket from '@/components/icons/IconRocket.vue'
import IconTime from '@/components/icons/IconTime.vue'

export default {
  components: {
    CloseButton,
    IconPin,
    IconChevronDown,
    IconChevronUp,
    IconHashtag,
    IconDiploma,
    IconRocket,
    IconTime
  },
  props: ['quiz', 'points', 'countdown'],
  data() {
    return {
      allCategoriesShown: false
    }
  },
  methods: {
    toggleCategories() {
      this.allCategoriesShown = !this.allCategoriesShown
    }
  }
}
</script>
