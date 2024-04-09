<template>
  <button class="flex items-center gap-4">
    <span class="flex w-4 items-center justify-center">
      <slot />
    </span>
    <span>{{ name }}</span>
  </button>
</template>

<script>
export default {
  props: ['name']
}
</script>
