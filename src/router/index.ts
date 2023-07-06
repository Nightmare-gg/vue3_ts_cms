import { createRouter, createWebHashHistory } from 'vue-router'
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系： path => component
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/main',
      component: () => import('../views/main/Main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-find/NotFind.vue')
    }
  ]
})
// 3.路由导航守卫
// 导航守卫
// 参数： to(跳转到的位置)/form(从哪里跳转过来)
// 返回值:返回值决定导航的路径（不返回或者返回undefined,默认跳转)
router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path === '/main' && !token) {
    return '/login'
  }
})

export default router
