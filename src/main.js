import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import axios from "axios";
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.prototype.$http = axios.create({
    baseURL: "https://console.ucrawler.app/api/",
    headers: {
        'Authorization': 'Token 233173988f7fe3ab9ed8a8e515f14fb3469fd4f2'
    }
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
