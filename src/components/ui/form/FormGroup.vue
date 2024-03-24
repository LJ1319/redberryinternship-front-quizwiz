<template>
  <div class="font-inter" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  props: ['classes']
}
</script>
