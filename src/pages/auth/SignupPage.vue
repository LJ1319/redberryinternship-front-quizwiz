<template>
  <page-backdrop v-on:click="redirect" />

  <div class="justify-between lg:flex">
    <page-cover style="background-image: url('src/assets/images/SignupCover.svg')" />

    <page-main-content>
      <back-button />
      <drag-handler />
      <signup-form />
    </page-main-content>
  </div>
</template>

<script>
import PageMainContent from '@/components/ui/PageMainContent.vue'
import SignupForm from '@/components/auth/signup/SignupForm.vue'
import PageBackdrop from '@/components/shared/PageBackdrop.vue'
import DragHandler from '@/components/ui/DragHandler.vue'
import PageCover from '@/components/shared/PageCover.vue'
import BackButton from '@/components/ui/BackButton.vue'

export default {
  components: {
    PageMainContent,
    SignupForm,
    PageBackdrop,
    DragHandler,
    PageCover,
    BackButton
  },
  methods: {
    redirect() {
      this.$router.push(-1)
    }
  }
}
</script>
