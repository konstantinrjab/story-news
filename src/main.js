import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import axios from "axios";
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles/main.css';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.prototype.$http = axios.create({
    baseURL: "https://console.ucrawler.app/api/",
    headers: {
        'Authorization': 'Token 4878ea8e351bdeafd90eb01cf95b28fec30b3679'
    }
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
