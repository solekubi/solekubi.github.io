import { ActionTree, GetterTree, MutationTree } from "vuex"
import { StateInterface } from ".."
import { login } from "/@/api/login"
import { decodeTokenString } from "/@/tools/jwtUtils"
import { loginParam } from "/#/login"
import { TokenKey } from "/#/token"

const key = "TokenStrogeKey"

const defaultToken = {
  accessToken: "",
  refreshToken: "",
}

const strogeToken = localStorage.getItem(key)

const strogeTokenKey: TokenKey = strogeToken ? JSON.parse(strogeToken) : undefined

const state: TokenKey = {
  accessToken: strogeTokenKey?.accessToken ?? defaultToken.accessToken,
  refreshToken: strogeTokenKey?.refreshToken ?? defaultToken.refreshToken,
}

const getters: GetterTree<TokenKey, StateInterface> = {
  accessToken: (state: TokenKey) => state.accessToken,
  refreshToken: (state: TokenKey) => state.refreshToken,
  tokenInfo: (state: TokenKey) => decodeTokenString(state.accessToken),
}

const actions: ActionTree<TokenKey, StateInterface> = {
  singIn: async ({ commit }, params: loginParam) => {
    await login(params).then((res) => {
      commit("updateToken", res.data)
    })
  },
}

const mutations: MutationTree<TokenKey> = {
  updateToken: (state: TokenKey, payload: TokenKey) => {
    Object.assign(state, payload)
    localStorage.setItem(key, JSON.stringify(payload))
  },
  resetToken: (state: TokenKey) => {
    Object.assign(state, defaultToken)
    localStorage.removeItem(key)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
