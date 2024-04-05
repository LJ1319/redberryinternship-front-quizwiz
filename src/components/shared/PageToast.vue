<template>
  <div
    v-if="show"
    :class="
      status === 'success'
        ? 'border-emerald-500'
        : status === 'warning'
          ? 'border-yellow-400'
          : status === 'error'
            ? 'border-red-500'
            : ''
    "
    class="absolute left-0 top-10 z-50 flex h-24 w-80 items-center gap-3 rounded-lg border-b-4 bg-gray-800 px-4 py-3 shadow-cxl lg:left-auto lg:right-14"
  >
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
</template>

<script>
import IconToastSuccess from '@/components/icons/IconToastSuccess.vue'
import IconToastWarning from '@/components/icons/IconToastWarning.vue'
import IconToastError from '@/components/icons/IconToastError.vue'

export default {
  components: {
    IconToastSuccess,
    IconToastWarning,
    IconToastError
  },
  props: ['show', 'status', 'title', 'text']
}
</script>
