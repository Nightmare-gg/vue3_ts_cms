import { defineStore } from 'pinia'
import {
  postUsersListData,
  deleteUserById,
  newUserData,
  editUserData
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
      const deleteResult = await deleteUserById(id)

      // 2.重新请求数据
      this.postUserListAction()
    },
    async newUserAction(userInfo: any) {
      const newResult = await newUserData(userInfo)
      // 添加成功以后，发送网络请求获取最新数据
      this.postUserListAction()
    },
    // 编辑用户
    async editUserAction(id: number, userInfo: any) {
      const editResult = await editUserData(id, userInfo)
      console.log(editResult)

      // 编辑成功以后，发送网络请求获取最新数据
      this.postUserListAction()
    }
  }
})

export default useSystemStore
