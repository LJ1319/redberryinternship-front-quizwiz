<template>
  <teleport to="body">
    <page-backdrop v-on:click="hide" />

    <div class="fixed left-0 top-0 z-50 min-h-80 w-80 bg-white shadow-lg">
      <header class="mx-6 flex h-[4.5rem] items-center justify-between border-b">
        <div>
          <img src="@/assets/logo.svg" alt="QuizWiz Logo" />
        </div>

        <div>
          <button v-on:click="hide">
            <icon-close />
          </button>
        </div>
      </header>

      <menu class="mx-6">
        <li class="border-b py-5">
          <router-link to="/quizzes" class="font-inter text-lg font-semibold">Quizzes</router-link>
        </li>

        <li class="flex items-center gap-3 border-b py-5 font-inter">
          <div
            style="background-image: url('/src/assets/images/UserAvatar.jpeg')"
            class="h-16 w-16 rounded-full bg-cover bg-center bg-no-repeat shadow-csm"
          ></div>

          <div>
            <p class="font-semibold text-gray-900">Oliver Rhye</p>
            <p class="text-xs text-gray-600">oliverrhye@gmail.com</p>
          </div>
        </li>
      </menu>

      <div class="mx-6 space-y-5 py-5 font-raleway text-sm font-bold">
        <button class="h-12 w-full rounded bg-black shadow-cxs">
          <router-link to="/signup" class="inline-block w-full leading-12 text-white">
            Sign up
          </router-link>
        </button>

        <button class="h-12 w-full rounded bg-gray-150 shadow-cxs">
          <router-link to="/login" class="inline-block w-full leading-12 text-purple">
            Log in
          </router-link>
        </button>
      </div>
    </div>
  </teleport>
</template>

<script>
import PageBackdrop from '@/components/shared/PageBackdrop.vue'
import IconClose from '@/components/icons/IconClose.vue'

export default {
  components: { PageBackdrop, IconClose },
  emits: ['hide'],
  methods: {
    hide() {
      this.$emit('hide')
    }
  }
}
</script>
