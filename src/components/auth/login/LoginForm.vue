<template>
  <form v-on:submit.prevent="submit" class="lg:mx-20 lg:my-16 lg:w-3/5">
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
        <form-input type="email" name="email" placeholder="Your email" :is-required="true" />
      </form-group>

      <form-group classes="space-y-1.5">
        <form-label for="password" text="Password" />
        <form-password-toggle
          name="password"
          placeholder="must be 8 characters"
          :is-required="true"
        />
      </form-group>

      <div class="flex justify-between">
        <form-group class="flex items-center gap-3">
          <form-input
            type="checkbox"
            name="Remember"
            classes="peer relative h-5 w-5 appearance-none rounded-full border checked:border-0 checked:bg-black focus:outline-none"
          />
          <icon-check class="pointer-events-none absolute mx-1 hidden peer-checked:block" />
          <form-label
            for="remember"
            text="Remember for 30 days"
            class="font-inter text-sm text-gray-700"
          />
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
  </form>
</template>

<script>
import IconWavingHand from '@/components/icons/IconWavingHand.vue'
import FormLink from '@/components/ui/form/FormLink.vue'
import FormGroup from '@/components/ui/form/FormGroup.vue'
import FormInput from '@/components/ui/form/FormInput.vue'
import FormLabel from '@/components/ui/form/FormLabel.vue'
import FormPasswordToggle from '@/components/ui/form/FormPasswordToggle.vue'
import IconCheck from '@/components/icons/IconCheck.vue'
import FormButton from '@/components/ui/form/FormButton.vue'

export default {
  components: {
    IconWavingHand,
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
      console.log('login')
    }
  }
}
</script>
