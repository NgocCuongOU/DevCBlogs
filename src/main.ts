import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/scss/base.scss'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/auth'

// let Auth: any

// firebase.auth().onAuthStateChanged(() => {
//   if (!Auth) {
//   }
// })
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
