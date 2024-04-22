<template>
  <label :for="value" class="flex items-center gap-4">
    <span>{{ text }}</span>

    <span class="relative flex items-center justify-center">
      <input
        v-model="filter"
        v-on:change="change"
        type="radio"
        name="filter"
        :id="value"
        :value="value"
        class="lg:checked:border-gray-0 peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-violet-500 checked:bg-purple-50 focus:border-violet-500 focus:outline-none lg:h-4 lg:w-4 lg:rounded lg:checked:border-black lg:checked:bg-black lg:focus:border-black"
      />

      <icon-check
        class="pointer-events-none absolute hidden peer-checked:block peer-checked:stroke-violet-500 lg:peer-checked:stroke-white"
      />
    </span>
  </label>

  <button v-show="filter === value" v-on:click="uncheck" class="text-xs text-gray-600">
    uncheck
  </button>
</template>

<script>
import IconCheck from '@/components/icons/IconCheck.vue'

export default {
  components: {
    IconCheck
  },
  inject: ['changeFilter', 'fFilter'],
  props: ['text', 'value'],
  data() {
    return {
      filter: undefined
    }
  },
  watch: {
    '$route.query.filter'(val) {
      this.filter = val
    },
    fFilter(val) {
      this.filter = val
    }
  },
  mounted() {
    this.filter = this.$route.query?.filter
  },
  methods: {
    change() {
      this.changeFilter(this.filter)
    },
    uncheck() {
      this.filter = undefined
      this.changeFilter(this.filter)
    }
  }
}
</script>
