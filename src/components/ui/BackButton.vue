<template>
  <button
    v-on:click="$router.go(-1)"
    class="mx-0 flex w-max items-center justify-center gap-2 lg:mx-16"
  >
    <span>
      <icon-back />
    </span>
    <span class="text-sm font-medium text-gray-500">Back</span>
  </button>
</template>

<script>
import IconBack from '@/components/icons/IconBack.vue'

export default {
  components: {
    IconBack
  }
}
</script>
