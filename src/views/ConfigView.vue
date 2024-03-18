<template>
  <el-container class="container">
    <el-header>配置参数</el-header>
    <el-main>
      <el-form :model="configs" label-width="auto" ref="formRef" status-icon :rules="rules">
        <el-form-item label="题型" prop="schema">
          <el-select
            v-model="configs.schema"
            collapse-tags
            collapse-tags-tooltip
            :max-collapse-tags="3"
            multiple
            placeholder="请选择题型"
          >
            <el-option
              v-for="item in schemaOptions"
              :key="item"
              :label="item.label"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="位数" prop="bit">
          <el-select v-model="configs.bit" placeholder="选择...">
            <el-option v-for="item in bitOptions" :key="item" :label="item.label" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-select v-model="configs.type" placeholder="选择...">
            <el-option v-for="item in typeOptions" :key="item" :label="item.label" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="数量" prop="cnt">
          <el-input-number v-model="configs.cnt" controls-position="right" :min="5" :max="60" />
        </el-form-item>
        <el-form-item label="计时" prop="timer">
          <el-input
            v-model.number="configs.timer"
            style="width: 150px"
            type="number"
            controls-position="right"
            :min="1"
            :max="60"
          >
            <template #append>
              <span>分钟</span>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer class="container__footer">
      <el-button type="success" @click="onSubmit" round>下一步</el-button>
    </el-footer>
  </el-container>
</template>

<script setup>
import { useConfigStore } from '@/stores/config'
import { storeToRefs } from 'pinia'
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import router from '@/router'
import * as lebaoWasm from "@solekubi/lebao-wasm"
import { useAppStore } from '@/stores/app'

const formRef = ref()

const configStore = useConfigStore()

const appStore = useAppStore()

const { configs, schemaOptions, typeOptions, bitOptions } = storeToRefs(configStore)

const rules = reactive({
  schema: [{ required: true, message: '请选择题型！', trigger: 'change' }],
  bit: [{ required: true, message: '请选择类型！', trigger: 'change' }],
  type: [{ required: true, message: '请选择类型！', trigger: 'change' }],
  cnt: [{ required: true, message: '请选择数量！', trigger: 'change' }],
  timer: [{ required: true, message: '请选择计时！', trigger: 'change' }]
})

const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      configStore.submit().then(()=> {
        router.push({ name: 'Paper' }).then(()=> {
          appStore.playCountDown()
        })
      })     
    } else {
      ElMessage.error('必填项不能为空')
      return false
    }
  })
}

lebaoWasm.greet("123")

</script>
<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  &__footer {
    display: grid;
    justify-content: end;
  }
}
</style>
