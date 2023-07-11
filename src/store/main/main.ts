import { getEntrireDepartments, getEntrireRoles } from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState {
  entireRoles: any[]
  entireDepartments: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartments: []
  }),
  actions: {
    async fetchEntireDataAction() {
      const rolesResult = await getEntrireRoles()
      const departmentsResult = await getEntrireDepartments()
      this.entireRoles = rolesResult.data.list
      this.entireDepartments = departmentsResult.data.list
    }
  }
})

export default useMainStore
