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

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
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
      console.log(this.userInfo)
      // 4.根据角色请求用户的权限（菜单menus)
      const userMenusResult = await getUserMenusByRoleId(this.userInfo.role.id)
      this.userMenus = userMenusResult.data
      console.log(this.userMenus)

      // 5.跳转首页
      router.push('/main')
    }
  }
})

export default useLoginStore
