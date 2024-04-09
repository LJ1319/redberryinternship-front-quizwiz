<template>
  <div class="flex h-full w-full items-center gap-2">
    <search-form-button />

    <input
      ref="input"
      type="text"
      name="search"
      id="search"
      placeholder="Search"
      class="text-inter h-full w-full bg-inherit text-sm focus:outline-none"
    />
  </div>
</template>

<script>
import SearchFormButton from '@/components/base/search-form/SearchFormButton.vue'

export default {
  components: {
    SearchFormButton
  },
  mounted() {
    this.$refs.input.focus()
  }
}
</script>
