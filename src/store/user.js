import UserPhoto from '@/assets/user.png'

const user = {
  state: {
    user: {
        name: 'Ashly',
        photo: UserPhoto
    }
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    setUser (state, value) {
      state.user = value
    }
  },
  actions: {
  }
};
  
export default user;