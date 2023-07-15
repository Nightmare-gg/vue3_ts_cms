import useLoginStore from '@/store/login/login'

function usePermissions(permissionID: string) {
  const loginStore = useLoginStore()
  const { permissions } = loginStore
  // !!用于将结果转为布尔值
  return !!permissions.find((item) => item.includes(permissionID))
}

export default usePermissions
