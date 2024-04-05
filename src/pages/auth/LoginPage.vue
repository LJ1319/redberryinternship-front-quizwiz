<template>
  <div class="justify-between lg:flex">
    <page-cover style="background-image: url('src/assets/images/LoginCover.svg')" />

    <main-content>
      <back-button />
      <login-form />
    </main-content>

    <page-toast :show="toast.show" :status="toast.status" :title="toast.title" :text="toast.text" />
  </div>
</template>

<script>
import PageCover from '@/components/shared/PageCover.vue'
import MainContent from '@/components/base/MainContent.vue'
import BackButton from '@/components/base/BackButton.vue'
import LoginForm from '@/components/auth/login/LoginForm.vue'
import PageToast from '@/components/shared/PageToast.vue'

import toast from '@/mixins/toast.js'

import { VerifyEmail } from '@/services/api/auth.js'

export default {
  components: {
    PageCover,
    MainContent,
    BackButton,
    LoginForm,
    PageToast
  },
  mixins: [toast],
  async mounted() {
    if (this.$route.query.verificationUrl) {
      const verificationUrl = this.$route.query.verificationUrl
      const signature = this.$route.query.signature
      const url = `${verificationUrl}&signature=${signature}`

      try {
        const { data } = await VerifyEmail(url)

        const toastData = {
          show: true,
          status: 'success',
          title: 'Successful action',
          text: data.message
        }
        this.setToastData(toastData)

        this.toast.hide()
      } catch (err) {
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
