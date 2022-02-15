import axios, { AxiosError } from "axios"
import { App } from "vue"

const CancelToken = axios.CancelToken

const source = CancelToken.source()

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 300000,
  cancelToken: source.token,
})

const anonApi = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 300000,
})

const errorHandle = (err: AxiosError) => {
  if (axios.isCancel(err)) {
    throw new Error("Request is Cancel!")
  }
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  return config
}, errorHandle)

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, errorHandle)

// 添加响应拦截器
anonApi.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, errorHandle)

export function setUpAxios(app: App<Element>) {
  app.use({
    install: (app: App, _options: any[]) => {
      app.config.globalProperties.$api = api
    },
  })
}

export { api, anonApi }
