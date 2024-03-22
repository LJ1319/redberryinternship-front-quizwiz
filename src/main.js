import { createApp } from 'vue'
import App from '@/App.vue'

import router from '@/router/index.js'

import '@/assets/main.css'

import PageHeader from '@/components/shared/PageHeader.vue'
import PageFooter from '@/components/shared/PageFooter.vue'

const app = createApp(App)

app.use(router)

app.component('page-header', PageHeader)
app.component('page-footer', PageFooter)

app.mount('#app')
