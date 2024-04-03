<template>
  <div class="justify-between lg:flex">
    <page-cover style="background-image: url('src/assets/images/ForgotPassword.svg')" />

    <main-content>
      <back-button />
      <forgot-form />
    </main-content>
  </div>
</template>

<script>
import PageCover from '@/components/shared/PageCover.vue'
import MainContent from '@/components/base/MainContent.vue'
import BackButton from '@/components/base/BackButton.vue'
import ForgotForm from '@/components/auth/forgot/ForgotForm.vue'

export default {
  components: {
    PageCover,
    MainContent,
    BackButton,
    ForgotForm
  }
}
</script>
