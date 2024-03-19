import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const completed = ref(false)

  const countDown = reactive({
    minute: 0,
    second: 0,
    format: '00:00'
  })

  const correctCnt = ref(0)

  const mistakes = ref([])

  const audioRef = ref(null)

  const playHecai = (score) => {
    audioRef.value.src = score >= 3 ? '/audio/hecai.mp3':'/audio/hedaocai.wav'
    audioRef.value.loop = false
    audioRef.value.play()
  }

  const setComplete = (flag) => {
    completed.value = flag
  }

  const setCountDown = (value, end) => {
    countDown.minute = Math.floor(Number(value))
    countDown.second = Math.ceil((Number(value) % 1) * 60)
    countDown.format =
      `${countDown.minute}`.padStart(2, '0') + ':' + `${countDown.second}`.padStart(2, '0')
    const interval = setInterval(() => {
      if (countDown.second === 0 && countDown.minute === 0) {
        audioRef.value && audioRef.value.stop()
        clearInterval(interval)
        end()
      }
      if (countDown.second <= 0 && countDown.minute > 0) {
        countDown.second = 59
        countDown.minute--
      } else if (countDown.second > 0) {
        countDown.second--
      }
      if(countDown.minute === 0 && countDown.second == 10){
        audioRef.value.src = '/audio/countdown.mp3'
        audioRef.value.loop = true
        audioRef.value.play()    
      }
      countDown.format =
        `${countDown.minute}`.padStart(2, '0') + ':' + `${countDown.second}`.padStart(2, '0')
    }, 1000)

    const stop = () => {
      if (interval) {
        clearInterval(interval)
      }
    }
    return stop
  }

  const submit = async (arithmeticList) => {
    correctCnt.value = 0
    mistakes.value = []
    for (const { formula, value } of arithmeticList) {
      const correctValue = eval(formula)
      if (eval(formula) == Number(value)) {
        ++correctCnt.value
      } else {
        mistakes.value.push({ formula, value, correctValue })
      }
    }
    setComplete(true)
  }

  return {
    completed,
    correctCnt,
    countDown,
    mistakes,
    audioRef,
    setComplete,
    setCountDown,
    playHecai,
    submit
  }
})
