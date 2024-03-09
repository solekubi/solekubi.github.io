<template>
  <div class="container">
    <div class="header">
      <div class="header__left">
        <el-button :icon="Back" link size="large" @click="goBack">返回</el-button>
      </div>
      <div class="header__mid">
        <el-countdown format="mm:ss" :value="countDown.end" @finish="doFinish" />
      </div>
      <div class="header__right">
        <el-progress
          type="circle"
          indeterminate
          :percentage="percentage"
          :color="colors"
          :width="50"
        />
        <el-button size="small" type="warning" @click="handleSubmit" round>提交</el-button>
      </div>
    </div>
    <el-divider style="margin: 12px 0" />
    <div class="body">
      <div class="body_item" v-for="item in calcList" :key="item.id">
        <el-tag class="header__body_item_left" type="primary"> {{ item.formula + ' =' }}</el-tag>
        <el-input
          class="header__body_item_right"
          type="number"
          size="small"
          controls-position="right"
          v-model="item.value"
        />
      </div>
    </div>
  </div>
  <el-dialog
    v-model="showScore"
    align-center
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <div class="dialog-score">
      <span class="demonstration"> {{ correct }} / {{ configs.cnt }}</span>
      <el-rate size="large" v-model="score" allow-half disabled />
    </div>
    <template #footer>
      <div class="dialog-score">
        <el-button type="success" :icon="Check" circle @click="showScore = false" />
      </div>
    </template>
  </el-dialog>
</template>
<script setup>
import router from '@/router'
import { useConfigStore } from '@/stores/config'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import { computed, ref } from 'vue'
import { Check, Back } from '@element-plus/icons-vue'
const appStore = useAppStore()

const { configs } = useConfigStore()

const { countDown, calcList } = storeToRefs(appStore)

appStore.setCountDown(configs.cnt)

appStore.setCalcList(
  configs.type.value ?? 0,
  configs.schema?.map((item) => item.value),
  configs.bit.value ?? 2,
  configs.cnt ?? 0
)

const goBack = () => {
  router.push({ path: '/' })
}

const showScore = ref(false)

const correct = ref(0)

const score = computed(() => {
  return Number(((correct.value / configs.cnt) * 5).toFixed(2))
})

const handleSubmit = () => {
  correct.value = 0
  showScore.value = true
  for (const { formula, value } of calcList.value) {
    if (eval(formula) == Number(value)) {
      ++correct.value
    }
  }
}

const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 }
]

const percentage = computed(() => {
  let completed = 0
  for (const { value } of calcList.value) {
    if (typeof value !== 'undefined' && String(value).replace(/\s+/g, '') !== '') {
      completed++
    }
  }
  return Math.round((completed / configs.cnt) * 100)
})

const doFinish = () => {}
</script>
<style lang="scss" scoped>
.dialog-score {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  display: grid;
  grid-template-rows: repeat(2, auto) 1fr;
  overflow: auto;
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
  &__mid {
    justify-self: center;
    align-self: center;
  }
  &__right {
    justify-self: end;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-items: center;
    align-items: center;
    column-gap: 5px;
  }
}
.body {
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  column-gap: 5px;
  row-gap: 10px;
  &_item {
    display: grid;
    grid-template-columns: minmax(90px, 1fr) auto;
  }
}
</style>
