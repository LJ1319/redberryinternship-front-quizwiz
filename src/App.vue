<template>
  <div class="flex min-h-screen flex-col">
    <router-view name="header" />

    <main class="flex-1">
      <router-view />
    </main>

    <router-view name="footer" />
  </div>

  <page-toast :show="toast.show" :status="toast.status" :title="toast.title" :text="toast.text" />
</template>

<script>
import PageToast from '@/components/shared/PageToast.vue'

import toast from '@/mixins/toast.js'
import { computed } from 'vue'

import { getCookie, setCookie } from '@/utils/helpers.js'
import { RetrieveAuthUser } from '@/services/api/auth.js'

export default {
  components: { PageToast },
  mixins: [toast],
  data() {
    return {
      user: {
        isAuth: false
      }
    }
  },
  provide() {
    return {
      user: computed(() => this.user)
    }
  },
  watch: {
    'user.isAuth'(val) {
      if (val) {
        setCookie('user', JSON.stringify(this.user), 30)
        this.retrieveUser()
      } else {
        this.user = { isAuth: false }
        setCookie('user', JSON.stringify(this.user), 30)
      }
    }
  },
  mounted() {
    if (getCookie('user')) {
      this.user = JSON.parse(getCookie('user'))
    }
  },
  methods: {
    async retrieveUser() {
      try {
        const { data } = await RetrieveAuthUser()
        this.user = {
          ...this.user,
          ...data
        }
      } catch (err) {
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
