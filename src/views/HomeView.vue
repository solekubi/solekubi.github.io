<template>
  <el-dialog
    v-model="centerDialogVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    title="参数配置"
    width="500"
    align-center
  >
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="题型">
        <el-select v-model="form.schema" placeholder="请选择题型">
          <el-option label="加法" value="PLUS" />
          <el-option label="减法" value="MINUS" />
          <el-option label="加减混合" value="ALL" />
        </el-select>
      </el-form-item>
      <el-form-item label="类型">
        <el-select
          v-model="form.type"
          multiple
          collapse-tags
          collapse-tags-tooltip
          :max-collapse-tags="3"
          placeholder="选择..."
        >
          <el-option
            v-for="item in selectOptions"
            :key="item"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="数量">
        <el-input-number v-model="form.cnt" controls-position="right" :min="10" :max="50" />
      </el-form-item>
      <el-form-item label="定时">
        <el-input v-model="form.timer" style="width:150px" type="number"  controls-position="right" :min="1" :max="60">
          <template #append>
            <span>分钟</span>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive } from 'vue'

const centerDialogVisible = ref(true)

const form = reactive({
  schema: 'PLUS',
  type: [],
  cnt: 15,
  timer: 10
})

const selectOptions = ref([
  {
    label: '10',
    value: 10
  },
  {
    label: '20',
    value: 20
  }
])

const onSubmit = () => {
  console.log('submit!')
}
</script>
