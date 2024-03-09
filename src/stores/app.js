import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const completed = ref(false)

  const countDown = reactive({
    start: 0,
    end: 0
  })

  const correctCnt = ref(0)

  const setComplete = (flag) => {
    completed.value = flag
  }

  const setCountDown = (value) => {
    const t = Date.now()
    countDown.start = t
    countDown.end = countDown.start + 1000 * 60 * (value ?? 0)
  }

  const submit = async (arithmeticList) => {
    correctCnt.value = 0
    for (const { formula, value } of arithmeticList) {
      if (eval(formula) == Number(value)) {
        ++correctCnt.value
      }
    }
    setComplete(true)
  }

  return {
    completed,
    correctCnt,
    countDown,
    setComplete,
    setCountDown,
    submit
  }
})
