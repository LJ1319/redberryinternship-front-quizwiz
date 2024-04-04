<template>
  <div class="justify-between lg:flex">
    <page-cover style="background-image: url('src/assets/images/ForgotPassword.svg')" />

    <main-content>
      <back-button />
      <resend-form />
    </main-content>
  </div>
</template>

<script>
import PageCover from '@/components/shared/PageCover.vue'
import MainContent from '@/components/base/MainContent.vue'
import BackButton from '@/components/base/BackButton.vue'
import ResendForm from '@/components/auth/resend/ResendForm.vue'

import router from '@/router/index.js'

export default {
  components: {
    PageCover,
    MainContent,
    BackButton,
    ResendForm
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
