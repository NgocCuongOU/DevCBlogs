import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/scss/base.scss'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/auth'

let app: unknown

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    const app = createApp(App)

    app.use(createPinia())
    app.use(router)

    app.mount('#app')
  }
})
