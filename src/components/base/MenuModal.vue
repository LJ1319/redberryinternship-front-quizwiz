<template>
  <page-backdrop v-on:click="close" />

  <div
    class="absolute left-0 top-0 z-50 min-h-80 w-80 bg-white px-6 shadow-csm lg:left-auto lg:right-24 lg:top-3.5 lg:min-h-40 lg:rounded-lg"
  >
    <header class="flex h-[4.5rem] items-center justify-between border-b border-gray-300 lg:hidden">
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="QuizWiz Logo" />
      </router-link>

      <close-button v-on:click="close" class="lg:hidden" />
    </header>

    <menu class="">
      <li class="border-b border-gray-300/40 py-5 lg:hidden">
        <router-link to="/quizzes" class="font-inter text-lg font-semibold">Quizzes</router-link>
      </li>

      <li
        v-if="user.isAuth"
        class="flex items-center gap-3 border-b border-gray-300/40 py-5 font-inter lg:flex-col lg:items-start lg:border-0"
      >
        <div
          style="background-image: url('/src/assets/images/UserAvatar.jpeg')"
          class="h-16 w-16 rounded-full bg-cover bg-center bg-no-repeat shadow-csm"
        ></div>

        <div class="lg:flex lg:w-full lg:justify-between">
          <div>
            <p class="font-semibold text-gray-900">Oliver Rhye</p>
            <p class="text-xs text-gray-600">oliverrhye@gmail.com</p>
          </div>

          <div class="hidden lg:block">
            <logout-form>
              <form-logout-button />
            </logout-form>
          </div>
        </div>
      </li>
    </menu>

    <div v-if="!user.isAuth" class="space-y-5 py-5 font-raleway text-sm font-bold">
      <form-secondary-button class="bg-black">
        <router-link to="/signup" class="inline-block w-full leading-12 text-white">
          Sign up
        </router-link>
      </form-secondary-button>

      <form-secondary-button class="bg-gray-150">
        <router-link to="/login" class="inline-block w-full leading-12 text-purple">
          Log in
        </router-link>
      </form-secondary-button>
    </div>

    <div v-else class="lg:hidden">
      <logout-form>
        <form-secondary-button class="bg-gray-150 font-raleway text-sm font-bold text-purple">
          Log out
        </form-secondary-button>
      </logout-form>
    </div>
  </div>
</template>

<script>
import PageBackdrop from '@/components/shared/PageBackdrop.vue'
import CloseButton from '@/components/base/buttons/CloseButton.vue'
import LogoutForm from '@/components/auth/logout/LogoutForm.vue'
import FormLogoutButton from '@/components/base/form/FormLogoutButton.vue'
import FormSecondaryButton from '@/components/base/form/FormSecondaryButton.vue'

import toast from '@/mixins/toast.js'

export default {
  components: {
    PageBackdrop,
    CloseButton,
    LogoutForm,
    FormLogoutButton,
    FormSecondaryButton
  },
  inject: ['user'],
  mixins: [toast],
  emits: ['close'],
  updated() {
    this.$emit('close')
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
