<template>
  <div class="justify-between lg:flex">
    <page-cover style="background-image: url('src/assets/images/ForgotPassword.svg')" />

    <main-content>
      <reset-form :url="url" :token="token" :email="email" />
    </main-content>
  </div>
</template>

<script>
import PageCover from '@/components/shared/PageCover.vue'
import MainContent from '@/components/base/MainContent.vue'
import ResetForm from '@/components/auth/reset/ResetForm.vue'

export default {
  components: {
    PageCover,
    MainContent,
    ResetForm
  },
  data() {
    return {
      url: '',
      token: '',
      email: ''
    }
  },
  async mounted() {
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
