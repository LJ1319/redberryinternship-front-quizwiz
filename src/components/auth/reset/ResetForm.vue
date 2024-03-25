<template>
  <form v-on:submit.prevent="submit" class="my-16 lg:mx-20 lg:my-32 lg:w-3/5">
    <div class="mb-16 mt-8 space-y-6 text-center lg:text-start">
      <h1 class="font-raleway text-3xl font-extrabold">Reset Password</h1>
      <p class="font-inter text-sm text-gray-700">Please type something you’ll remember</p>

      <form-link text="Already have an account?" to="/login" action="Log in" class="lg:hidden" />
    </div>

    <div class="space-y-6">
      <form-group classes="space-y-1.5">
        <form-label for="password" text="New password" />
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
    </div>

    <form-button text="Reset password" />

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
import FormPasswordToggle from '@/components/ui/form/FormPasswordToggle.vue'
import FormButton from '@/components/ui/form/FormButton.vue'

export default {
  components: {
    FormLink,
    FormGroup,
    FormLabel,
    FormPasswordToggle,
    FormButton
  },
  methods: {
    submit() {
      console.log('reset')
    }
  }
}
</script>
