<template>
  <div class="demo-rate-block">
    <span class="demonstration">Default</span>
    <el-countdown title="倒计时" :value="value" />
  </div>
  <div class="demo-rate-block">
    <span class="demonstration">Color for different levels</span>
    <el-rate v-model="value2" :colors="colors" />
  </div>
</template>
<script setup>
import { useConfigStore } from '@/stores/config'
import router from '@/router'
import { ref } from 'vue'

const { isSetConfig } = useConfigStore()

// if (!isSetConfig) {
//   router.push({name:"Home"})
// }

const value = ref(Date.now() + 1000 * 60 * 60 * 7)

const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
</script>

<style scoped>
.demo-rate-block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
}
.demo-rate-block:last-child {
  border-right: none;
}
.demo-rate-block .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
