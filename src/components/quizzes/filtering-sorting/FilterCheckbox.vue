<template>
  <div class="relative flex h-5 w-5 items-center">
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
</template>
<script>
import IconCheck from '@/components/icons/IconCheck.vue'

export default {
  components: {
    IconCheck
  }
}
</script>
