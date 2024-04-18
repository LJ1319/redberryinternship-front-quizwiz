<template>
  <div>
    <icon-search />
    <slot />
  </div>
</template>

<script>
import IconSearch from '@/components/icons/IconSearch.vue'

export default {
  components: {
    IconSearch
  }
}
</script>
