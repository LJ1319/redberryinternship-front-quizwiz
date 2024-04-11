<template>
  <div class="justify-between lg:flex">
    <page-cover style="background-image: url('src/assets/images/LoginCover.svg')" />

    <split-content>
      <back-button />
      <login-form />
    </split-content>
  </div>

  <page-toast :show="toast.show" :status="toast.status" :title="toast.title" :text="toast.text" />
</template>

<script>
import PageCover from '@/components/shared/PageCover.vue'
import SplitContent from '@/components/base/SplitContent.vue'
import BackButton from '@/components/base/buttons/BackButton.vue'
import LoginForm from '@/components/auth/login/LoginForm.vue'
import PageToast from '@/components/shared/PageToast.vue'

import toast from '@/mixins/toast.js'

import { VerifyEmail } from '@/services/api/auth.js'

export default {
  components: {
    PageCover,
    SplitContent,
    BackButton,
    LoginForm,
    PageToast
  },
  mixins: [toast],
  mounted() {
    if (this.$route.query.verificationUrl) {
      const verificationUrl = this.$route.query.verificationUrl
      const signature = this.$route.query.signature
      const url = `${verificationUrl}&signature=${signature}`

      this.verifyEmail(url)
    }
  },
  methods: {
    async verifyEmail(url) {
      try {
        const { data } = await VerifyEmail(url)
        this.$router.replace({ query: undefined })

        const toastData = {
          show: true,
          status: 'success',
          title: 'Successful action',
          text: data.message
        }
        this.setToastData(toastData)

        this.toast.hide()
      } catch (err) {
        this.$router.replace({ query: undefined })

        const toastData = {
          show: true,
          status: 'error',
          title: 'Error occurred',
          text: err.response.data.message
        }
        this.setToastData(toastData)

        this.toast.hide()
      }
    }
  }
}
</script>
