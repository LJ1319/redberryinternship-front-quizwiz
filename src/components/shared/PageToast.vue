<template>
  <teleport to="body">
    <div
      v-if="show"
      class="fixed left-0 top-6 z-50 flex h-24 w-80 items-center rounded-lg bg-gray-800 shadow-c3xl lg:left-auto lg:right-24 lg:top-10"
    >
      <div class="flex items-center gap-3 px-4 py-3">
        <div class="absolute -left-16 -top-16 h-52 w-52">
          <div
            class="h-full w-full"
            :style="[
              success && successStyleObject,
              warning && warningStyleObject,
              error && errorStyleObject
            ]"
          ></div>
        </div>

        <icon-toast-success v-if="success" class="shrink-0" />
        <icon-toast-warning v-if="warning" class="shrink-0" />
        <icon-toast-error v-if="error" class="shrink-0" />

        <div>
          <h2 class="font-raleway font-bold text-white">{{ title }}</h2>
          <p class="font-inter text-sm text-stone-300">{{ text }}</p>
        </div>
      </div>

      <div
        ref="progressBar"
        :class="classObject"
        class="absolute bottom-0 h-1.5 w-full rounded-b-lg"
      ></div>
    </div>
  </teleport>
</template>

<script>
import IconToastSuccess from '@/components/icons/IconToastSuccess.vue'
import IconToastWarning from '@/components/icons/IconToastWarning.vue'
import IconToastError from '@/components/icons/IconToastError.vue'

import { animateProgressBar } from '@/utils/helpers.js'

export default {
  components: {
    IconToastSuccess,
    IconToastWarning,
    IconToastError
  },
  props: ['show', 'status', 'title', 'text'],
  data() {
    return {
      successStyleObject: {
        background: `radial-gradient(50% 50% at 50% 50%, rgba(0, 237, 81, 0.12) 0%, rgba(0, 237, 123, 0) 100%)`
      },
      warningStyleObject: {
        background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 212, 38, 0.11) 0%, rgba(255, 212, 38, 0) 100%)`
      },
      errorStyleObject: {
        background: `radial-gradient(50% 50% at 50% 50%, rgba(240, 66, 72, 0.13) 0, rgba(240, 66, 72, 0) 100%)`
      }
    }
  },
  computed: {
    success() {
      return this.status === 'success'
    },
    warning() {
      return this.status === 'warning'
    },
    error() {
      return this.status === 'error'
    },
    classObject() {
      return {
        'bg-emerald-500': this.success,
        'bg-yellow-400': this.warning,
        'bg-red-500': this.error
      }
    }
  },
  updated() {
    const interval = setInterval(() => {
      if (this.$refs.progressBar) {
        animateProgressBar(this.$refs.progressBar, 2000)

        clearInterval(interval)
      }
    }, 50)
  }
}
</script>
