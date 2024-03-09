<template>
  <div id="container" class="container">
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
        <el-popconfirm
          title="是否提交考卷?"
          @confirm="handleSubmit"
          confirm-button-text="是"
          cancel-button-text="否"
        >
          <template #reference>
            <el-button type="warning">提交</el-button>
          </template>
        </el-popconfirm>
      </div>
    </div>
    <el-divider style="margin: 12px 0" />
    <div class="body">
      <div class="body_item" v-for="item in arithmeticList" :key="item.id">
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
      <span class="demonstration"> {{ correctCnt }} / {{ configs.cnt }}</span>
      <el-rate size="large" v-model="score" allow-half disabled />
    </div>
    <template #footer>
      <div class="dialog-score">
        <el-button type="success" :icon="Check" @click="showScore = false">确认</el-button>
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
import { ElMessageBox } from 'element-plus'

const appStore = useAppStore()

const configStore = useConfigStore()

const { configs, arithmeticList } = storeToRefs(configStore)

const { completed, correctCnt, countDown } = storeToRefs(appStore)

appStore.setCountDown(configs.value.timer)

const goBack = () => {
  if (!completed.value) {
    ElMessageBox.confirm('此操作会清空已经做的题目，是否返回上一页？', '警告', {
      confirmButtonText: '确认',
      showCancelButton: false,
      closeOnClickModal: false,
      closeOnPressEscape: false,
      type: 'warning',
      center: true,
      roundButton: true
    })
      .then(() => {
        router.push({ name: 'Config' }).then(() => {
          configStore.setConfigFlag(false)
          appStore.setComplete(false)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  } else {
    router.push({ name: 'Config' }).then(() => {
      configStore.setConfigFlag(false)
      appStore.setComplete(false)
    })
  }
}

const showScore = ref(false)

const score = computed(() => {
  return Number(((correctCnt.value / configs.value.cnt) * 5).toFixed(2))
})

const handleSubmit = () => {
  showScore.value = true
  appStore.submit(arithmeticList.value)
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
  for (const { value } of arithmeticList.value) {
    if (typeof value !== 'undefined' && String(value).replace(/\s+/g, '') !== '') {
      completed++
    }
  }
  return Math.round((completed / configs.value.cnt) * 100)
})

const containerHeight = computed(() => {
  const app = document.getElementById('app')
  const container = document.getElementById('container')
  return container?.clientHeight > app?.clientHeight ? '100%' : 'auto'
})

const doFinish = () => {
  ElMessageBox.confirm('已经到时间啦！', '警告', {
    confirmButtonText: '确认',
    showCancelButton: false,
    closeOnClickModal: false,
    closeOnPressEscape: false,
    type: 'warning',
    center: true,
    showClose: false
  }).then(handleSubmit)
}
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
  width: 100%;
  height: v-bind(containerHeight);
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
    max-height: 24px;
    grid-template-columns: minmax(90px, 1fr) auto;
  }
}
</style>
