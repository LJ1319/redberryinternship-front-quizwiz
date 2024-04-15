<template>
  <div
    class="flex flex-col gap-6 px-6 py-4 font-inter text-sm font-semibold text-gray-600 lg:w-1/3 lg:rounded-xl lg:border lg:p-4"
  >
    <span class="hidden text-purple lg:block">Sort by</span>

    <sort-action name="A-Z">
      <icon-arrow-up />
    </sort-action>

    <sort-action name="Z-A">
      <icon-arrow-down />
    </sort-action>

    <sort-action name="Most popular">
      <icon-diamond />
    </sort-action>

    <sort-action name="Newest">
      <icon-newest />
    </sort-action>

    <sort-action name="Oldest">
      <icon-oldest />
    </sort-action>
  </div>
</template>

<script>
import SortAction from '@/components/quizzes/filtering-sorting/SortAction.vue'
import IconArrowUp from '@/components/icons/IconArrowUp.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import IconDiamond from '@/components/icons/IconDiamond.vue'
import IconNewest from '@/components/icons/IconNewest.vue'
import IconOldest from '@/components/icons/IconOldest.vue'

export default {
  components: {
    SortAction,
    IconArrowUp,
    IconArrowDown,
    IconDiamond,
    IconNewest,
    IconOldest
  }
}
</script>
