<template>
  <div class="lg:w-2/3 lg:flex-1 lg:rounded-xl lg:border lg:p-4">
    <div class="flex flex-col gap-10 border-b py-6 text-sm font-semibold lg:gap-4 lg:pt-0">
      <span class="hidden text-purple lg:block">Filter by</span>

      <div class="flex items-center gap-4">
        <label for="quizzes">My Quizzes</label>

        <div class="relative h-5 w-5">
          <input
            type="checkbox"
            name="quizzes"
            id="quizzes"
            :value="true"
            class="lg:checked:border-gray-0 peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-violet-500 checked:bg-purple-50 focus:border-violet-500 focus:outline-none lg:h-4 lg:w-4 lg:rounded lg:checked:border-black lg:checked:bg-black lg:focus:border-black"
          />

          <icon-check
            color="#7F56D9"
            class="pointer-events-none absolute top-1.5 mx-1 hidden peer-checked:block lg:peer-checked:hidden"
          />

          <icon-check
            color="#FFFFFF"
            class="pointer-events-none absolute top-1 mx-0.5 hidden peer-checked:hidden lg:peer-checked:block"
          />
        </div>
      </div>

      <div class="flex items-center gap-4">
        <label for="completed">Not completed</label>

        <div class="relative flex h-5 w-5">
          <input
            type="checkbox"
            name="completed"
            id="completed"
            class="lg:checked:border-gray-0 peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-violet-500 checked:bg-purple-50 focus:border-violet-500 focus:outline-none lg:h-4 lg:w-4 lg:rounded lg:checked:border-black lg:checked:bg-black lg:focus:border-black"
          />

          <icon-check
            color="#7F56D9"
            class="pointer-events-none absolute top-1.5 mx-1 hidden peer-checked:block lg:peer-checked:hidden"
          />

          <icon-check
            color="#FFFFFF"
            class="pointer-events-none absolute top-1 mx-0.5 hidden peer-checked:hidden lg:peer-checked:block"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4 border-b py-6 text-sm lg:py-4">
      <span class="font-semibold">Levels</span>

      <div class="flex flex-wrap gap-2 font-medium lg:flex-nowrap">
        <button
          class="flex h-10 min-w-max items-center justify-center rounded-2xl bg-[#F0F9FF] px-5 py-2.5 text-[#026AA2] focus:outline-none lg:h-7 lg:px-3"
        >
          Starter
        </button>

        <button
          class="flex h-10 min-w-max items-center justify-center rounded-2xl bg-[#F0F9FF] px-5 py-2.5 text-[#026AA2] lg:h-7 lg:px-3"
        >
          Beginner
        </button>

        <button
          class="flex h-10 min-w-max items-center justify-center rounded-2xl bg-[#F0F9FF] px-5 py-2.5 text-[#026AA2] lg:h-7 lg:px-3"
        >
          Middle
        </button>

        <button
          class="flex h-10 min-w-max items-center justify-center rounded-2xl bg-[#F0F9FF] px-5 py-2.5 text-[#026AA2] lg:h-7 lg:px-3"
        >
          High
        </button>
        <button
          class="flex h-10 min-w-max items-center justify-center rounded-2xl bg-[#F0F9FF] px-5 py-2.5 text-[#026AA2] lg:h-7 lg:px-3"
        >
          Very high
        </button>

        <button
          class="flex h-10 min-w-max items-center justify-center rounded-2xl bg-[#F0F9FF] px-5 py-2.5 text-[#026AA2] lg:h-7 lg:px-3"
        >
          Dangerously high
        </button>
      </div>
    </div>

    <div class="flex flex-col gap-4 py-6 text-sm font-semibold">
      <span>Categories</span>

      <div class="flex flex-wrap items-start gap-2">
        <button
          v-on:click="toggleCategoryIsSelected"
          :class="categoryIsSelected && 'bg-black text-white'"
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Geography
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          History
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Art
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Math
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Music
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Television
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          History
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Art
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Math
        </button>
        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Music
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Television
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          History
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Art
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Math
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Music
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Television
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          History
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Art
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Math
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Music
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Television
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          History
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Art
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Math
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Music
        </button>

        <button
          class="flex h-9 min-w-max items-center justify-center rounded-3xl px-3 py-2 text-gray-600"
        >
          Television
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import IconCheck from '@/components/icons/IconCheck.vue'

export default {
  components: {
    IconCheck
  },
  data() {
    return {
      categoryIsSelected: false
    }
  },
  methods: {
    toggleCategoryIsSelected() {
      this.categoryIsSelected = !this.categoryIsSelected
    }
  }
}
</script>
