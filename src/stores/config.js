import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  const isSetConfig = ref(false)

  const bitOptions = ref(
    Array.from(
      Array.from({ length: 2 }, (_, idx) => idx + 2),
      (i) => ({
        label: `${i}`,
        value: i
      })
    )
  )

  const schemaOptions = ref([
    {
      label: '加法',
      value: '+'
    },
    {
      label: '减法',
      value: '-'
    }
  ])

  const typeOptions = ref(
    Array.from(
      Array.from({ length: 5 }, (_, idx) => (idx + 1) * 10),
      (i) => ({
        label: `${i}以内`,
        value: i
      })
    )
  )

  const configs = reactive({
    id: undefined,
    schema: schemaOptions.value,
    type: typeOptions.value[0],
    bit: bitOptions.value[1],
    cnt: 15,
    timer: 10
  })

  const setConfigFlag = (flag) => {
    isSetConfig.value = flag
  }

  return {
    isSetConfig,
    configs,
    schemaOptions,
    typeOptions,
    bitOptions,
    setConfigFlag
  }
})
