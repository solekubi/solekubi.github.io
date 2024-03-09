<template>
  <el-page-header title="返回" @back="goBack()">
    <template #content>
      <div class="header__content">
        <span class="text-large font-600 mr-3"> {{ title }} </span>
        <div>
          <el-tag
            style="margin: 2px"
            size="small"
            v-for="(item, idx) in configs.schema"
            :key="item"
            :type="idx == 0 ? 'success' : 'danger'"
          >
            {{ item.label }}</el-tag
          >
        </div>
      </div>
    </template>
    <template #extra>
      <div class="header__extra">
        <el-progress type="circle" indeterminate :percentage="percentage" :color="colors" width="50" />
        <el-countdown format="mm:ss" :value="countDown.end" @finish="doFinish" />
        <el-button size="small" type="warning" @click="handleSubmit" round>提交</el-button>
      </div>
    </template>
    <div class="header__body">
      <el-input v-for="item in calcList" :key="item.id" v-model="item.value">
        <template #prepend>
          <span>{{ item.formula + ' = ' }}</span>
        </template>
      </el-input>
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
  </el-page-header>
</template>
<script setup>
import router from '@/router'
import { useConfigStore } from '@/stores/config'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import { computed, ref } from 'vue'
import { Check } from '@element-plus/icons-vue'
const appStore = useAppStore()

const { configs } = useConfigStore()

const { score, countDown, calcList } = storeToRefs(appStore)

const title = configs.type?.label

appStore.setCountDown(configs.cnt)

appStore.setCalcList(
  configs.type.value ?? 0,
  configs.schema?.map((item) => item.value),
  configs.bit.value ?? 2,
  configs.cnt ?? 0
)

const goBack = () => {
  router.back()
}

const showScore = ref(false)

const correct = ref(0)

const handleSubmit = () => {
  correct.value = 0
  showScore.value = true
  for (const { formula, value } of calcList.value) {
    if (eval(formula) == Number(value)) {
      appStore.setScore(++correct.value, configs.cnt)
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
    if (typeof value !== 'undefined' && String(value).replace(/\s+/g,"") !== '') {
      completed++
    }
  }
  return ((completed / configs.cnt ) * 100).toFixed(1)
})

const doFinish = () => {}
</script>
<style lang="scss" scoped>
.dialog-score {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  &__content {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  &__extra {
    display: grid;
    grid-template-columns: repeat(2, 1fr) auto;
    column-gap: 10px;
    justify-items: center;
    align-items: center;
  }
  &__body {
    display: grid;
    padding-top: 10px;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    grid-template-rows: auto;
    row-gap: 10px;
  }
}
</style>
