<template>
  <div class="justify-between lg:flex">
    <div class="hidden h-screen w-1/2 lg:block">
      <img src="@/assets/images/SignupCover.svg" alt="" class="h-full w-full" />

      <page-logo />
    </div>

    <split-content>
      <back-button />
      <signup-form />
    </split-content>
  </div>
</template>

<script>
import PageLogo from '@/components/shared/PageLogo.vue'
import SplitContent from '@/components/base/SplitContent.vue'
import BackButton from '@/components/base/buttons/BackButton.vue'
import SignupForm from '@/components/auth/signup/SignupForm.vue'

export default {
  components: {
    PageLogo,
    SplitContent,
    BackButton,
    SignupForm
  }
}
</script>
