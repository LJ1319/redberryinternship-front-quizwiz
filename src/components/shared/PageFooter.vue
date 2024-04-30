<template>
  <footer class="border-t border-gray-300">
    <div class="w-full px-10 py-6 font-inter lg:flex lg:gap-32 lg:px-24 lg:py-12">
      <div class="border-b border-gray-300/40 pb-6 lg:border-0">
        <img src="@/assets/logo.svg" alt="QuizWiz Logo" />
      </div>

      <div class="mt-6 space-y-4 lg:mt-0">
        <h6 class="text-sm font-semibold">Content</h6>
        <router-link to="/quizzes" class="text-xs text-gray-600">Quizzes</router-link>
      </div>

      <div class="mt-10 space-y-4 lg:mt-0">
        <h6 class="text-sm font-semibold">Contact Us</h6>
        <div class="space-y-6">
          <p class="text-xs text-gray-600">
            Email: <a href="mailto:quizwiz@gmail.com">{{ email }}</a>
          </p>

          <p class="text-xs text-gray-600">Tel: {{ tel }}</p>
        </div>
      </div>

      <div class="mt-10 space-y-4 lg:mt-0">
        <h6 class="text-sm font-semibold">Social Media</h6>
        <div class="flex flex-col gap-6">
          <a :href="facebook" target="_blank" class="text-xs text-gray-600">Facebook</a>
          <a :href="linkedin" target="_blank" class="text-xs text-gray-600">Linkedin</a>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-300/40">
      <p
        class="px-10 py-6 font-raleway text-xs font-medium text-gray-600 lg:flex lg:justify-end lg:px-24"
      >
        &copy; {{ currentYear }} QW. All rights reserved
      </p>
    </div>
  </footer>
</template>

<script>
import toast from '@/mixins/toast.js'

import { GetSettings } from '@/services/api/resources.js'

export default {
  mixins: [toast],
  data() {
    return {
      email: '',
      tel: '',
      facebook: '',
      linkedin: '',
      currentYear: new Date().getFullYear()
    }
  },
  mounted() {
    this.getSettings()
  },
  methods: {
    async getSettings() {
      try {
        const { data } = await GetSettings()

        this.email = data.contact.email
        this.tel = data.contact.tel
        this.facebook = data.social.facebook
        this.linkedin = data.social.linkedin
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
