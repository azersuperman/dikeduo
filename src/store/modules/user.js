import { loginAPI, getValidationAPI } from '@/api/login'

export default {
  namespaced: true,
  state: {
    token: null, // 可以为''吗
    id: ''
  },
  mutations: {
    GET_TOKEN(state, token) {
      state.token = token
    },
    GET_ID(state, id) {
      state.id = id
    }
  },
  actions: {
    async loginAction({ commit }, loginData) {
      const { data } = await loginAPI(loginData)
      console.log(data)
      commit('GET_TOKEN', data)
    },
    async valiDation({ commit }, id) {
      console.log(id)
      const { data } = await getValidationAPI(id)
      console.log(data)
      commit('GET_ID', data)
    }
  }
}
