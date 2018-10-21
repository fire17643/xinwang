export default {
  namespaced: true,
  state: {
    mod: 33,
    ss: 1,
    getData: 'no'
  },
  mutations: {
    childCr(state, data) {
      state.mod = data
    },
    ss(state) {
      state.ss++
    }
  },
  actions: {
    getData() {
      // console.log(context)
      // context.state.getData = data
      // alert(data)
      // setTimeout(() => {
      // 	commit('attendance/getData', data)
      // }, 300)
    }
  },
  getters: {}
}
