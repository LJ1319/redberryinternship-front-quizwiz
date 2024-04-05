<template>
  <Form v-on:submit="onSubmit" class="my-12 lg:mx-20 lg:my-32 lg:w-3/5">
    <div class="mb-16 space-y-6 text-center lg:mt-8 lg:text-start">
      <h1 class="font-raleway text-3xl font-extrabold">Reset Password</h1>
      <p class="font-inter text-sm text-gray-700">Please type something you’ll remember</p>

      <form-link text="Already have an account?" to="/login" action="Log in" class="lg:hidden" />
    </div>

    <div class="space-y-6">
      <form-group classes="space-y-1.5">
        <form-label for="new_password" text="New password" />
        <form-input
          type="password"
          name="new_password"
          placeholder="must be at least 3 characters"
          rules="required|min:3"
        />
      </form-group>

      <form-group classes="space-y-1.5">
        <form-label for="password_confirmation" text="Confirm password" />
        <form-input
          type="password"
          name="password_confirmation"
          placeholder="must match to new  password"
          rules="required|confirmed:new_password"
        />
      </form-group>
    </div>

    <form-primary-button text="Reset password" />

    <form-link
      text="Don't need to reset your password?"
      to="/login"
      action="Log in"
      class="hidden lg:block"
    />

    <form-link
      text="In case of invalid url request another."
      to="/forgot"
      action="Forgot"
      class="hidden lg:block"
    />
  </Form>

  <page-toast :show="toast.show" :status="toast.status" :title="toast.title" :text="toast.text" />
</template>

<script>
import { Form } from 'vee-validate'
import FormLink from '@/components/base/form/FormLink.vue'
import FormGroup from '@/components/base/form/FormGroup.vue'
import FormLabel from '@/components/base/form/FormLabel.vue'
import FormInput from '@/components/base/form/FormInput.vue'
import FormPrimaryButton from '@/components/base/form/FormPrimaryButton.vue'
import PageToast from '@/components/shared/PageToast.vue'

import toast from '@/mixins/toast.js'

import { ResetPassword } from '@/services/api/auth.js'

export default {
  components: {
    Form,
    FormInput,
    FormLink,
    FormGroup,
    FormLabel,
    FormPrimaryButton,
    PageToast
  },
  props: ['url', 'token', 'email'],
  mixins: [toast],
  methods: {
    async onSubmit(values, { resetForm, setErrors }) {
      try {
        const { data } = await ResetPassword(this.url, {
          token: this.token,
          email: this.email,
          password: values.new_password,
          password_confirmation: values.password_confirmation
        })

        const toastData = {
          show: true,
          status: 'success',
          title: 'Successful action',
          text: data.message
        }
        this.setToastData(toastData)

        this.toast.hide()
        resetForm()
      } catch (err) {
        if (err.response.status === 422) {
          setErrors({
            new_password: err.response.data.message
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
