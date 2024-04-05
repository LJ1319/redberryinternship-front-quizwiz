<template>
  <Form v-on:submit="onSubmit" class="mx-6 py-5 lg:mx-0 lg:py-0">
    <slot />
  </Form>

  <page-toast :show="toast.show" :status="toast.status" :title="toast.title" :text="toast.text" />
</template>

<script>
import { Form } from 'vee-validate'
import PageToast from '@/components/shared/PageToast.vue'

import toast from '@/mixins/toast.js'

import { Logout } from '@/services/api/auth.js'
import { setCookie } from '@/utils/helpers.js'

export default {
  components: {
    Form,
    PageToast
  },
  inject: ['user'],
  mixins: [toast],
  methods: {
    async onSubmit() {
      try {
        const { data } = await Logout()

        this.user.isAuth = false
        setCookie('user', JSON.stringify(this.user), 30)

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
