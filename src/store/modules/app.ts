import { nextTick } from "@vue/runtime-core"
import { RouteRecordRaw } from "vue-router"
import { ActionTree, GetterTree, MutationTree } from "vuex"
import { StateInterface } from "../index"
import { asyncRoute } from "/@/router/router"
import { getBreadcrumbs } from "/@/tools/baseUtils"

export interface ActiveMenuInfo {
  path: string
  name: string
  title: string
  icon: string
}

export type TabInfo = ActiveMenuInfo

export enum TabAction {
  ADD_TAB,
  DELETE_TAB,
  CLOSE_LEFT_TAB,
  CLOLE_RIGHT_TAB,
  CLOLE_OTHER_TAB,
  CLOSE_ALL_TAB,
}

export declare type AppInfo = {
  isCollapseMenu: boolean
  menus: Array<RouteRecordRaw>
  currentActiveMenu: ActiveMenuInfo
  tabs: Array<ActiveMenuInfo>
  currentActiveTab: ActiveMenuInfo
  reload: boolean
}

export const defaultActiveMenu: ActiveMenuInfo = {
  path: "/home",
  name: "Home",
  title: "首页",
  icon: "el-icon-house",
}

export const defaultActiveTab = {
  ...defaultActiveMenu,
}

const defaultTabs: Array<TabInfo> = [defaultActiveTab]

export const STORAGE_KEY_PREFIX = "APP_"

const currentActiveMenuStorge = localStorage.getItem(STORAGE_KEY_PREFIX + "currentActiveMenu")

const currentActiveTabStorge = localStorage.getItem(STORAGE_KEY_PREFIX + "currentActiveTab")

const currentTabsStorge = localStorage.getItem(STORAGE_KEY_PREFIX + "tabs")

const state: AppInfo = {
  isCollapseMenu: false,
  menus: asyncRoute,
  currentActiveMenu: currentActiveMenuStorge ? JSON.parse(currentActiveMenuStorge) : defaultActiveMenu,
  tabs: currentTabsStorge ? JSON.parse(currentTabsStorge) : defaultTabs,
  currentActiveTab: currentActiveTabStorge ? JSON.parse(currentActiveTabStorge) : defaultActiveTab,
  reload: true,
}

const getters: GetterTree<AppInfo, StateInterface> = {
  isCollapseMenu: (state: AppInfo) => state.isCollapseMenu,
  getMenus: (state: AppInfo) => state.menus,
  currentActiveMenu: (state: AppInfo) => state.currentActiveMenu,
  breadcrumbs: (state: AppInfo) => getBreadcrumbs(state.menus, state.currentActiveMenu),
  currentActiveTab: (state: AppInfo) => state.currentActiveTab,
  tabs: (state: AppInfo) => state.tabs,
  reload: (state: AppInfo) => state.reload,
}

// todo 待测试
const isTabExistInMenus = (menus: Array<RouteRecordRaw>, tabInfo: TabInfo): boolean => {
  if (menus == undefined) return false
  let flag = false
  for (const m of menus) {
    if (m.path === tabInfo.path) {
      return true
    }
    if (m.children && m.children.length > 0) {
      flag = isTabExistInMenus(m.children, tabInfo)
    }
    if (flag) break
  }
  return flag
}

const actions: ActionTree<AppInfo, StateInterface> = {
  //todo
  genMenus: ({ commit }, payload) => commit("commitCollapseMenu", payload),
  setActiveMenu: ({ commit }, payload: ActiveMenuInfo) => {
    commit("commitSetActiveMenu", { ...payload })
    commit("commitSetActiveTab", { ...payload })
    commit("commitAddTab", { ...payload })
  },
  setActiveTab: ({ state, commit }, payload: TabInfo) => {
    // 判断tab是否在menu里面，如果是，则设置
    if (isTabExistInMenus(state.menus, payload)) {
      commit("commitSetActiveMenu", { ...payload })
    }
    commit("commitSetActiveTab", { ...payload })
    commit("commitAddTab", { ...payload })
  },
  resetAllState: ({ commit }) => {
    commit("token/resetToken", null, { root: true })
  },
}

const mutations: MutationTree<AppInfo> = {
  commitSetMenus: (state: AppInfo, payload: Array<RouteRecordRaw>) => state.menus.splice(0, state.menus.length, ...payload),
  commitCollapseMenu: (state: AppInfo) => (state.isCollapseMenu = !state.isCollapseMenu),
  commitSetActiveMenu: (state: AppInfo, payload: ActiveMenuInfo) => {
    state.currentActiveMenu = payload
    localStorage.setItem(STORAGE_KEY_PREFIX + "currentActiveMenu", JSON.stringify(payload))
  },
  commitSetActiveTab: (state: AppInfo, payload: TabInfo) => {
    state.currentActiveTab = payload
    localStorage.setItem(STORAGE_KEY_PREFIX + "currentActiveTab", JSON.stringify(payload))
  },
  commitAddTab: (state: AppInfo, payload: TabInfo) => {
    const index = state.tabs.findIndex((t) => t.path === payload.path)
    if (index === -1) {
      state.tabs.push(payload)
      localStorage.setItem(STORAGE_KEY_PREFIX + "tabs", JSON.stringify(state.tabs))
    }
  },
  commitDelTab: (state: AppInfo, payload: TabInfo) => {
    const index = state.tabs.findIndex((t) => t.path === payload.path)
    if (index > 0) {
      state.tabs.splice(index, 1)
      localStorage.setItem(STORAGE_KEY_PREFIX + "tabs", JSON.stringify(state.tabs))
    }
  },
  commitDelRightTab: (state: AppInfo) => {
    const index = state.tabs.findIndex((t) => t.path === state.currentActiveTab.path)
    const tabLenght = state.tabs.length
    if (index > -1) {
      state.tabs.splice(index + 1, tabLenght - index)
      localStorage.setItem(STORAGE_KEY_PREFIX + "tabs", JSON.stringify(state.tabs))
    }
  },
  commitDelLeftTab: (state: AppInfo) => {
    const index = state.tabs.findIndex((t) => t.path === state.currentActiveTab.path)
    if (index > 1) {
      state.tabs.splice(1, index - 1)
      localStorage.setItem(STORAGE_KEY_PREFIX + "tabs", JSON.stringify(state.tabs))
    }
  },
  commitDelOtherTab: (state: AppInfo) => {
    const tab = state.tabs.find((t) => t.path === state.currentActiveTab.path)
    const tabLenght = state.tabs.length
    if (tab && tabLenght > 1) {
      state.tabs.splice(1, tabLenght - 1) && tab.path !== defaultActiveTab.path && state.tabs.push(tab)
      localStorage.setItem(STORAGE_KEY_PREFIX + "tabs", JSON.stringify(state.tabs))
    }
  },
  commitDelAllTab: (state: AppInfo) => {
    state.tabs.splice(1, state.tabs.length)
    localStorage.setItem(STORAGE_KEY_PREFIX + "tabs", JSON.stringify(state.tabs))
  },
  commitReload: (state: AppInfo) => {
    state.reload = false
    nextTick(() => (state.reload = true))
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
