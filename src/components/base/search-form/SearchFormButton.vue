<template>
  <button>
    <icon-search />
    <slot />
  </button>
</template>

<script>
import IconSearch from '@/components/icons/IconSearch.vue'

export default {
  components: {
    IconSearch
  }
}
</script>
