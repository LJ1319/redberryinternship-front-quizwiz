<template>
  <h1>QuizListingPage</h1>

  <logout-form>
    <form-logout-button />
  </logout-form>
</template>

<script>
import LogoutForm from '@/components/auth/logout/LogoutForm.vue'
import FormLogoutButton from '@/components/base/form/FormLogoutButton.vue'

export default {
  components: {
    FormLogoutButton,
    LogoutForm
  }
}
</script>
