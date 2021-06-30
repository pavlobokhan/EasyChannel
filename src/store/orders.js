import axios from '@/plugin/axios'

const orders = {
  state: {
    orders: [],
    ordersMeta: {
      total_count: 0,
      page: 1,
      limit: 10,
      search: ''
    }
  },
  getters: {
    orders: state => state.orders,
    ordersMeta: state => state.ordersMeta
  },
  mutations: {
    setOrders(state, value) {
      state.orders = value
    },
    setOrdersMeta(state, value) {
      state.ordersMeta = { ...state.ordersMeta, ...value }
    },
  },
  actions: {
    fetchOrders({ getters, commit }, meta = {}) {
      return new Promise((resolve, reject) => {
        axios.get(`orders`, { params: { ...getters.ordersMeta, ...meta }})
          .then((res) => {
            commit('setOrders', res.data.items)
            commit('setOrdersMeta', { total_count: res.data.total_count })
            resolve(res)
          })
          .catch(error => {
            reject(error);
          });
      })
    }
  }
};
  
export default orders;