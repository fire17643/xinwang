import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import Axios from 'axios'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);
Axios.interceptors.response.use(function(response) {
  return response.data;
}, function(error) {
  return Promise.reject(error);
});
Vue.prototype.axios = Axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
