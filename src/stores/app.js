import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const isComplete = ref(false)

  const countDown = reactive({
    start: 0,
    end: 0
  })

  const score = ref(3)

  const calcList = ref([])

  const setComplete = (flag) => {
    isComplete.value = flag
  }

  const setCountDown = (value) => {
    const t = Date.now()
    countDown.start = t
    countDown.end = countDown.start + 1000 * 60 * (value ?? 0)
  }

  const setScore = (value, total) => {
    score.value = Number(((value / total) * 5).toFixed(2))
  }

  const setCalcList = (val, ops, bit, cnt) => {
    calcList.value = Array.from({ length: cnt }, (_,idx) => {
      const numbers = Array.from({ length: val }, (_, i) => i + 1)
      let params = Array.from(
        { length: bit },
        () => numbers[Math.floor(Math.random() * numbers.length)]
      )
      let formula = params.reduce(
        (p, c) => `${p} ${ops[Math.floor(Math.random() * ops.length)]} ${c}`
      )
      let value = eval(formula)
      while (value < 0 || value > val || calcList.value.map(c => c.formula).includes(formula)) {
        params = Array.from(
          { length: bit },
          () => numbers[Math.floor(Math.random() * numbers.length)]
        )
        formula = params.reduce((p, c) => `${p} ${ops[Math.floor(Math.random() * ops.length)]} ${c}`)
        value = eval(formula)
      }
      return {
        id: idx +1,
        formula,
        value: undefined
      }
    })
  }
  return {
    isComplete,
    score,
    countDown,
    calcList,
    setCalcList,
    setComplete,
    setCountDown,
    setScore
  }
})
