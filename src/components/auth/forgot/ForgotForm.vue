<template>
  <Form v-on:submit="onSubmit" class="lg:mx-20 lg:my-16 lg:w-3/5">
    <div class="mb-16 mt-8 space-y-6 text-center lg:text-start">
      <h1 class="font-raleway text-3xl font-extrabold">Forgot Password?</h1>
      <p class="font-inter text-sm text-gray-600">
        Don’t worry! It happens. Please enter the email associated with your account.
      </p>
    </div>

    <div class="space-y-6">
      <form-group>
        <form-label for="email" text="Email address" />
        <form-input type="email" name="email" placeholder="Your email" rules="required|email" />
      </form-group>
    </div>

    <form-primary-button text="Send" />
  </Form>

  <page-toast :show="toast.show" :status="toast.status" :title="toast.title" :text="toast.text" />
</template>

<script>
import { Form } from 'vee-validate'
import FormGroup from '@/components/base/form/FormGroup.vue'
import FormLabel from '@/components/base/form/FormLabel.vue'
import FormInput from '@/components/base/form/FormInput.vue'
import FormPrimaryButton from '@/components/base/form/FormPrimaryButton.vue'
import PageToast from '@/components/shared/PageToast.vue'

import toast from '@/mixins/toast.js'

import { ForgotPassword } from '@/services/api/auth.js'

export default {
  components: {
    Form,
    FormGroup,
    FormLabel,
    FormInput,
    FormPrimaryButton,
    PageToast
  },
  mixins: [toast],
  methods: {
    async onSubmit(values, { setErrors, resetForm }) {
      try {
        const { data } = await ForgotPassword({
          email: values.email
        })

        const toastData = {
          show: true,
          status: 'warning',
          title: 'Action required',
          text: data.message
        }
        this.setToastData(toastData)

        this.toast.hide()
        resetForm()
      } catch (err) {
        if (err.response.status === 422) {
          setErrors({
            email: err.response.data.message
          })
        }

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
