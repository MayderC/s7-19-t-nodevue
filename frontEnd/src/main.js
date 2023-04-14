import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Notifications from 'vue3-vt-notifications'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(Notifications)
app.use(router)
app.mount('#app')
