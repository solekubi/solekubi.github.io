<template lang="pug">
#page-header
  .fold-icon(@click="$store.commit('app/commitCollapseMenu')"): i.el-icon-s-fold
  el-breadcrumb.breadcrumb(separator="/")
    el-breadcrumb-item(v-for="b in breadcrumbs" :key="b.title") {{b.title}}
  Setting
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { mapGetters } from "vuex"
import Setting from "./Setting.vue"
export default defineComponent({
  name: "Header",
  components: {
    Setting,
  },
  computed: {
    ...mapGetters({
      breadcrumbs: "app/breadcrumbs",
    }),
  },
})
</script>
<style lang="sass">
#page-header
  @include display-grid-common
  grid-template-columns: auto 1fr auto
  grid-auto-flow: column
  .fold-icon
    @include display-flex-common
    justify-content: center
    width: 40px
    cursor: pointer
    .el-icon-s-fold
      font-size: 25px
  .breadcrumb
    justify-self: start
    padding-left: 5px
</style>
