import { createApp } from 'vue'

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import 'vue-ionicons/ionicons.css';
import './assets/css/dashforge.auth.css'
import './assets/css/dashforge.css'
import './style.css'

library.add(fas, far, fab)
dom.watch();

import App from './App.vue'
import router from './routes';

const app=createApp(App)

app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
