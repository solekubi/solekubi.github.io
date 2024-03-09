import { useConfigStore } from '@/stores/config'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: () => {
        return { path: 'configs' }
      },
      component: () => import('@/layout/MainLayout.vue'),
      children: [
        {
          path: 'configs',
          name: 'Config',
          component: () => import('@/views/ConfigView.vue')
        },
        {
          path: 'papers',
          name: 'Paper',
          component: () => import('@/views/PaperView.vue')
        }
      ]
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('@/views/404.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { configed } = useConfigStore()
  if (!configed && to.name === 'Paper') {
    next({ path: '/' })
    return
  }
  next()
})

export default router
