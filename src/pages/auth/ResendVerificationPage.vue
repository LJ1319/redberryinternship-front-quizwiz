<template>
  <div class="justify-between lg:flex">
    <page-cover src="src/assets/images/ForgotPassword.svg" />

    <split-content>
      <back-button />
      <resend-form />
    </split-content>
  </div>
</template>

<script>
import PageCover from '@/components/shared/PageCover.vue'
import SplitContent from '@/components/base/SplitContent.vue'
import BackButton from '@/components/base/buttons/BackButton.vue'
import ResendForm from '@/components/auth/resend/ResendForm.vue'

export default {
  components: {
    PageCover,
    SplitContent,
    BackButton,
    ResendForm
  }
}
</script>
