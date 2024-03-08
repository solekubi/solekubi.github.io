import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  const dialogVisible = ref(true)

  const isSetConfig = ref(false)

  const configs = reactive({
    schema: '',
    type: [],
    cnt: 15,
    timer: 10
  })

  const schemaOptions = ref([
    {
      label: '加法',
      value: 'PLUS'
    },
    {
      label: '减法',
      value: 'MINUS'
    },
    {
      label: '加减混合',
      value: 'ALL'
    }
  ])

  const typeOptions = ref(
    Array.from(
      Array.from({ length: 50 }, (_, idx) => (idx + 1) * 10),
      (i) => ({
        label: `${i}`,
        value: i
      })
    )
  )

  const hideDialog = () => {
    dialogVisible.value = false
  }

  const updateConfigFlag = (flag) => {
    isSetConfig.value = flag
  }

  return {
    isSetConfig,
    dialogVisible,
    configs,
    schemaOptions,
    typeOptions,
    hideDialog,
    updateConfigFlag
  }
})
