import axios from '@/plugin/axios'

const alerts = {
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
  
export default alerts;