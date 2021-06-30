import axios from "axios";
import store from '@/store'
import app from '@/main'

const apiRequest = axios.create({
  baseURL: `${process.env.VUE_APP_API_BASE_URL}`,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
});

apiRequest.interceptors.request.use(
  config => {
    store.commit('setLoader', true)
    return config;
  }, 
  error => {
    return Promise.reject(error);
  }
);

apiRequest.interceptors.response.use(
    response => {
      store.commit('setLoader', false)
      return response;
    },
    err => {
      store.commit('setLoader', false)
      console.log(err.response.data.message)
      err &&
      err.response &&
      err.response.data &&
      app.config.globalProperties.$message.error(
        typeof err.response.data.message === 'string' 
          ? err.response.data.message 
          : typeof err.response.data.error === 'string'
            ? err.response.data.error
            : "Error"
        );
      return Promise.reject(err);
    }
);

export default apiRequest;


