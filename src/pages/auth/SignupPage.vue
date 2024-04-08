<template>
  <div class="justify-between lg:flex">
    <page-cover style="background-image: url('src/assets/images/SignupCover.svg')" />

    <split-content>
      <back-button />
      <signup-form />
    </split-content>
  </div>
</template>

<script>
import PageCover from '@/components/shared/PageCover.vue'
import SplitContent from '@/components/base/SplitContent.vue'
import BackButton from '@/components/base/buttons/BackButton.vue'
import SignupForm from '@/components/auth/signup/SignupForm.vue'

export default {
  components: {
    PageCover,
    SplitContent,
    BackButton,
    SignupForm
  }
}
</script>
