<template>
  <h1>QuizListingPage</h1>

  <page-toast :show="toast.show" :status="toast.status" :title="toast.title" :text="toast.text" />
</template>

<script>
import PageToast from '@/components/shared/PageToast.vue'
import toast from '@/mixins/toast.js'

export default {
  components: { PageToast },
  mixins: [toast],
  mounted() {
    if (history.state.toast) {
      this.setToastData(history.state.toast)
      this.toast.hide()
    }
  }
}
</script>
