<template>
  <Form v-on:submit="submit" class="lg:mx-20 lg:my-16 lg:w-3/5">
    <div class="mb-10 mt-8 space-y-6">
      <div class="flex items-center justify-center gap-2 lg:justify-start">
        <h1 class="font-raleway text-3xl font-extrabold">Hi, Welcome!</h1>
        <span><icon-waving-hand /></span>
      </div>

      <form-link text="Dont' have an account?" to="/signup" action="Sign up" class="lg:hidden" />
    </div>

    <div class="space-y-6">
      <form-group classes="space-y-1.5">
        <form-label for="email" text="Email address" />
        <form-input type="email" name="email" placeholder="Your email" :validate="validateEmail" />
      </form-group>

      <form-group classes="space-y-1.5">
        <form-label for="password" text="Password" />
        <form-input
          type="password"
          name="password"
          placeholder="must be 8 characters"
          :validate="validatePassword"
        />
      </form-group>

      <div class="flex justify-between">
        <form-group>
          <form-checkbox name="remember" text="Remember for 30 days?" />
        </form-group>

        <span class="font-inter text-sm text-gray-700">
          <router-link to="/forgot">Forgot password?</router-link>
        </span>
      </div>
    </div>

    <form-button text="Log in" />

    <form-link
      text="Dont' have an account?"
      to="/signup"
      action="Sign up"
      class="hidden lg:block"
    />
  </Form>
</template>

<script>
import { Form } from 'vee-validate'
import IconWavingHand from '@/components/icons/IconWavingHand.vue'
import FormLink from '@/components/ui/form/FormLink.vue'
import FormGroup from '@/components/ui/form/FormGroup.vue'
import FormInput from '@/components/ui/form/FormInput.vue'
import FormLabel from '@/components/ui/form/FormLabel.vue'
import FormCheckbox from '@/components/ui/form/FormCheckbox.vue'
import FormButton from '@/components/ui/form/FormButton.vue'

export default {
  components: {
    Form,
    IconWavingHand,
    FormLink,
    FormGroup,
    FormLabel,
    FormInput,
    FormCheckbox,
    FormButton
  },
  methods: {
    submit() {
      console.log('login')
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

      if (value.length < 8) {
        return 'Must be at least 8 characters'
      }

      return true
    }
  }
}
</script>
