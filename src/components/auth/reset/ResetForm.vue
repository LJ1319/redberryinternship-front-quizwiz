<template>
  <Form v-on:submit.prevent="submit" class="my-12 lg:mx-20 lg:my-32 lg:w-3/5">
    <div class="mb-16 space-y-6 text-center lg:mt-8 lg:text-start">
      <h1 class="font-raleway text-3xl font-extrabold">Reset Password</h1>
      <p class="font-inter text-sm text-gray-700">Please type something you’ll remember</p>

      <form-link text="Already have an account?" to="/login" action="Log in" class="lg:hidden" />
    </div>

    <div class="space-y-6">
      <form-group classes="space-y-1.5">
        <form-label for="password" text="New password" />
        <form-input
          type="password"
          name="password"
          placeholder="must be at least 3 characters"
          :validate="validatePassword"
        />
      </form-group>

      <form-group classes="space-y-1.5">
        <form-label for="password" text="Confirm password" />
        <form-input
          type="password"
          name="password_confirmation"
          placeholder="must be identical to password"
          :validate="validatePasswordConfirm"
        />
      </form-group>
    </div>

    <form-button text="Reset password" />

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

export default {
  components: {
    Form,
    FormInput,
    FormLink,
    FormGroup,
    FormLabel,
    FormButton
  },
  methods: {
    submit() {
      console.log('reset')
    },
    validatePassword(value) {
      if (!value) {
        return 'This field is required'
      }

      if (value.length < 8) {
        return 'Must be at least 8 characters'
      }

      return true
    },
    validatePasswordConfirm(value) {
      if (!value) {
        return 'This field is required'
      }

      if (value.length < 8) {
        return 'Must be at least 8 characters'
      }

      return true
    }
  }
}
</script>
