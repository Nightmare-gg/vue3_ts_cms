import hyRequest from '@/service'
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
