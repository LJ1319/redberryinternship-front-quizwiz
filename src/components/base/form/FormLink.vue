<template>
  <p class="space-x-1 text-center font-inter lg:text-start lg:text-sm">
    <span class="text-gray-700">{{ text }}</span>
    <span class="font-semibold text-purple">
      <router-link :to="to">{{ action }}</router-link>
    </span>
  </p>
</template>

<script>
export default {
  props: ['text', 'to', 'action']
}
</script>
