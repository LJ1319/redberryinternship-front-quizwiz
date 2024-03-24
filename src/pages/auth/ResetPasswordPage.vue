<template>
  <page-backdrop v-on:click="redirect" />

  <div class="justify-between lg:flex">
    <page-cover style="background-image: url('src/assets/images/ForgotPassword.svg')" />

    <page-main-content>
      <back-button />
      <drag-handler />
      <reset-form />
    </page-main-content>
  </div>
</template>

<script>
import PageMainContent from '@/components/ui/PageMainContent.vue'
import DragHandler from '@/components/ui/DragHandler.vue'
import PageCover from '@/components/shared/PageCover.vue'
import BackButton from '@/components/ui/BackButton.vue'
import PageBackdrop from '@/components/shared/PageBackdrop.vue'
import ResetForm from '@/components/auth/reset/ResetForm.vue'

export default {
  components: {
    PageMainContent,
    ResetForm,
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
