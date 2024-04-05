<template>
  <h1>QuizListingPage</h1>

  <page-toast :show="toast.show" :status="toast.status" :title="toast.title" :text="toast.text" />
</template>

<script>
import PageToast from '@/components/shared/PageToast.vue'

export default {
  components: { PageToast },
  data() {
    return {
      toast: {
        show: false,
        status: '',
        title: '',
        text: '',
        hide() {
          setTimeout(() => (this.show = false), 4000)
        }
      }
    }
  },
  mounted() {
    if (history.state.toast) {
      this.toast = {
        ...history.state.toast,
        hide: this.toast.hide
      }

      this.toast.hide()
    }
  }
}
</script>
