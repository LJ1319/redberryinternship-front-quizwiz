<template>
  <div class="justify-between lg:flex">
    <div class="hidden h-screen w-1/2 lg:block">
      <img src="@/assets/images/ForgotPassword.svg" alt="" class="h-full w-full" />

      <page-logo />
    </div>

    <split-content>
      <back-button />
      <resend-form />
    </split-content>
  </div>
</template>

<script>
import PageLogo from '@/components/shared/PageLogo.vue'
import SplitContent from '@/components/base/SplitContent.vue'
import BackButton from '@/components/base/buttons/BackButton.vue'
import ResendForm from '@/components/auth/resend/ResendForm.vue'

export default {
  components: {
    PageLogo,
    SplitContent,
    BackButton,
    ResendForm
  }
}
</script>
