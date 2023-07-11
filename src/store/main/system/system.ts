import { defineStore } from 'pinia'
import {
  postUsersListData,
  deleteUserById,
  newUserData
} from '@/service/main/system/system'
import type { ISystemState } from './type'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0
  }),
  actions: {
    async postUserListAction(queryInfo: any = {}) {
      const usersListResult = await postUsersListData(queryInfo)
      const { list, totalCount } = usersListResult.data
      this.usersList = list
      this.usersTotalCount = totalCount
    },
    async deleteUserByIdAciton(id: number) {
      const deleteResult = deleteUserById(id)

      // 2.重新请求数据
      this.postUserListAction()
    },
    async newUserAction(userInfo: any) {
      const newResult = newUserData(userInfo)
      // 添加成功以后，发送网络请求获取最新数据
      this.postUserListAction()
    }
  }
})

export default useSystemStore
