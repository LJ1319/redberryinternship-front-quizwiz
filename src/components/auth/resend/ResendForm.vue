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
</template>

<script>
import { Form } from 'vee-validate'
import FormGroup from '@/components/ui/form/FormGroup.vue'
import FormLabel from '@/components/ui/form/FormLabel.vue'
import FormInput from '@/components/ui/form/FormInput.vue'
import FormButton from '@/components/ui/form/FormButton.vue'

import { ResendVerification } from '@/services/api/auth.js'

export default {
  components: {
    Form,
    FormGroup,
    FormLabel,
    FormInput,
    FormButton
  },
  methods: {
    async onSubmit(values, { setErrors }) {
      try {
        const { data, status } = await ResendVerification({
          email: values.email
        })
        console.log(data, status)
      } catch (err) {
        console.log(err.response.data, err.response.status)
        setErrors({
          email: err.response.data.message
        })
      }
    }
  }
}
</script>
