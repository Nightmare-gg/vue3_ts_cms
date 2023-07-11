// 获取角色和部门的接口
import hyRequest from '..'

export function getEntrireRoles() {
  return hyRequest.post({
    url: '/role/list'
  })
}

export function getEntrireDepartments() {
  return hyRequest.post({
    url: '/department/list'
  })
}
