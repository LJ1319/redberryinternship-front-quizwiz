<template>
  <div class="hidden h-screen w-1/2 lg:block">
    <img :src="src" alt="" class="h-full w-full" />

    <router-link to="/" class="absolute left-10 top-10 inline-block">
      <img src="@/assets/logo.svg" alt="QuizWiz Logo" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['src']
}
</script>
