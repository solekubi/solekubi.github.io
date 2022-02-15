import { createApp } from "vue"
import App from "./App.vue"
import { setupStore } from "/@/store"
import { setupRouter } from "/@/router"
import { setGlobPlugins } from "/@/plugins"
import { registerGlobComp } from "/@/components/registerGlobComp"
import "/@/css/app.sass"

const app = createApp(App)

registerGlobComp(app)

setupStore(app)

setupRouter(app)

setGlobPlugins(app)

app.mount("#app")
