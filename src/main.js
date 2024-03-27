import { createApp } from 'vue'
import App from '@/App.vue'

import router from '@/router/index.js'
import veevalidate from '@/plugins/veevalidate/index.js'

import '@/assets/main.css'

const app = createApp(App)

app.use(router)
app.use(veevalidate)

app.mount('#app')
