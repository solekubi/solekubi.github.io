<template lang="pug">
.container
  .aside: Aside
  .content
    .header: Header
    .tag: Tag
    .main(v-loading="!reload"): router-view(v-if="reload") 
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { mapGetters } from "vuex"
import Aside from "/@/components/Aside/Index.vue"
import Header from "/@/components/Head/Index.vue"
import Tag from "/@/components/Tag/Index.vue"

export default defineComponent({
  name: "MainLayout",
  computed: {
    ...mapGetters({
      reload: "app/reload",
    }),
  },
  components: {
    Aside,
    Header,
    Tag,
  },
})
</script>

<style lang="sass" scoped>
.container
  @include display-flex-common
  flex-direction: row
  .aside
    @include display-flex-common
    width: auto
  .content
    @include display-grid-common
    row-gap: 2px
    min-width: 400px
    grid-template-rows: auto auto 1fr
    .header
      width: 100%
      height: 100%
    .tag
      width: 100%
      height: 100%
    .main
      width: 100%
      height: 100%
      background-color: #f0f2f5
      overflow: auto
</style>
