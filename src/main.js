import {createApp} from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'
import router from './router1.js'
const app = createApp(App)
app.use(router)
app.component('DatePicker', Vue3PersianDatetimePicker)
app.mount('#app')





