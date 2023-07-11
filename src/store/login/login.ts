import { defineStore } from 'pinia'
import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenusByRoleId
} from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-menus'
import useMainStore from '@/store/main/main'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: []
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.账号登录，获取token等信息
      const loginResult = await accountLoginRequest(account)
      const id = loginResult.data.id
      this.token = loginResult.data.token
      // 2.进行本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token)
      // 3.获取登录用户的详细信息（role信息）
      const userInfoResult = await getUserInfoById(id)
      this.userInfo = userInfoResult.data
      // 4.根据角色请求用户的权限（菜单menus)
      const userMenusResult = await getUserMenusByRoleId(this.userInfo.role.id)
      this.userMenus = userMenusResult.data

      // 本地缓存用户信息和权限信息
      localCache.setCache('userInfo', this.userInfo)
      localCache.setCache('userMenus', this.userMenus)

      // 发送网络请求获取角色和部门信息
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()

      // 2.动态添加路由
      const routes = mapMenusToRoutes(this.userMenus)
      routes.forEach((route) => router.addRoute('main', route))
      // 5.跳转首页
      router.push('/main')
    },

    loadLocalCacheAction() {
      // 1.用户进行刷新默认加载数据
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenus')
      // 当用户处于登录状态时
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus

        const mainStore = useMainStore()
        mainStore.fetchEntireDataAction()

        // 2.动态添加路由
        const routes = mapMenusToRoutes(userMenus)
        routes.forEach((route) => router.addRoute('main', route))
      }
    }
  }
})

export default useLoginStore
