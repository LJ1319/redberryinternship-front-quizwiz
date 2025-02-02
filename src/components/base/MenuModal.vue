<template>
  <page-backdrop v-on:click="close" class="lg:hidden" />

  <div
    ref="menu"
    class="absolute left-0 top-0 z-50 min-h-80 w-80 bg-white px-6 shadow-cmd lg:left-auto lg:right-24 lg:top-3.5 lg:min-h-40 lg:rounded-lg"
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
        <img
          v-if="user.avatar"
          :src="`${storageUrl}/${user.avatar}`"
          alt="User Avatar"
          class="h-16 w-16 rounded-full shadow-cmd"
        />

        <icon-user v-if="!user.avatar" class="h-16 w-16" />

        <div class="lg:flex lg:w-full lg:justify-between">
          <div>
            <p class="font-semibold text-gray-900">{{ user.username }}</p>
            <p class="text-xs text-gray-600">{{ user.email }}</p>
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
import IconUser from '@/components/icons/IconUser.vue'

export default {
  components: {
    IconUser,
    PageBackdrop,
    CloseButton,
    LogoutForm,
    FormLogoutButton,
    FormSecondaryButton
  },
  inject: ['user'],
  mixins: [toast],
  emits: ['close'],
  data() {
    return {
      storageUrl: `${import.meta.env.VITE_API_URL}/storage`
    }
  },
  mounted() {
    window.addEventListener('click', this.handleClickOutside)

    this.searchIsShown = this.$route.meta.needsSearch
  },
  updated() {
    this.$emit('close')
  },
  beforeUnmount() {
    window.removeEventListener('click', this.handleClickOutside)
  },
  watch: {
    $route(val) {
      if (val) {
        this.close()
      }
    }
  },
  methods: {
    handleClickOutside(e) {
      if (!this.$refs.menu.contains(e.target)) {
        this.close()
      }
    },
    close() {
      this.$emit('close')
    }
  }
}
</script>
