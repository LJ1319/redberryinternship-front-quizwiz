import { createApp } from 'vue'
import App from '@/App.vue'

import router from '@/router/index.js'

import { defineRule } from 'vee-validate'
import { emailRegex } from '@/config/regex.js'

import '@/assets/main.css'

const app = createApp(App)

defineRule('required', (value) => {
  if (!value) {
    return 'This field is required'
  }

  return true
})

defineRule('email', (value) => {
  if (!emailRegex.test(value)) {
    return 'This field must be a valid email'
  }

  return true
})

defineRule('min', (value, [limit]) => {
  if (value.length < limit) {
    return `This field must be at least ${limit} characters`
  }

  return true
})

defineRule('confirmed', (value, [target], ctx) => {
  if (value === ctx.form[target]) {
    return true
  }
  return 'Passwords must match'
})

app.use(router)

app.mount('#app')
