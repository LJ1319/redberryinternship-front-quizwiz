import { createApp } from 'vue'
import App from '@/App.vue'

import router from '@/router/index.js'
import defineGlobalValidators from '@/utils/defineGlobalValidators.js'

import '@/assets/main.css'

const app = createApp(App)

app.use(router)
app.use(defineGlobalValidators)

app.mount('#app')
