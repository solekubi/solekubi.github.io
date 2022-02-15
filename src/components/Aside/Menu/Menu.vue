<template lang="pug">
#page-menu
  el-menu(:uniqueOpened="true", background-color="#545c64", text-color="#fff",   active-text-color="#ffd04b", :collapse="isCollapseMenu" :default-active="currentActiveMenu.name")
    SubMenuItem(v-for="m in menus" :key="m.name" :record="m")
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { mapGetters } from "vuex"
import SubMenuItem from "./SubMenuItem.vue"

export default defineComponent({
  name: "Menu",
  components: {
    SubMenuItem,
  },
  computed: {
    ...mapGetters({
      isCollapseMenu: "app/isCollapseMenu",
      menus: "app/getMenus",
      currentActiveMenu: "app/currentActiveMenu",
    }),
  },
})
</script>
<style lang="sass" scoped>
#page-menu
  display: flex
  flex-direction: column
  height: 100%
  width: 100%
  .el-menu
    border-right: none
  .el-menu:not(.el-menu--collapse)
    height: 100%
    width: 200px
  .el-menu--collapse
    width: 64px
    height: 100%
</style>
