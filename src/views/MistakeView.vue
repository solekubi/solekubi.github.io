<template>
  <div class="container">
    <div class="header">
      <div class="header__left">
        <el-button :icon="Back" link size="large" @click="goBack">返回</el-button>
      </div>
    </div>
    <el-divider style="margin: 12px 0" />
    <div class="body" ref="page">
      <el-table
        class="body__table"
        :data="mistakes"
        stripe 
        border 
        :highlight-current-row="true"
        :style="{
          width: '100%',
          height: pageHeight
        }"
      >
        <el-table-column fixed align="center" prop="formula" label="公式" />
        <el-table-column align="center" prop="value" label="错误" />
        <el-table-column align="center" prop="correctValue" label="正确" />
      </el-table>
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import router from '@/router'
import { Back } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'

const appStore = useAppStore()

const { mistakes } = storeToRefs(appStore)

const page = ref()

const pageHeight = ref()

onMounted(() => {
  pageHeight.value = `${page?.value.clientHeight - 50}px`
})

const goBack = () => {
  router.push({ name: 'Config' })
}
</script>
<style scoped>
.container {
  display: grid;
  grid-template-rows: repeat(2, auto) 1fr;
  overflow: auto;
  width: 100%;
  height: 100%;
}
.header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  &__left {
    justify-self: start;
    align-self: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    column-gap: 2px;
  }
}
.body {
  overflow: auto;
  display: grid;
  column-gap: 5px;
  row-gap: 10px;
  width: 100%;
  height: 100%;
}
</style>
