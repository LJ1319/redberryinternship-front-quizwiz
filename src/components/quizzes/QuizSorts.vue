<template>
  <div
    class="flex flex-col gap-6 font-inter text-sm font-semibold text-gray-600 lg:w-1/3 lg:gap-8 lg:rounded-xl lg:border lg:p-4"
  >
    <span class="hidden text-purple lg:block">Sort by</span>

    <button class="flex items-center gap-4">
      <span class="flex w-4 items-center justify-center">
        <icon-arrow-up />
      </span>
      <span>A-Z</span>
    </button>

    <button class="flex items-center gap-4">
      <span class="flex w-4 items-center justify-center">
        <icon-arrow-down />
      </span>
      <span>Z-A</span>
    </button>

    <button class="flex items-center gap-4">
      <span class="flex w-4 items-center justify-center">
        <icon-diamond />
      </span>
      <span>Most Popular</span>
    </button>

    <button class="flex items-center gap-4">
      <span class="flex w-4 items-center justify-center">
        <icon-newest />
      </span>
      <span>Newest</span>
    </button>

    <button class="flex items-center gap-4">
      <span class="flex w-4 items-center justify-center">
        <icon-oldest />
      </span>
      <span>Oldest</span>
    </button>
  </div>
</template>

<script>
import IconArrowUp from '@/components/icons/IconArrowUp.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconDiamond from '@/components/icons/IconDiamond.vue'
import IconNewest from '@/components/icons/IconNewest.vue'
import IconOldest from '@/components/icons/IconOldest.vue'

export default {
  components: {
    IconArrowUp,
    IconArrowDown,
    IconDiamond,
    IconNewest,
    IconOldest
  }
}
</script>
