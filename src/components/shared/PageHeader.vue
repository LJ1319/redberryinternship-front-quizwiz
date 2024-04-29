<template>
  <header
    class="sticky top-0 z-50 flex h-[4.5rem] w-full items-center justify-between border-b border-gray-300 bg-white px-4 lg:px-24"
  >
    <div class="items-center justify-center gap-16 lg:flex">
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="QuizWiz Logo" />
      </router-link>

      <router-link
        to="/quizzes"
        class="hidden font-inter font-semibold text-gray-600 lg:inline"
        active-class="before:inline-block before:w-[0.625rem] before:h-[0.625rem] before:rounded-full before:bg-purple before:mr-2"
      >
        Quizzes
      </router-link>
    </div>

    <div class="flex items-center gap-5">
      <div class="flex items-center gap-4 lg:gap-8">
        <search-toggle
          v-if="searchIsShown && !searchIsOpen"
          v-on:click="openSearch"
          class="cursor-pointer"
        />
        <search-bar v-if="searchIsShown && searchIsOpen" v-on:close="closeSearch" />

        <user-info-button
          v-if="user.isAuth"
          v-on:click.stop="openMenu"
          class="hidden h-8 lg:block"
        />

        <burger-menu-button v-on:click.stop="openMenu" class="lg:hidden" />
      </div>

      <div
        v-if="!user.isAuth"
        class="hidden items-center gap-5 font-raleway text-sm font-bold lg:flex"
      >
        <button
          class="h-max w-24 rounded bg-black shadow-cxs transition hover:-translate-x-1 hover:-translate-y-1 hover:border hover:border-black hover:bg-white hover:shadow-c2xl focus:outline-none"
        >
          <router-link
            to="/signup"
            class="inline-block w-full leading-10 text-white hover:text-black focus:outline-none"
          >
            Sign up
          </router-link>
        </button>

        <button class="h-max rounded bg-white shadow-cxs focus:outline-none">
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
    </div>

    <menu-modal v-if="menuIsOpen" v-on:close="closeMenu" />
  </header>
</template>

<script>
import SearchToggle from '@/components/base/search/SearchToggle.vue'
import SearchBar from '@/components/base/search/SearchBar.vue'
import UserInfoButton from '@/components/base/buttons/UserInfoButton.vue'
import BurgerMenuButton from '@/components/base/buttons/BurgerMenuButton.vue'
import IconNext from '@/components/icons/IconNext.vue'
import MenuModal from '@/components/base/MenuModal.vue'

import { removeBodyScroll } from '@/utils/helpers.js'

export default {
  components: {
    SearchToggle,
    SearchBar,
    UserInfoButton,
    BurgerMenuButton,
    IconNext,
    MenuModal
  },
  inject: ['user'],
  data() {
    return {
      searchIsShown: false,
      searchIsOpen: false,
      menuIsOpen: false
    }
  },
  watch: {
    $route(val) {
      this.searchIsShown = val.meta.needsSearch
    }
  },
  mounted() {
    this.searchIsShown = this.$route.meta.needsSearch
  },
  updated() {
    removeBodyScroll(this.menuIsOpen)
  },
  methods: {
    openMenu() {
      this.menuIsOpen = true
    },
    closeMenu() {
      this.menuIsOpen = false
    },
    openSearch() {
      this.searchIsOpen = true
    },
    closeSearch() {
      this.searchIsOpen = false
    }
  }
}
</script>
