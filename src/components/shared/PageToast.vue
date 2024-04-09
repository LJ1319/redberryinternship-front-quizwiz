<template>
  <div
    v-if="show"
    class="absolute left-0 top-6 z-50 flex h-24 w-80 items-center rounded-lg bg-gray-800 shadow-cxl lg:left-auto lg:right-24 lg:top-10"
  >
    <div class="flex items-center gap-3 px-4 py-3">
      <div class="absolute -left-16 -top-16 h-52 w-52">
        <div
          v-if="status === 'success'"
          class="h-full w-full"
          style="
            background: radial-gradient(
              50% 50% at 50% 50%,
              rgba(0, 237, 81, 0.12) 0%,
              rgba(0, 237, 123, 0) 100%
            );
          "
        ></div>

        <div
          v-if="status === 'warning'"
          class="h-full w-full"
          style="
            background: radial-gradient(
              50% 50% at 50% 50%,
              rgba(255, 212, 38, 0.11) 0%,
              rgba(255, 212, 38, 0) 100%
            );
          "
        ></div>

        <div
          v-if="status === 'error'"
          class="h-full w-full"
          style="
            background: radial-gradient(
              50% 50% at 50% 50%,
              rgba(240, 66, 72, 0.13) 0%,
              rgba(240, 66, 72, 0) 100%
            );
          "
        ></div>
      </div>

      <icon-toast-success v-if="status === 'success'" class="shrink-0" />
      <icon-toast-warning v-if="status === 'warning'" class="shrink-0" />
      <icon-toast-error v-if="status === 'error'" class="shrink-0" />

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
  computed: {
    classObject() {
      return {
        'bg-emerald-500': this.status === 'success',
        'bg-yellow-400': this.status === 'warning',
        'bg-red-500': this.status === 'error'
      }
    }
  },
  mounted() {
    const interval = setInterval(() => {
      if (this.$refs.progressBar) {
        animateProgressBar(this.$refs.progressBar, 3000)

        clearInterval(interval)
      }
    }, 50)
  }
}
</script>
