<template>
  <page-backdrop v-on:click="redirect" />

  <div class="justify-between lg:flex">
    <page-cover style="background-image: url('src/assets/images/ForgotPassword.svg')" />

    <page-main-content>
      <back-button />
      <drag-handler />
      <forgot-form />
    </page-main-content>
  </div>
</template>

<script>
import PageBackdrop from '@/components/shared/PageBackdrop.vue'
import PageMainContent from '@/components/ui/PageMainContent.vue'
import DragHandler from '@/components/ui/DragHandler.vue'
import BackButton from '@/components/ui/BackButton.vue'
import PageCover from '@/components/shared/PageCover.vue'
import ForgotForm from '@/components/auth/forgot/ForgotForm.vue'

export default {
  components: {
    PageMainContent,
    ForgotForm,
    PageBackdrop,
    DragHandler,
    PageCover,
    BackButton
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'landing' })
    }
  }
}
</script>
