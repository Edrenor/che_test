import Vue from 'vue';
import Vuex from 'vuex'
import store from './store';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import router from './router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  Vuex,
  store,
  axios,
  VueAxios,
  render: h => h(App),
  router,
}).$mount('#app')
