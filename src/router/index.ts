import { App } from "vue"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { checkToken } from "/@/api/login"
import { asyncRoute } from "./router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Root",
    component: () => import("/@/layout/MainLayout.vue"),
    redirect: "/home",
    children: asyncRoute,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("/@/views/login/Index.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    name: "NotFound",
    component: () => import("/@/views/error/Error404.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// config router
export function setupRouter(app: App<Element>) {
  app.use(router)

  const LoginList = ["Login"]

  const witheList = [...LoginList, "NotFound"]

  const store = app.config.globalProperties.$store

  router.beforeEach(async (to, from, next) => {
    if (witheList.includes(to.name as string)) {
      LoginList.includes(to.name as string) && (await store.dispatch("app/resetAllState"))
      next()
    } else {
      if (!(await checkToken(store))) {
        next({ name: "Login" })
      } else {
        next()
      }
    }
  })
}

export default router
