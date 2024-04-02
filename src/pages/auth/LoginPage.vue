<template>
  <div class="justify-between lg:flex">
    <page-cover style="background-image: url('src/assets/images/LoginCover.svg')" />

    <main-content>
      <back-button />
      <login-form />
    </main-content>

    <page-toast :show="show" :status="status" :title="title" :text="text" />
  </div>
</template>

<script>
import PageCover from '@/components/shared/PageCover.vue'
import MainContent from '@/components/ui/MainContent.vue'
import BackButton from '@/components/ui/BackButton.vue'
import LoginForm from '@/components/auth/login/LoginForm.vue'
import PageToast from '@/components/shared/PageToast.vue'

import { VerifyEmail } from '@/services/api/auth.js'

export default {
  components: {
    PageCover,
    MainContent,
    BackButton,
    LoginForm,
    PageToast
  },
  data() {
    return {
      show: false,
      status: '',
      title: '',
      text: ''
    }
  },
  async mounted() {
    if (this.$route.query.verificationUrl && this.$route.query.signature) {
      const verificationUrl = this.$route.query.verificationUrl
      const signature = this.$route.query.signature
      const url = `${verificationUrl}&signature=${signature}`

      try {
        const { data } = await VerifyEmail(url)

        this.show = true
        this.status = 'success'
        this.title = 'Successful action'
        this.text = data.message

        this.hide()
      } catch (err) {
        this.show = true
        this.status = 'error'
        this.title = 'Error occurred'
        this.text = err.response.data.message

        this.hide()
      }
    }
  },
  methods: {
    hide() {
      setTimeout(() => (this.show = false), 4000)
    }
  }
}
</script>
