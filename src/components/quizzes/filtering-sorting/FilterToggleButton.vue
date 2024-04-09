<template>
  <button
    class="group flex h-10 w-20 shrink-0 items-center justify-center gap-2 rounded-clg border border-black border-gray-500/60 px-1 hover:border-0 hover:bg-slate-100 focus:border-purple focus:bg-slate-100 focus:outline-none"
  >
    <icon-settings class="group-hover:hidden group-focus:hidden" />
    <icon-settings class="hidden group-hover:block group-focus:block" color="#4B69FD" />
    <span class="font-inter text-sm text-gray-500 group-hover:text-purple group-focus:text-purple">
      Filter
    </span>
  </button>
</template>

<script>
import IconSettings from '@/components/icons/IconSettings.vue'

export default {
  components: {
    IconSettings
  }
}
</script>
