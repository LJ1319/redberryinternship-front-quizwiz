<template>
  <div
    class="fixed bottom-0 left-0 flex h-24 w-full items-center gap-2.5 bg-white px-4 py-5 text-sm shadow-cxl lg:static lg:h-10 lg:w-max lg:gap-4 lg:bg-gray-150/70 lg:p-0 lg:shadow-none"
  >
    <button
      class="h-full w-2/3 rounded-clg bg-purple font-semibold text-white focus:outline-none lg:w-28"
    >
      Confirm
    </button>

    <button
      class="h-full w-1/3 rounded-clg border font-semibold text-gray-600 focus:outline-none lg:hidden"
    >
      Cancel
    </button>

    <div class="hidden h-3 w-[1px] bg-black/40 lg:block"></div>
    <button class="hidden text-gray-500 focus:outline-none lg:block">Reset all filters</button>
  </div>
</template>
