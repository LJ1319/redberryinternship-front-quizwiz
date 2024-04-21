<template>
  <Form v-on:submit="onSubmit" class="lg:mx-20 lg:my-16 lg:w-3/5">
    <div class="mb-10 mt-8 space-y-6">
      <div class="flex items-center justify-center gap-2 lg:justify-start">
        <h1 class="font-raleway text-3xl font-extrabold">Hi, Welcome!</h1>
        <span><icon-waving-hand /></span>
      </div>

      <form-link text="Dont' have an account?" to="/signup" action="Sign up" class="lg:hidden" />
    </div>

    <div class="space-y-6">
      <form-group>
        <form-label for="email" text="Email address" />
        <form-input type="email" name="email" placeholder="Your email" rules="required|email" />
      </form-group>

      <form-group>
        <form-label for="password" text="Password" />
        <form-input
          type="password"
          name="password"
          placeholder="must be at least 3 characters"
          rules="required|min:3"
        />
      </form-group>

      <div class="flex items-center justify-between">
        <form-checkbox name="remember" text="Remember me" />

        <span class="font-inter text-sm text-gray-700">
          <router-link to="/forgot">Forgot password?</router-link>
        </span>
      </div>
    </div>

    <form-primary-button text="Log in" />

    <form-link
      text="Dont' have an account?"
      to="/signup"
      action="Sign up"
      class="hidden lg:block"
    />

    <form-link
      text="Need to verify email?"
      to="/resend"
      action="Resend verification"
      class="hidden lg:block"
    />
  </Form>

  <page-toast :show="toast.show" :status="toast.status" :title="toast.title" :text="toast.text" />
</template>

<script>
import { Form } from 'vee-validate'
import IconWavingHand from '@/components/icons/IconWavingHand.vue'
import FormLink from '@/components/base/form/FormLink.vue'
import FormGroup from '@/components/base/form/FormGroup.vue'
import FormInput from '@/components/base/form/FormInput.vue'
import FormLabel from '@/components/base/form/FormLabel.vue'
import FormCheckbox from '@/components/base/form/FormCheckbox.vue'
import FormPrimaryButton from '@/components/base/form/FormPrimaryButton.vue'
import PageToast from '@/components/shared/PageToast.vue'

import toast from '@/mixins/toast.js'

import { Login } from '@/services/api/auth.js'

export default {
  components: {
    Form,
    IconWavingHand,
    FormLink,
    FormGroup,
    FormLabel,
    FormInput,
    FormCheckbox,
    FormPrimaryButton,
    PageToast
  },
  inject: ['user'],
  mixins: [toast],
  methods: {
    async onSubmit(values, { setErrors }) {
      try {
        await Login({
          email: values.email,
          password: values.password,
          remember: values.remember ?? false
        })

        this.user.isAuth = true

        this.$router.replace({ name: 'quizzes' })
      } catch (err) {
        if (err.response.status === 422) {
          setErrors({
            email: err.response.data.message
          })
        }

        const toastData = {
          show: true,
          status: 'error',
          title: 'Error occurred',
          text: err.response.data.message
        }
        this.setToastData(toastData)

        this.toast.hide()
      }
    }
  }
}
</script>
