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
        'Authorization': 'Token 0272c5f1f63f4654561ba07ee0406fe25e63aef8'
    }
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
