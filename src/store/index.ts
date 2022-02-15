import { App, InjectionKey } from "vue"
import { createStore, ModuleTree, Store as VuexStore, useStore as vuexUseStore } from "vuex"
import { TokenKey } from "/#/token"
import { AppInfo } from "./modules/app"

export interface StateInterface {
  app: AppInfo
  token: TokenKey
}

export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol("vuex-key")

const modulesFiles = require.context("./modules", false, /\.ts$/)

const modules = modulesFiles.keys().reduce((modules: ModuleTree<StateInterface>, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1")
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export function setupStore(app: App<Element>) {
  const store = createStore<StateInterface>({
    modules: modules,
  })
  app.use(store, storeKey)
}

export function useStore() {
  return vuexUseStore(storeKey)
}
