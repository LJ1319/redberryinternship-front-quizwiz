<template>
  <div class="flex min-h-screen flex-col">
    <router-view name="header" />

    <main class="flex-1">
      <router-view />
    </main>

    <router-view name="footer" />
  </div>
</template>

<script>
import { computed } from 'vue'

import { getCookie } from '@/utils/helpers.js'

export default {
  data() {
    return {
      user: {
        isAuth: false
      }
    }
  },
  provide() {
    return {
      user: computed(() => this.user)
    }
  },
  mounted() {
    if (getCookie('user')) {
      this.user = JSON.parse(getCookie('user'))
    }
  }
}
</script>
