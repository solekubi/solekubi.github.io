import { RouteRecordRaw } from "vue-router"
import { ActiveMenuInfo } from "../store/modules/app"

export const getBreadcrumbs = (menus: Array<RouteRecordRaw>, currentActiveMenu: ActiveMenuInfo) => {
  const arr: Array<ActiveMenuInfo> = []
  for (const e of menus) {
    arr.push({
      name: e.name as string,
      title: e.meta?.title as string,
      icon: e.meta?.icon as string,
      path: e.path as string,
    })

    if (e.name === currentActiveMenu.name) {
      break
    }

    if (!e.children || e.children.length === 0) {
      arr.splice(0, arr.length)
      continue
    }
    getsubBreadcrumbs(arr, e.children, currentActiveMenu)
    if (arr.length > 1) {
      break
    } else {
      arr.splice(0, arr.length)
    }
  }

  return arr
}

const getsubBreadcrumbs = (arr: Array<ActiveMenuInfo>, children: Array<RouteRecordRaw>, currentActiveMenu: ActiveMenuInfo) => {
  for (const e of children) {
    arr.push({
      name: e.name as string,
      title: e.meta?.title as string,
      icon: e.meta?.icon as string,
      path: e.path as string,
    })

    if (e.name === currentActiveMenu.name) {
      break
    }

    if (!e.children || e.children.length === 0) {
      arr.splice(arr.length - 1, 1)
      continue
    }
    getsubBreadcrumbs(arr, e.children, currentActiveMenu)
  }
}
