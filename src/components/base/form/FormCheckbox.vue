<template>
  <label :for="name" class="flex items-center gap-3">
    <span class="relative flex items-center justify-center">
      <Field
        v-slot="{ field }"
        type="checkbox"
        :name="name"
        :value="true"
        :unchecked-value="false"
        :rules="rules"
      >
        <input
          v-bind="field"
          type="checkbox"
          :id="name"
          class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border checked:border-0 checked:bg-black focus:outline-none focus:ring-1 focus:ring-indigo-200"
        />

        <icon-check class="pointer-events-none absolute hidden stroke-white peer-checked:block" />
      </Field>
    </span>

    <span class="font-inter text-sm text-gray-700">{{ text }}</span>
  </label>

  <error-message :name="name" class="font-inter text-sm text-red-500" />
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'
import IconCheck from '@/components/icons/IconCheck.vue'

export default {
  components: {
    Field,
    IconCheck,
    ErrorMessage
  },
  props: ['name', 'text', 'rules']
}
</script>
