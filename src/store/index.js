import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 100
  },
  mutations: {
    madd(state){
      state.count++
    },
    mdel(state){
      state.count--
    }
  },
  getters: {
    computedNum(state){
      return state.count*state.count
    }
  },
  actions: {
  },
  modules: {
  }
})
