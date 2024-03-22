<template>
  <header class="flex h-[4.5rem] items-center justify-between border-b px-6 lg:px-24">
    <div class="lg:flex lg:gap-16">
      <img src="@/assets/logo.svg" alt="QuizWiz Logo" />
      <router-link to="/quizzes" class="hidden font-inter font-semibold text-gray-600 lg:inline">
        Quizzes
      </router-link>
    </div>

    <div>
      <button v-on:click="showMenu" class="lg:hidden">
        <icon-menu />
      </button>

      <div class="hidden space-x-5 font-raleway text-sm font-bold lg:block">
        <button class="h-10 w-24 rounded bg-black shadow-xs">
          <router-link to="/signup" class="inline-block w-full leading-10 text-white">
            Sign up
          </router-link>
        </button>

        <button class="rounded bg-white shadow-xs">
          <router-link to="/login" class="text-purple">Log in</router-link>
        </button>
      </div>
    </div>
  </header>

  <menu-modal v-if="menuIsShown" v-on:hide="hideMenu" />
</template>

<script>
import IconMenu from '@/components/icons/IconMenu.vue'
import MenuModal from '@/components/ui/MenuModal.vue'

export default {
  components: {
    IconMenu,
    MenuModal
  },
  data() {
    return {
      menuIsShown: false
    }
  },
  methods: {
    showMenu() {
      this.menuIsShown = true
    },
    hideMenu() {
      this.menuIsShown = false
    }
  }
}
</script>
