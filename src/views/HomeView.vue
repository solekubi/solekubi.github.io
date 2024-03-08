<template>
  <el-dialog
    v-model="dialogVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    title="参数配置"
    style="max-width: 600px;min-width: 400px"
    align-center
  >
    <el-form
      :model="configs"
      label-width="auto"
      style="max-width: 600px"
      ref="formRef"
      status-icon
      :rules="rules"
    >
      <el-form-item label="题型" prop="schema">
        <el-select v-model="configs.schema" placeholder="请选择题型">
          <el-option
            v-for="item in schemaOptions"
            :key="item"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-select
          v-model="configs.type"
          multiple
          collapse-tags
          collapse-tags-tooltip
          :max-collapse-tags="3"
          placeholder="选择..."
        >
          <el-option
            v-for="item in typeOptions"
            :key="item"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="数量" prop="cnt">
        <el-input-number v-model="configs.cnt" controls-position="right" :min="10" :max="50" />
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
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="onSubmit()"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { useConfigStore } from '@/stores/config'
import { storeToRefs } from 'pinia'
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import router from '@/router'

const formRef = ref()

const configStore = useConfigStore()

const { dialogVisible, configs, schemaOptions, typeOptions } = storeToRefs(configStore)

const rules = reactive({
  schema: [{ required: true, message: '请选择题型！', trigger: 'change' }],
  type: [{ required: true, message: '请选择类型！', trigger: 'change' }],
  cnt: [{ required: true, message: '请选择数量！', trigger: 'change' }],
  timer: [{ required: true, message: '请选择计时！', trigger: 'change' }]
})

const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      configStore.updateConfigFlag(true)
      configStore.hideDialog()
      router.push({ name: 'Page' })
    } else {
      ElMessage.error('必填项不能为空')
      return false
    }
  })
}
</script>
