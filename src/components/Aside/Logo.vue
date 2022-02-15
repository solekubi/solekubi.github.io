<template lang="pug">
#page-logo(@click="handleClick")
  el-image(src="/images/logo.png")
  span.text(v-if="!isCollapseMenu") 贷款系统
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { mapGetters } from "vuex"
import { defaultActiveMenu } from "/@/store/modules/app"
export default defineComponent({
  name: "Logo",
  computed: {
    ...mapGetters({
      isCollapseMenu: "app/isCollapseMenu",
    }),
  },
  methods: {
    handleClick: function () {
      this.$router.replace({ path: "/" })
      this.$store.dispatch("app/setActiveMenu", defaultActiveMenu)
    },
  },
})
</script>
<style lang="sass" scoped>
#page-logo
  padding: 5px
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  cursor: pointer
  .el-image
    width: 36px
    height: 36px
    object-fit: fill
  .text
    flex: 2
    color: #fff
    padding-left: 10px
    font-size: 16px
    font-weight: 700
    width: 100px
    transition: all .5s
</style>
