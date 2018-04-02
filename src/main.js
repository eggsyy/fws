// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueBeauty from 'vue-beauty'
import 'vue-beauty/package/style/vue-beauty.min.css'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex);
Vue.config.productionTip = false;

Vue.use(vueBeauty);
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
