import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowUp,
  faArrowDown,
  faChartLine,
  faCode,
  faDiagramProject,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faArrowUp,
  faArrowDown,
  faChartLine,
  faCode,
  faDiagramProject,
  faFileLines
)

createApp(App).use(router).component('fa-icon', FontAwesomeIcon).mount('#app')
