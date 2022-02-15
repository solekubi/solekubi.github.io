<template lang="pug">
#page-setting
  el-dropdown(trigger="click")
    span.el-dropdown-link 
      el-avatar.avatar(size="medium" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png")
      span.text Admin <i class="el-icon-arrow-down el-icon--right"></i>
    template(#dropdown)
      el-dropdown-menu
        el-dropdown-item(icon="el-icon-user") 个人中心
        el-dropdown-item(icon="el-icon-switch-button" @click="logout") 退出登录
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router"
import { ElMessageBox } from "element-plus"

const { push } = useRouter()

const logout = () => {
  ElMessageBox.confirm("确认退出系统?", "登出", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => push({ name: "Login" }))
    .catch((_err) => {})
}
</script>
<style lang="sass" scoped>
#page-setting
  @include display-grid-common
  grid-auto-flow: column
  margin-right:  10px
  .el-dropdown-link
      display: flex
      cursor: pointer
      justify-items: center
      align-items: center
      flex-wrap: nowrap
      .text
        padding-left: 10px
</style>
