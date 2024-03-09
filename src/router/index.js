import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Root',
      redirect: '/homes',
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
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
