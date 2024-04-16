<template>
  <router-link to="/quizzes" class="group w-full font-raleway font-black text-white lg:w-max">
    <span class="text-8xl">{{ number }}+</span>
    <br />
    <span class="flex items-baseline justify-between gap-4 lg:items-baseline">
      <span class="text-5xl group-hover:underline">{{ text }}</span>
      <icon-arrow-link class="shrink-0 stroke-white" />
    </span>
  </router-link>
</template>

<script>
import IconArrowLink from '@/components/icons/IconArrowLink.vue'

export default {
  components: {
    IconArrowLink
  },
  props: ['number', 'text']
}
</script>
