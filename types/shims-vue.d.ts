/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component

  declare module "@vue/runtime-core" {
    import { ComponentCustomProperties } from "vue"
    import { Store } from "vuex"
    import { StateInterface } from "/@/store"
    import { AxiosInstance } from "axios"
    import { ElLoading, ElMessage, ElMessageBox, ElNotification } from "element-plus"
    export interface ComponentCustomProperties {
      $store: Store<StateInterface>
      $Api: AxiosInstance
      $loading: ElLoading.service
      $msgbox: ElMessageBox
      $alert: ElMessageBox.alert
      $confirm: ElMessageBox.confirm
      $prompt: ElMessageBox.prompt
      $notify: Notification
      $message: ElMessage
    }
  }

  declare module "vue-router" {
    interface RouteMeta {
      roles?: Array<string>
      title: string
      icon: string
      hidden?: boolean
    }
  }
}
