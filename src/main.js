import './assets/main.css'
import { Tabs, Tab } from 'vue3-tabs-component'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Vue3Prism from 'vue3-prism/lib/Vue3Prism.common.js'
import 'vue3-prism/lib/Vue3Prism.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('tabs', Tabs)
app.component('tab', Tab)

app.use(Vue3Prism)

app.mount('#app')
