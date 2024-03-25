<template>
  <label :for="for" class="text-sm text-gray-700">{{ text }}</label>
</template>

<script>
export default {
  props: ['for', 'text']
}
</script>
