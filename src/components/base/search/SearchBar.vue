<template>
  <div
    class="absolute left-0 flex w-full items-center justify-center bg-white lg:static lg:h-max lg:w-max lg:p-0"
  >
    <div class="mx-auto flex h-11 w-96 justify-between rounded-clg border bg-gray-50 pl-4 lg:w-80">
      <div class="flex items-center gap-2">
        <search-group />

        <input
          ref="input"
          v-model="searchText"
          v-on:input="handleInput"
          v-on:blur="close"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          class="h-full w-full bg-inherit font-inter text-sm focus:outline-none"
        />
      </div>

      <div
        class="flex h-full w-11 items-center justify-center rounded-r-[0.625rem] border-l bg-white"
      >
        <close-button v-on:click="close" width="10" height="10" class="h-3 w-3" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchGroup from '@/components/base/search/SearchGroup.vue'
import CloseButton from '@/components/base/buttons/CloseButton.vue'

export default {
  components: {
    SearchGroup,
    CloseButton
  },
  emits: ['close'],
  data() {
    return {
      searchText: ''
    }
  },
  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    close() {
      this.$emit('close')
    },
    handleInput() {
      let timer
      clearTimeout(timer)

      timer = setTimeout(() => {
        const search = this.searchText
        this.$router.replace({ query: { ...this.$route.query, search: search } })
      }, 500)
    }
  }
}
</script>
