import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Root',
      redirect: () => {return {path:"homes"}},
      component: () => import('@/layout/MainLayout.vue'),
      children: [
        {
          path: 'homes',
          name: 'Home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'pages',
          name: 'Page',
          component: () => import('@/views/PageView.vue')
        }
      ]
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('@/views/404.vue')
    }
  ]
})

export default router
