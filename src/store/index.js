import { createStore } from 'vuex'
import general from './general'

export default createStore({

  state: {
  },

  getters: {
    get (state, data) {
      return state[data]
    }
  },

  mutations: {
    set (state, data) {
      state[data[0]] = data[1]
    }
  },

  modules: {
    general
  }
})
