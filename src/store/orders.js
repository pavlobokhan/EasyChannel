import axios from '@/plugin/axios'

const orders = {
  state: {
    loader: false
  },
  getters: {
    loader: state => state.loader
  },
  mutations: {
    setLoader (state, value) {
      state.loader = !!value
    }
  },
  actions: {
  }
};
  
export default orders;