import { loginAPI, getValidationAPI } from '@/api/login'
export default {
  namespaced: true,
  state: {
    token: null, // 可以为''吗
    clientToken: '',
    validationImg: ''
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_clientToken(state, clientToken) {
      state.clientToken = clientToken
    },
    SET_ValidationImg(state, validationImg) {
      state.validationImg = validationImg
    }
  },
  actions: {
    async loginAction({ commit }, loginData) {
      const { data } = await loginAPI(loginData)
      console.log(data.token)
      commit('SET_TOKEN', data.token)
    },
    async valiDation({ commit }, clientToken) {
      const res = await getValidationAPI(clientToken)
      commit('SET_clientToken', clientToken)
      commit('SET_ValidationImg', res.request.responseURL)
    }

  }
}
