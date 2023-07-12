import { defineStore } from 'pinia'
import {
  postUsersListData,
  deleteUserById,
  newUserData,
  editUserData,
  postPageListData,
  deletePageById,
  newPageData,
  editPageData
} from '@/service/main/system/system'
import type { ISystemState } from './type'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0,
    pageList: [],
    pageTotalCount: 0
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
    },
    async postPageListAction(pageName: string, queryInfo: any = {}) {
      const pageListResult = await postPageListData(pageName, queryInfo)
      const { list, totalCount } = pageListResult.data
      this.pageList = list
      this.pageTotalCount = totalCount
    },
    async deletePageByIdAction(pageName: string, id: number) {
      const deleteResult = await deletePageById(pageName, id)

      // 2.重新请求数据
      this.postPageListAction(pageName)
    },
    async newPageAction(pageName: string, userInfo: any) {
      const newResult = await newPageData(pageName, userInfo)
      // 2.重新请求数据
      this.postPageListAction(pageName)
    },
    async editPageAction(pageName: string, id: number, userInfo: any) {
      const editResult = await editPageData(pageName, id, userInfo)
      // 2.重新请求数据
      this.postPageListAction(pageName)
    }
  }
})

export default useSystemStore
