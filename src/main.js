// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import store from './store';
import jquery from 'jquery';
import './assets/css/bootstrap.min.css';
import './assets/js/bootstrap.min';

Vue.prototype.axios = axios;
Vue.prototype.router = router;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
