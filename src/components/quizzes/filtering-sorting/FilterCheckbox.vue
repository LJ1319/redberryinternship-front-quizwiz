<template>
  <div class="relative flex h-5 w-5 items-center justify-center gap-4">
    <input
      type="checkbox"
      :name="name"
      :id="name"
      :value="true"
      class="lg:checked:border-gray-0 peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-violet-500 checked:bg-purple-50 focus:border-violet-500 focus:outline-none lg:h-4 lg:w-4 lg:rounded lg:checked:border-black lg:checked:bg-black lg:focus:border-black"
    />

    <icon-check
      class="pointer-events-none absolute hidden peer-checked:block peer-checked:stroke-violet-500 lg:peer-checked:stroke-white"
    />
  </div>
</template>

<script>
import IconCheck from '@/components/icons/IconCheck.vue'

export default {
  components: {
    IconCheck
  },
  props: ['text', 'name']
}
</script>
