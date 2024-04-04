<template>
  <page-backdrop v-on:click="hide" />

  <div
    class="absolute left-0 top-0 z-50 min-h-80 w-80 bg-white shadow-csm lg:left-auto lg:right-24 lg:top-4 lg:min-h-40 lg:rounded-lg"
  >
    <header class="mx-6 flex h-[4.5rem] items-center justify-between border-b lg:hidden">
      <div>
        <img src="@/assets/logo.svg" alt="QuizWiz Logo" />
      </div>

      <div class="lg:hidden">
        <button v-on:click="hide">
          <icon-close />
        </button>
      </div>
    </header>

    <menu class="mx-6">
      <li class="border-b py-5 lg:hidden">
        <router-link to="/quizzes" class="font-inter text-lg font-semibold">Quizzes</router-link>
      </li>

      <li
        v-if="user.isAuth"
        class="flex items-center gap-3 border-b py-5 font-inter lg:flex-col lg:items-start lg:border-0"
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
              <button>
                <icon-logout />
              </button>
            </logout-form>
          </div>
        </div>
      </li>
    </menu>

    <div v-if="!user.isAuth" class="mx-6 space-y-5 py-5 font-raleway text-sm font-bold">
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
        <form-secondary-button class="bg-gray-150">
          <span class="font-raleway text-sm font-bold text-purple">Log out</span>
        </form-secondary-button>
      </logout-form>
    </div>
  </div>
</template>

<script>
import PageBackdrop from '@/components/shared/PageBackdrop.vue'
import IconClose from '@/components/icons/IconClose.vue'
import LogoutForm from '@/components/auth/logout/LogoutForm.vue'
import IconLogout from '@/components/icons/IconLogout.vue'
import FormSecondaryButton from '@/components/base/form/FormSecondaryButton.vue'

export default {
  components: {
    PageBackdrop,
    IconClose,
    LogoutForm,
    IconLogout,
    FormSecondaryButton
  },
  inject: ['user'],
  emits: ['hide'],
  methods: {
    hide(e) {
      this.$emit('hide', e.target)
    }
  }
}
</script>
