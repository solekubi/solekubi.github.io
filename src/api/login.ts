import { Store } from "vuex"
import { isTokenExpired } from "/@/tools/jwtUtils"
import { anonApi } from "/@/plugins/axios"
import { StateInterface } from "/@/store"
import { loginParam } from "../../types/login"

const Api = {
  LOGIN_URL: "/login",
  REFLESH_TOKEN: "/refreshToken",
}

export const login = (data: loginParam) => {
  return anonApi.post(Api.LOGIN_URL, { username: data.username, password: data.password })
}

export const checkToken = async (store: Store<StateInterface>) => {
  const accessToken = store.getters["token/accessToken"]

  if (!accessToken) return Promise.resolve(false)

  if (isTokenExpired(accessToken)) {
    anonApi.defaults.headers["Authorization"] = "Bearer " + store.getters["token/refreshToken"]

    return await anonApi
      .get(Api.REFLESH_TOKEN)
      .then((res) => {
        store.commit("updateToken", res)
        return true
      })
      .catch((_err) => false)
  }

  return Promise.resolve(true)
}
