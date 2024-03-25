<template>
  <div class="relative">
    <form-input
      :type="isPassword ? 'password' : 'text'"
      :name="name"
      :placeholder="placeholder"
      :required="isRequired"
    />

    <span class="absolute right-0 top-0 mx-4 my-5">
      <icon-hide v-if="!isPassword" v-on:click="toggleType" class="h-4" />
      <icon-show v-else v-on:click="toggleType" class="h-4" />
    </span>
  </div>
</template>

<script>
import FormInput from '@/components/ui/form/FormInput.vue'
import IconShow from '@/components/icons/IconShow.vue'
import IconHide from '@/components/icons/IconHide.vue'

export default {
  components: {
    FormInput,
    IconShow,
    IconHide
  },
  props: ['name', 'placeholder', 'isRequired'],
  data() {
    return {
      isPassword: true
    }
  },
  methods: {
    toggleType() {
      this.isPassword = !this.isPassword
    }
  }
}
</script>
