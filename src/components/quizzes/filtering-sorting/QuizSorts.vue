<template>
  <div
    class="flex flex-col gap-4 px-6 py-4 font-inter text-sm font-semibold text-gray-600 lg:w-1/3 lg:rounded-xl lg:border lg:p-4"
  >
    <span class="hidden text-purple lg:block">Sort by</span>

    <sort-action text="A-Z" value="a-z" order_column="name" order_direction="asc">
      <icon-arrow-up />
    </sort-action>

    <sort-action text="Z-A" value="z-a" order_column="name" order_direction="desc">
      <icon-arrow-down />
    </sort-action>

    <sort-action
      text="Most popular"
      value="popular"
      order_column="users_count"
      order_direction="desc"
    >
      <icon-diamond />
    </sort-action>

    <sort-action text="Newest" value="newest" order_column="created_at" order_direction="desc">
      <icon-newest />
    </sort-action>

    <sort-action text="Oldest" value="oldest" order_column="created_at" order_direction="asc">
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
