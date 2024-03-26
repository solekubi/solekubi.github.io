import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

const CACHE_CONFIGED_KEY = 'configed'

const CACHE_CONFIGE_KEY = 'confige'

export const useConfigStore = defineStore('config', () => {
  const configed = ref(Boolean(localStorage.getItem(CACHE_CONFIGED_KEY)))

  const bitOptions = ref(
    Array.from(
      Array.from({ length: 4 }, (_, idx) => idx + 2),
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
      Array.from({ length: 10 }, (_, idx) => (idx + 1) * 10),
      (i) => ({
        label: `${i}以内`,
        value: i
      })
    )
  )

  let _config = localStorage.getItem(CACHE_CONFIGE_KEY)

  if (!_config) {
    _config = {
      schema: schemaOptions.value,
      type: typeOptions.value[0],
      bit: bitOptions.value[1],
      cnt: 20,
      timer: 10
    }
  } else {
    _config = JSON.parse(_config)
  }

  const configs = reactive({ ..._config })

  const arithmeticList = ref([])

  const setConfigFlag = (flag) => {
    configed.value = flag
    localStorage.setItem(CACHE_CONFIGED_KEY, flag)
    localStorage.setItem(CACHE_CONFIGE_KEY, JSON.stringify(configs))
  }

  const resetArithmeticList = () => {
    const val = configs.type.value
    const ops = configs.schema?.map((item) => item.value)
    const bit = configs.bit.value
    const cnt = configs.cnt
    arithmeticList.value = []
    Array.from({ length: cnt }, (_, idx) => {
      const numbers = Array.from({ length: val }, (_, i) => i + 1)
      let params = Array.from(
        { length: bit },
        () => numbers[Math.floor(Math.random() * numbers.length)]
      )
      let formula = params.reduce(
        (p, c) => `${p} ${ops[Math.floor(Math.random() * ops.length)]} ${c}`
      )
      let value = eval(formula)
      while (
        value < 0 ||
        value > val ||
        arithmeticList.value.map((c) => c.formula).includes(formula)
      ) {
        params = Array.from(
          { length: bit },
          () => numbers[Math.floor(Math.random() * numbers.length)]
        )
        formula = params.reduce(
          (p, c) => `${p} ${ops[Math.floor(Math.random() * ops.length)]} ${c}`
        )
        value = eval(formula)
      }
      arithmeticList.value.push({
        id: idx + 1,
        formula,
        value: undefined
      }) 
    })
  }

  resetArithmeticList()

  const submit = async () => {
    setConfigFlag(true)
    resetArithmeticList()
  }

  return {
    configed,
    configs,
    schemaOptions,
    typeOptions,
    bitOptions,
    setConfigFlag,
    submit,
    arithmeticList,
    resetArithmeticList
  }
})
