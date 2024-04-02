<template>
  <div class="justify-between lg:flex">
    <page-cover style="background-image: url('src/assets/images/LoginCover.svg')" />

    <main-content>
      <back-button />
      <login-form />
    </main-content>
  </div>
</template>

<script>
import PageCover from '@/components/shared/PageCover.vue'
import MainContent from '@/components/ui/MainContent.vue'
import BackButton from '@/components/ui/BackButton.vue'
import LoginForm from '@/components/auth/login/LoginForm.vue'

import { VerifyEmail } from '@/services/api/auth.js'

export default {
  components: {
    PageCover,
    MainContent,
    BackButton,
    LoginForm
  },
  async mounted() {
    if (this.$route.query.verificationUrl && this.$route.query.signature) {
      const verificationUrl = this.$route.query.verificationUrl
      const signature = this.$route.query.signature
      const url = `${verificationUrl}&signature=${signature}`

      try {
        await VerifyEmail(url)
      } catch (err) {
        console.log(err.response)
      }
    }
  }
}
</script>
