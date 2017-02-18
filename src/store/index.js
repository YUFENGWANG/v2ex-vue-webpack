import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    hotData: []
  },
  actions: {

  },
  mutations: {
    saveHotData (state, payload) {
      state.hotData = payload
    }
  }
})

export default store
