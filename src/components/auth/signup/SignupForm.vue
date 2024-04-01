<template>
  <Form v-on:submit="onSubmit" class="lg:mx-20 lg:my-16 lg:w-3/5">
    <div class="mb-10 mt-8 space-y-6 text-center lg:text-start">
      <h1 class="font-raleway text-3xl font-extrabold">Create Account</h1>

      <form-link text="Already have an account?" to="/login" action="Log in" class="lg:hidden" />
    </div>

    <div class="space-y-6">
      <form-group>
        <form-label for="username" text="Username" />
        <form-input
          type="text"
          name="username"
          placeholder="Your username"
          rules="required|min:3"
        />
      </form-group>

      <form-group>
        <form-label for="email" text="Email" />
        <form-input
          type="email"
          name="email"
          placeholder="Example@gmail.com"
          rules="required|email"
        />
      </form-group>

      <form-group>
        <form-label for="password" text="Create a password" />
        <form-input
          type="password"
          name="password"
          placeholder="must be at least 3 characters"
          rules="required|min:3"
        />
      </form-group>

      <form-group>
        <form-label for="password" text="Confirm password" />
        <form-input
          type="password"
          name="password_confirmation"
          placeholder="must match to password"
          rules="required|confirmed:password"
        />
      </form-group>

      <form-group>
        <form-checkbox name="terms" text="I accept terms and privacy policy" rules="required" />
      </form-group>
    </div>

    <form-button text="Sign up" />

    <form-link
      text="Already have an account?"
      to="/login"
      action="Log in"
      class="hidden lg:block"
    />
  </Form>
</template>

<script>
import { Form } from 'vee-validate'
import FormLink from '@/components/ui/form/FormLink.vue'
import FormGroup from '@/components/ui/form/FormGroup.vue'
import FormLabel from '@/components/ui/form/FormLabel.vue'
import FormInput from '@/components/ui/form/FormInput.vue'
import FormButton from '@/components/ui/form/FormButton.vue'
import FormCheckbox from '@/components/ui/form/FormCheckbox.vue'

import { Signup } from '@/services/api/auth.js'

export default {
  components: {
    Form,
    FormLink,
    FormGroup,
    FormLabel,
    FormInput,
    FormCheckbox,
    FormButton
  },
  methods: {
    async onSubmit(values, { setErrors, resetForm }) {
      try {
        await Signup({
          username: values.username,
          email: values.email,
          password: values.password,
          password_confirmation: values.password_confirmation,
          terms: values.terms
        })

        resetForm()
      } catch (err) {
        setErrors(err.response.data.errors)
      }
    }
  }
}
</script>
