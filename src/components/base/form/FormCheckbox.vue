<template>
  <Field
    as="div"
    class="flex items-center gap-3"
    v-slot="{ field }"
    :name="name"
    type="checkbox"
    :value="true"
    :unchecked-value="false"
    :rules="rules"
  >
    <input
      v-bind="field"
      type="checkbox"
      :name="name"
      :id="name"
      :value="true"
      class="peer relative h-5 w-5 appearance-none rounded-full border checked:border-0 checked:bg-black focus:outline-none focus:ring-1 focus:ring-indigo-200"
    />

    <icon-check class="pointer-events-none absolute mx-1 hidden peer-checked:block" />
    <form-label :for="name" :text="text" />
  </Field>

  <error-message :name="name" class="font-inter text-sm text-[#F04438]" />
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'
import IconCheck from '@/components/icons/IconCheck.vue'
import FormLabel from '@/components/base/form/FormLabel.vue'

export default {
  components: {
    Field,
    FormLabel,
    IconCheck,
    ErrorMessage
  },
  props: ['name', 'text', 'rules']
}
</script>
