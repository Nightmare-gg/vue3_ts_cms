import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getCache('token') ?? '',
    name: ''
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.账号登录，获取token等信息
      const loginResult = await accountLoginRequest(account)
      this.id = loginResult.data.id
      this.name = loginResult.data.name
      this.token = loginResult.data.token
      // 2.进行本地缓存
      localCache.setCache('token', this.token)
    }
  }
})

export default useLoginStore
