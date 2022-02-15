import { App } from "vue"
import { setUpAxios } from "./axios"
import { setUpMock } from "/mock/index"

export function setGlobPlugins(app: App<Element>) {
  setUpAxios(app)

  setUpMock()
}
