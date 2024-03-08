<template>
  <el-page-header title="返回" @back="goBack()">
    <template #content>
      <div class="flex">
        <span class="text-large font-600 mr-3"> {{ title }} </span>
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
    </template>
    <template #extra>
      <el-countdown format="mm:ss" :value="countDown.end" @finish="doFinish">
        <template #suffix>
          <el-button size="small" type="primary" class="ml-2" @click="handleSubmit">提交</el-button>
        </template>
      </el-countdown>
    </template>
    <div class="flex" style="padding-top: 5px">
      <el-row :gutter="20" v-for="item in calcList" :key="item.id" style="padding-bottom: 5px">
        <el-col>
          <el-input v-model="item.value">
            <template #prepend>
              <span style="width: 50px">{{ item.formula }}</span>
            </template>
          </el-input>
        </el-col>
      </el-row>
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
import { ref } from 'vue'
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
  for (const { formula, value } of calcList.value) {
    if (eval(formula) == Number(value)) {
      correct.value++
    }
  }
  appStore.setScore(correct.value, configs.cnt)
  showScore.value = true
}

const doFinish = () => {}
</script>
<style scoped>
.dialog-score {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
