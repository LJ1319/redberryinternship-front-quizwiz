<template>
  <div
    class="fixed left-0 top-0 z-50 h-screen w-full bg-white p-6 lg:relative lg:h-max lg:w-max lg:p-0"
  >
    <form class="mx-auto flex h-11 w-80 justify-between rounded-clg border bg-gray-50 pl-4">
      <search-form-group />

      <div
        class="flex h-full w-11 items-center justify-center rounded-r-[0.625rem] border-l bg-white"
      >
        <close-button v-on:click="close" width="10" height="10" class="h-3 w-3" />
      </div>
    </form>
  </div>
</template>

<script>
import SearchFormGroup from '@/components/base/search-form/SearchFormGroup.vue'
import CloseButton from '@/components/base/buttons/CloseButton.vue'

export default {
  components: {
    SearchFormGroup,
    CloseButton
  },
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
