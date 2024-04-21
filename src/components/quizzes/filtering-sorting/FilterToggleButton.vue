<template>
  <button
    :class="classObject"
    class="group relative flex h-10 w-20 shrink-0 items-center justify-center gap-2 rounded-clg px-1 focus:outline-none"
  >
    <icon-settings
      class="group-hover:hidden group-focus:hidden"
      :color="hasFilters ? '#000' : '#667085'"
    />
    <icon-settings class="hidden group-hover:block group-focus:block" color="#4B69FD" />
    <span
      :class="hasFilters ? 'text-black' : 'text-gray-500'"
      class="font-inter text-sm group-hover:text-purple group-focus:text-purple"
    >
      Filter
    </span>

    <span
      v-if="hasFilters"
      class="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white"
    >
      <span
        class="flex h-6 w-6 items-center justify-center rounded-full bg-black font-inter text-xs font-bold text-white group-hover:bg-purple group-focus:bg-purple"
      >
        {{ count }}
      </span>
    </span>
  </button>
</template>

<script>
import IconSettings from '@/components/icons/IconSettings.vue'

export default {
  components: {
    IconSettings
  },
  props: ['count'],
  computed: {
    hasFilters() {
      return this.count > 0
    },
    classObject() {
      return {
        'border-2 border-black hover:bg-slate-100 focus:border-purple hover:border-purple':
          this.hasFilters,
        'border border-gray-500/60 hover:border-0 hover:bg-slate-100 focus:border-purple focus:bg-slate-100':
          !this.hasFilters
      }
    }
  }
}
</script>
