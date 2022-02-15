import {
  ElIcon,
  ElButton,
  ElInput,
  ElMenu,
  ElImage,
  ElTag,
  ElBreadcrumb,
  ElDropdown,
  ElAvatar,
  ElScrollbar,
  ElCard,
  ElForm,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopconfirm,
} from "element-plus"
import { App, Component } from "vue"
import "element-plus/dist/index.css"

const compList = [
  ElIcon,
  ElButton,
  ElInput,
  ElMenu,
  ElImage,
  ElTag,
  ElMenu.MenuItem,
  ElMenu.SubMenu,
  ElBreadcrumb,
  ElBreadcrumb.BreadcrumbItem,
  ElDropdown,
  ElDropdown.DropdownItem,
  ElDropdown.DropdownMenu,
  ElAvatar,
  ElScrollbar,
  ElCard,
  ElLoading,
  ElForm,
  ElForm.FormItem,
  ElPopconfirm,
]

export function registerGlobComp(app: App) {
  compList.forEach((comp: Component) => app.component(comp.name as string, comp))
  app.directive("loading", ElLoading.directive)
  app.config.globalProperties

  app.config.globalProperties.$loading = ElLoading.service
  app.config.globalProperties.$msgbox = ElMessageBox
  app.config.globalProperties.$alert = ElMessageBox.alert
  app.config.globalProperties.$confirm = ElMessageBox.confirm
  app.config.globalProperties.$prompt = ElMessageBox.prompt
  app.config.globalProperties.$notify = Notification
  app.config.globalProperties.$message = ElMessage
}
