<template>
  <header
    id="main-header"
    ref="header"
    class="relative flex h-[4.5rem] items-center justify-between border-b px-6 lg:px-24"
  >
    <div class="items-center justify-center gap-16 lg:flex">
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="QuizWiz Logo" />
      </router-link>

      <router-link to="/quizzes" class="hidden font-inter font-semibold text-gray-600 lg:inline">
        Quizzes
      </router-link>
    </div>

    <div>
      <button v-on:click="showMenu" class="lg:hidden">
        <icon-menu />
      </button>

      <div v-if="!user.isAuth" class="hidden space-x-5 font-raleway text-sm font-bold lg:block">
        <button
          class="h-max w-24 rounded bg-black shadow-cxs transition hover:-translate-x-1 hover:-translate-y-1 hover:border hover:border-black hover:bg-white hover:shadow-clg focus:outline-none"
        >
          <router-link
            to="/signup"
            class="inline-block w-full leading-10 text-white hover:text-black focus:outline-none"
          >
            Sign up
          </router-link>
        </button>

        <button class="rounded bg-white shadow-cxs focus:outline-none">
          <router-link
            to="/login"
            class="group flex items-center justify-center gap-2 text-purple focus:outline-none"
          >
            <span>Log in</span>
            <span class="opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100">
              <icon-next color="#4B69FD" />
            </span>
          </router-link>
        </button>
      </div>

      <div v-else class="relative hidden lg:flex">
        <button v-on:click="showMenu">
          <icon-user />
        </button>
      </div>
    </div>

    <menu-modal v-if="menuIsShown" v-on:hide="hideMenu" />
  </header>
</template>

<script>
import IconMenu from '@/components/icons/IconMenu.vue'
import MenuModal from '@/components/base/MenuModal.vue'
import IconNext from '@/components/icons/IconNext.vue'
import IconUser from '@/components/icons/IconUser.vue'

export default {
  components: {
    IconMenu,
    MenuModal,
    IconNext,
    IconUser
  },
  inject: ['user'],
  data() {
    return {
      menuIsShown: false
    }
  },
  mounted() {
    window.addEventListener('click', this.hideMenu)
  },
  beforeUnmount() {
    window.removeEventListener('click', this.hideMenu)
  },
  methods: {
    showMenu() {
      this.menuIsShown = true
    },
    hideMenu(e) {
      if (!this.$refs.header.contains(e.target) || e.target.id === 'main-header') {
        this.menuIsShown = false
      }
    }
  }
}
</script>
