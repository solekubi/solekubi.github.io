<template lang="pug">
#aside
  Logo
  Menu
</template>
<script lang="ts">
import { defineComponent } from "vue"
import Logo from "./Logo.vue"
import Menu from "./Menu/Menu.vue"
export default defineComponent({
  name: "Aside",
  components: {
    Logo,
    Menu,
  },
  setup() {
    return {}
  },
})
</script>
<style lang="sass" scoped>
#aside
  display: flex
  flex-direction: column
  width: 100%
  height: 100%
  background-color: #545c64
</style>
