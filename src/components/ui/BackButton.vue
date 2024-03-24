<template>
  <button
    v-on:click="$router.go(-1)"
    class="mx-16 my-10 hidden w-max items-center justify-center gap-2 lg:flex"
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
