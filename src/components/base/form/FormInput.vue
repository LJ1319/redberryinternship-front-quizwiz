<template>
  <Field v-slot="{ field, errors }" :name="name" :rules="rules" :validate-on-input="true">
    <input
      v-bind="field"
      :type="isPassword ? 'password' : 'text'"
      :id="name"
      :placeholder="placeholder"
      class="block h-14 w-full rounded-clg border bg-white p-4 outline-none focus:ring-2 focus:ring-indigo-200"
      :class="errors.length > 0 && 'border-red-300 focus:ring-0 focus:ring-opacity-0'"
    />

    <span class="absolute right-0 top-11 mx-4 my-5" v-if="errors.length > 0">
      <icon-error />
    </span>

    <span
      class="absolute right-0 top-11 mx-4 my-5"
      :class="errors.length > 0 ? 'right-6' : 'right-0'"
      v-if="type === 'password'"
    >
      <icon-hide v-if="!isPassword" v-on:click="toggleType" class="h-4" />
      <icon-show v-else v-on:click="toggleType" class="h-4" />
    </span>
  </Field>

  <error-message as="p" :name="name" class="font-inter text-xs text-red-500" />
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'
import IconError from '@/components/icons/IconError.vue'
import IconShow from '@/components/icons/IconShow.vue'
import IconHide from '@/components/icons/IconHide.vue'

export default {
  components: { IconHide, IconShow, Field, IconError, ErrorMessage },
  props: ['type', 'name', 'placeholder', 'rules'],
  data() {
    return {
      isPassword: this.type === 'password'
    }
  },
  methods: {
    toggleType() {
      this.isPassword = !this.isPassword
    }
  }
}
</script>
