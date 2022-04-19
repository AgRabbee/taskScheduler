import Vue from 'vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
    el: '#app',
    router
})
