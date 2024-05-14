<template>
  <div class="justify-between lg:flex">
    <div class="hidden h-screen w-1/2 lg:block">
      <img src="@/assets/images/ForgotPassword.svg" alt="" class="h-full w-full" />

      <page-logo />
    </div>

    <split-content>
      <reset-form :url="url" :token="token" :email="email" />
    </split-content>
  </div>
</template>

<script>
import PageLogo from '@/components/shared/PageLogo.vue'
import SplitContent from '@/components/base/SplitContent.vue'
import ResetForm from '@/components/auth/reset/ResetForm.vue'

export default {
  components: {
    PageLogo,
    SplitContent,
    ResetForm
  },
  data() {
    return {
      url: '',
      token: '',
      email: ''
    }
  },
  mounted() {
    if (
      this.$route.query.resetUrl &&
      this.$route.query.signature &&
      this.$route.query.token &&
      this.$route.query.email
    ) {
      const resetUrl = this.$route.query.resetUrl
      const signature = this.$route.query.signature
      this.url = `${resetUrl}&signature=${signature}`

      this.token = this.$route.query.token
      this.email = this.$route.query.email

      this.$router.replace({ query: undefined })
    }
  }
}
</script>
