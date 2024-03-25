<template>
  <div class="justify-between lg:flex">
    <page-cover style="background-image: url('src/assets/images/ForgotPassword.svg')" />

    <main-content>
      <reset-form />
    </main-content>
  </div>
</template>

<script>
import PageCover from '@/components/shared/PageCover.vue'
import MainContent from '@/components/ui/MainContent.vue'
import ResetForm from '@/components/auth/reset/ResetForm.vue'

export default {
  components: {
    PageCover,
    MainContent,
    ResetForm
  }
}
</script>
