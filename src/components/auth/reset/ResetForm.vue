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

    <form-button text="Reset password" />

    <form-link
      text="Don't need to reset your password?"
      to="/login"
      action="Log in"
      class="hidden lg:block"
    />
  </Form>

  <page-toast :show="show" :status="status" :title="title" :text="text" />
</template>

<script>
import { Form } from 'vee-validate'
import FormLink from '@/components/ui/form/FormLink.vue'
import FormGroup from '@/components/ui/form/FormGroup.vue'
import FormLabel from '@/components/ui/form/FormLabel.vue'
import FormInput from '@/components/ui/form/FormInput.vue'
import FormButton from '@/components/ui/form/FormButton.vue'
import PageToast from '@/components/shared/PageToast.vue'

import { ResetPassword } from '@/services/api/auth.js'

export default {
  components: {
    Form,
    FormInput,
    FormLink,
    FormGroup,
    FormLabel,
    FormButton,
    PageToast
  },
  props: ['url', 'token', 'email'],
  data() {
    return {
      show: false,
      status: '',
      title: '',
      text: ''
    }
  },
  methods: {
    async onSubmit(values, { resetForm, setErrors }) {
      try {
        const { data } = await ResetPassword(this.url, {
          token: this.token,
          email: this.email,
          password: values.new_password,
          password_confirmation: values.password_confirmation
        })

        this.show = true
        this.status = 'success'
        this.title = 'Successful action'
        this.text = data.status

        resetForm()
        this.hide()
      } catch (err) {
        if (err.response.status === 422) {
          setErrors({
            new_password: err.response.data.message
          })
        }

        this.show = true
        this.status = 'error'
        this.title = 'Error Occurred'
        this.text = err.response.data.message

        this.hide()
      }
    },
    hide() {
      setTimeout(() => (this.show = false), 4000)
    }
  }
}
</script>
