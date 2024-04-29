<template>
  <page-backdrop />

  <div
    class="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center px-4 lg:px-0"
  >
    <div class="w-[25rem] rounded-xl bg-white p-6 font-inter shadow-c4xl">
      <div class="flex justify-end">
        <router-link to="/quizzes">
          <close-button />
        </router-link>
      </div>

      <div class="mb-5 flex items-center justify-center">
        <div class="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
          <div class="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100">
            <icon-check-circle />
          </div>
        </div>
      </div>

      <div class="mb-8 flex flex-col items-center justify-center gap-2">
        <span class="text-lg font-semibold text-gray-900">Quiz Finished</span>
        <span class="text-sm text-gray-600">your results</span>
      </div>

      <div class="flex flex-col text-sm font-medium">
        <div class="flex flex-col gap-2 border-b border-gray-300 pb-3">
          <span class="text-gray-700">Quiz Name</span>
          <span>{{ name }}</span>
        </div>

        <div class="flex flex-col gap-2 border-b border-gray-300 py-3">
          <span class="text-gray-700">Quiz Level</span>
          <span :style="{ color: levelColor }">{{ level }}</span>
        </div>

        <div class="flex flex-col gap-2 border-b border-gray-300 py-3">
          <span class="text-gray-700">Time</span>
          <span>{{ totalTime }}</span>
        </div>

        <div class="flex flex-col gap-2 border-b border-gray-300 py-3">
          <span class="text-gray-700">Mistakes</span>
          <span class="text-red-500">{{ mistakes }}</span>
        </div>

        <div class="flex flex-col gap-2 pt-3">
          <span class="text-gray-700">Right Answers</span>
          <span class="text-emerald-500">{{ score }}</span>
        </div>
      </div>

      <div class="mt-6 w-full">
        <router-link
          to="/quizzes"
          class="flex h-12 w-full items-center justify-center rounded-clg bg-purple text-center text-lg font-semibold text-white"
        >
          Back to tome
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PageBackdrop from '@/components/shared/PageBackdrop.vue'
import CloseButton from '@/components/base/buttons/CloseButton.vue'
import IconCheckCircle from '@/components/icons/IconCheckCircle.vue'

import { removeBodyScroll } from '@/utils/helpers.js'

export default {
  props: ['name', 'level', 'levelColor', 'totalTime', 'mistakes', 'score'],
  components: {
    PageBackdrop,
    CloseButton,
    IconCheckCircle
  },
  mounted() {
    removeBodyScroll(true, 1441)
  }
}
</script>
