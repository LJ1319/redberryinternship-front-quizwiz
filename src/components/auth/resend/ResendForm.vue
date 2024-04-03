<template>
  <Form v-on:submit="onSubmit" class="lg:mx-20 lg:my-16 lg:w-3/5">
    <div class="mb-16 mt-8 space-y-6 text-center lg:text-start">
      <h1 class="font-raleway text-3xl font-extrabold">Accidentally deleted verification email?</h1>
      <p class="font-inter text-sm text-gray-600">
        Don’t worry! It happens. Please enter the email associated with your account.
      </p>
    </div>

    <div class="space-y-6">
      <form-group classes="space-y-1.5">
        <form-label for="email" text="Email address" />
        <form-input type="email" name="email" placeholder="Your email" rules="required|email" />
      </form-group>
    </div>

    <form-button text="Resend" />
  </Form>

  <page-toast :show="toast.show" :status="toast.status" :title="toast.title" :text="toast.text" />
</template>

<script>
import { Form } from 'vee-validate'
import FormGroup from '@/components/ui/form/FormGroup.vue'
import FormLabel from '@/components/ui/form/FormLabel.vue'
import FormInput from '@/components/ui/form/FormInput.vue'
import FormButton from '@/components/ui/form/FormButton.vue'
import PageToast from '@/components/shared/PageToast.vue'

import { ResendVerification } from '@/services/api/auth.js'

export default {
  components: {
    Form,
    FormGroup,
    FormLabel,
    FormInput,
    FormButton,
    PageToast
  },
  data() {
    return {
      toast: {
        show: false,
        status: '',
        title: '',
        text: '',
        hide() {
          setTimeout(() => (this.show = false), 4000)
        }
      }
    }
  },
  methods: {
    async onSubmit(values, { resetForm, setErrors }) {
      try {
        const { data } = await ResendVerification({
          email: values.email
        })

        this.toast = {
          show: true,
          status: 'warning',
          title: 'Action required',
          text: data.message,
          hide: this.toast.hide
        }

        this.toast.hide()
        resetForm()
      } catch (err) {
        if (err.response.status === 422) {
          setErrors({
            email: err.response.data.message
          })
        }

        this.toast = {
          show: true,
          status: 'error',
          title: 'Error occurred',
          text: err.response.data.message,
          hide: this.toast.hide
        }

        this.toast.hide()
      }
    }
  }
}
</script>
