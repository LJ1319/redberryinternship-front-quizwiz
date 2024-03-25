<template>
  <form v-on:submit.prevent="submit" class="lg:mx-20 lg:my-16 lg:w-3/5">
    <div class="mb-10 mt-8 space-y-6 text-center lg:text-start">
      <h1 class="font-raleway text-3xl font-extrabold">Create Account</h1>

      <form-link text="Already have an account?" to="/login" action="Log in" class="lg:hidden" />
    </div>

    <div class="space-y-6">
      <form-group classes="space-y-1.5">
        <form-label for="username" text="Username" />
        <form-input
          type="username"
          name="username"
          placeholder="Your username"
          :is-required="true"
        />
      </form-group>

      <form-group classes="space-y-1.5">
        <form-label for="email" text="Email" />
        <form-input type="email" name="email" placeholder="Example@gmail.com" :is-required="true" />
      </form-group>

      <form-group classes="space-y-1.5">
        <form-label for="password" text="Create a password" />
        <form-password-toggle
          name="password"
          placeholder="must be 8 characters"
          :is-required="true"
        />
      </form-group>

      <form-group classes="space-y-1.5">
        <form-label for="password" text="Confirm password" />
        <form-password-toggle
          name="password_confirmation"
          placeholder="must be 8 characters"
          :is-required="true"
        />
      </form-group>

      <form-group classes="flex items-center gap-3">
        <form-input
          type="checkbox"
          name="terms"
          classes="peer relative h-5 w-5 appearance-none rounded-full border checked:border-0 checked:bg-black focus:outline-none"
        />
        <icon-check class="pointer-events-none absolute mx-1 hidden peer-checked:block" />
        <form-label for="terms" text="I agree to terms and privacy policy" />
      </form-group>
    </div>

    <form-button text="Sign up" />

    <form-link
      text="Already have an account?"
      to="/login"
      action="Log in"
      class="hidden lg:block"
    />
  </form>
</template>

<script>
import FormLink from '@/components/ui/form/FormLink.vue'
import FormGroup from '@/components/ui/form/FormGroup.vue'
import FormLabel from '@/components/ui/form/FormLabel.vue'
import FormInput from '@/components/ui/form/FormInput.vue'
import FormPasswordToggle from '@/components/ui/form/FormPasswordToggle.vue'
import IconCheck from '@/components/icons/IconCheck.vue'
import FormButton from '@/components/ui/form/FormButton.vue'

export default {
  components: {
    FormLink,
    FormGroup,
    FormLabel,
    FormInput,
    FormPasswordToggle,
    IconCheck,
    FormButton
  },
  methods: {
    submit() {
      console.log('submitted')
    }
  }
}
</script>
