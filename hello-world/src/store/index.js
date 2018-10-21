import Vue from 'vue'
import Vuex from 'vuex'
import attendance from './modules/attendance'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   'stateValue': {id: '实打实打算'},
   'count': 0
  },
  mutations,
  actions,
  modules: {
   attendance
  }
})
