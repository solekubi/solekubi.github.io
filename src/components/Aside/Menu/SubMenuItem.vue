<template lang="pug">
template(v-if="show")
  el-sub-menu(v-if="hasChildren(record)" :index="record.name")
    template(#title)
        i(:class="record.meta?.icon")
        span {{record.meta?.title}}
    SubMenuItem(v-for="c in record.children" :key="c.name" :record="c")
  MenuItem(v-else :record="record")
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue"
import { RouteRecordRaw } from "vue-router"
import MenuItem from "./MenuItem.vue"
export default defineComponent({
  name: "SubMenuItem",
  components: {
    MenuItem,
  },
  props: {
    record: {
      type: Object as PropType<RouteRecordRaw>,
    },
  },
  methods: {
    hasChildren: function (r: RouteRecordRaw) {
      return r.children != undefined && r.children.length > 0
    },
  },
  computed: {
    show: function () {
      return this.$props.record != undefined && (this.$props.record?.meta?.hidden == undefined || !this.$props.record.meta.hidden)
    },
  },
})
</script>
