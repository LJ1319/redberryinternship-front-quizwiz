<template>
  <input
    :type="type"
    :name="name"
    :id="name"
    :placeholder="placeholder"
    :required="isRequired"
    :class="
      classes
        ? classes
        : 'block h-14 w-full rounded-[0.625rem] border bg-white p-4 outline-none focus:ring-2 focus:ring-indigo-200'
    "
  />
</template>

<script>
export default {
  props: ['type', 'name', 'placeholder', 'isRequired', 'classes']
}
</script>
