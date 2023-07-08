import { defineStore } from 'pinia'
import { postUsersListData, deleteUserById } from '@/service/main/system/system'
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
      console.log(deleteResult)

      // 2.重新请求数据
      this.postUserListAction()
    }
  }
})

export default useSystemStore
