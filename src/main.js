import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import 'virtual:windi.css'
import 'virtual:windi-devtools'

import './assets/styles/base.css'

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
