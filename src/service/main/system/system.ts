import hyRequest from '@/service'
import type { StepInstance } from 'element-plus'
// 用户的网络请求
export function postUsersListData(queryInfo: any) {
  return hyRequest.post({
    url: 'users/list',
    data: queryInfo
  })
}

// 删除用户
export function deleteUserById(id: number) {
  return hyRequest.delete({
    url: `/users/${id}`
  })
}

// 新建用户
export function newUserData(userInfo: any) {
  return hyRequest.post({
    url: '/users',
    data: userInfo
  })
}
// 编辑用户
export function editUserData(id: number, userInfo: any) {
  return hyRequest.patch({
    url: `/users/${id}`,
    data: userInfo
  })
}

// 页面相关网络请求
export function postPageListData(pageName: string, queryInfo: any) {
  return hyRequest.post({
    url: `${pageName}/list`,
    data: queryInfo
  })
}
export function deletePageById(pageName: string, id: number) {
  return hyRequest.delete({
    url: `/${pageName}/${id}`
  })
}
export function newPageData(pageName: string, pageInfo: any) {
  return hyRequest.post({
    url: `/${pageName}`,
    data: pageInfo
  })
}

export function editPageData(pageName: string, id: number, pageInfo: any) {
  return hyRequest.patch({
    url: `/${pageName}/${id}`,
    data: pageInfo
  })
}
