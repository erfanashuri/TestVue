import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'
import {changeTheme} from './assets/themechanger.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
changeTheme()

const app = createApp(App)

app.use(router)

app.mount('#app')