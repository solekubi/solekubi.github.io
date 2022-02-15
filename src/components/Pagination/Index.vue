<template lang="pug">
  el-pagination(
    v-if="showPagination"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="pageSizes"
    :page-size="pageSize"
    :layout="layout"
    :total="total"
    :hide-on-single-page="hidePageOnSiglePage")
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from "vue"
const props = defineProps({
  showPagination: {
    type: Boolean,
    default() {
      return true
    },
  },
  hidePageOnSiglePage: {
    type: Boolean,
    default() {
      return false
    },
  },
  pageSizes: {
    type: Array,
    default() {
      return [10, 20, 50, 100]
    },
  },
  pageSize: {
    type: Number,
    default() {
      return 20
    },
  },
  layout: {
    type: String,
    default() {
      return "total,prev, pager, next, jumper,sizes"
    },
  },
  total: {
    type: Number,
    default() {
      return 0
    },
  },
  currentPage: {
    type: Number,
    default() {
      return 1
    },
  },
})

const emit = defineEmits(["update:pageSize", "update:page", "change"])

const handleSizeChange = function (size: number) {
  emit("update:pageSize", size)
  emit("change", { page: props.currentPage, pageSize: size })
}

const handleCurrentChange = function (currenPage: number) {
  emit("update:page", currenPage)
  emit("change", { page: currenPage, pageSize: props.pageSize })
}
</script>

<style lang="sass" scoped>
.el-pagination
  display: flex
  justify-content: center
  padding: 10px
  flex-wrap: wrap
</style>
