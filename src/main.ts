import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone)

createApp(App).use(router).component('fa-icon', FontAwesomeIcon).mount('#app')
