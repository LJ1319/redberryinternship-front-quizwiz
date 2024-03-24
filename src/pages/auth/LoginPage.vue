<template>
  <page-backdrop v-on:click="redirect" />

  <div class="justify-between lg:flex">
    <page-cover style="background-image: url('src/assets/images/LoginCover.svg')" />

    <page-main-content>
      <back-button />
      <drag-handler />
      <login-form />
    </page-main-content>
  </div>
</template>

<script>
import PageMainContent from '@/components/ui/PageMainContent.vue'
import LoginForm from '@/components/auth/login/LoginForm.vue'
import PageBackdrop from '@/components/shared/PageBackdrop.vue'
import DragHandler from '@/components/ui/DragHandler.vue'
import PageCover from '@/components/shared/PageCover.vue'
import BackButton from '@/components/ui/BackButton.vue'

export default {
  components: {
    PageMainContent,
    LoginForm,
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
