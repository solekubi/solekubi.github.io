<template lang="pug">
el-menu-item(v-if="show" :index="record.name" @click="handleMenuClick")
  i(:class="record.meta?.icon")
  template(#title): span {{record.meta?.title}}
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue"
import { RouteRecordRaw } from "vue-router"

export default defineComponent({
  name: "MenuItem",
  props: {
    record: {
      type: Object as PropType<RouteRecordRaw>,
    },
  },
  computed: {
    show: function () {
      return this.$props.record != undefined && (this.$props.record?.meta?.hidden == undefined || !this.$props.record.meta.hidden)
    },
  },
  methods: {
    handleMenuClick: function () {
      const record = this.$props.record as RouteRecordRaw
      this.$store.dispatch("app/setActiveMenu", {
        name: record?.name as string,
        path: record?.path as string,
        icon: record?.meta?.icon as string,
        title: record.meta?.title as string,
      })
    },
  },
})
</script>
