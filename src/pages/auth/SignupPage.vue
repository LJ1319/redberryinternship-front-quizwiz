<template>
  <div class="justify-between lg:flex">
    <page-cover style="background-image: url('src/assets/images/SignupCover.svg')" />

    <main-content>
      <back-button />
      <signup-form />
    </main-content>
  </div>
</template>

<script>
import PageCover from '@/components/shared/PageCover.vue'
import MainContent from '@/components/base/MainContent.vue'
import BackButton from '@/components/base/BackButton.vue'
import SignupForm from '@/components/auth/signup/SignupForm.vue'

import router from '@/router/index.js'

export default {
  components: {
    PageCover,
    MainContent,
    BackButton,
    SignupForm
  },
  inject: ['user'],
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      if (vm.user.isAuth) {
        router.replace({ path: '/' })
      }
    })
  }
}
</script>
