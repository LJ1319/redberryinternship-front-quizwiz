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
          :validate="validateUsername"
        />
      </form-group>

      <form-group>
        <form-label for="email" text="Email" />
        <form-input
          type="email"
          name="email"
          placeholder="Example@gmail.com"
          :validate="validateEmail"
        />
      </form-group>

      <form-group>
        <form-label for="password" text="Create a password" />
        <form-input
          type="password"
          name="password"
          placeholder="must be at least 3 characters"
          :validate="validatePassword"
        />
      </form-group>

      <form-group>
        <form-label for="password" text="Confirm password" />
        <form-input
          type="password"
          name="password_confirmation"
          placeholder="must be identical to password"
          :validate="validatePasswordConfirm"
        />
      </form-group>

      <form-group>
        <form-checkbox
          name="terms"
          :validate="validateTerms"
          text="I accept terms and privacy policy"
        />
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
    onSubmit(values) {
      console.log(values)
    },
    validateUsername(value) {
      if (!value) {
        return 'This field is required'
      }

      if (value.length < 3) {
        return 'Must be at least 3 characters'
      }

      return true
    },
    validateEmail(value) {
      if (!value) {
        return 'This field is required'
      }

      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      if (!regex.test(value)) {
        return 'This field must be a valid email'
      }

      return true
    },
    validatePassword(value) {
      if (!value) {
        return 'This field is required'
      }

      if (value.length < 3) {
        return 'Must be at least 3 characters'
      }

      return true
    },
    validatePasswordConfirm(value) {
      if (!value) {
        return 'This field is required'
      }

      if (value.length < 3) {
        return 'Must be at least 3 characters'
      }

      return true
    },
    validateTerms(value) {
      if (!value) {
        return 'You must accept terms and privacy policy'
      }

      return true
    }
  }
}
</script>
