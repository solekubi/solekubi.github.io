<template lang="pug">
#login-page
  el-card(shadow="always" style="max-width:400px")
    template(#header)
      .clearfix: span 用户登录
    el-form.form-page(:model="form" ref="loginForm" :rules="rules" label-width="80px" :inline="false" size="normal")
      el-form-item(prop="username")
        el-input(v-model="form.username" prefix-icon="el-icon-user")
      el-form-item(prop="password")
        el-input(v-model="form.password" show-password prefix-icon="el-icon-lock")
      el-form-item
        el-button(type="primary" @click="doLogin" style="width:100%") 登录
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { ComponentElRef } from "/#/global"
import { reactive, ref } from "vue"
import { useStore } from "/@/store"
import { useRouter } from "vue-router"
import { ElMessage } from "element-plus"

export default defineComponent({
  setup() {
    const loginForm = ref<(ComponentElRef & { validate: (callback: (valid: boolean) => void) => void }) | null>(null)

    const form = reactive({
      username: "admin",
      password: "123456",
    })

    const rules = {
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: ["blur"],
        },
      ],
    }

    const { state, dispatch } = useStore()

    const { push } = useRouter()

    const doLogin = () => {
      loginForm?.value?.validate((valid: boolean) => {
        if (valid) {
          dispatch("token/singIn", { username: form.username, password: form.password })
            .then(() => {
              push({ name: state.app.currentActiveMenu?.name ?? "Home" })
            })
            .catch((_err) => {
              ElMessage({
                message: "用户名或密码输入有误!",
                type: "error",
              })
            })
        }
      })
    }

    return {
      loginForm,
      form,
      rules,
      doLogin,
    }
  },
})
</script>
<style lang="sass">
#login-page
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 100%
  .form-page
    display: flex
    flex-direction: column
    align-items: stretch
    width: 100%
    height: 100%
  .el-form-item__content
    margin-left: 0px!important
</style>
