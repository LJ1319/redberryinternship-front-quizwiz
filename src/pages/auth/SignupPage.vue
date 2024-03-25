<template>
  <div class="justify-between lg:flex">
    <page-cover style="background-image: url('src/assets/images/SignupCover.svg')" />

    <main-content>
      <back-button />
      <signup-form />
    </main-content>
  </div>
</template>

<script>
import PageCover from '@/components/shared/PageCover.vue'
import MainContent from '@/components/ui/MainContent.vue'
import BackButton from '@/components/ui/BackButton.vue'
import SignupForm from '@/components/auth/signup/SignupForm.vue'

export default {
  components: {
    PageCover,
    MainContent,
    BackButton,
    SignupForm
  }
}
</script>
