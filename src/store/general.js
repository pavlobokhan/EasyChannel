const general = {
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

export default general;