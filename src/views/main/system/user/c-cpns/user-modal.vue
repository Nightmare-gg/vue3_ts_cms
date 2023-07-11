<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="isNewRef ? '新建用户' : '编辑用户'"
      width="30%"
      center
    >
      <el-form :model="formData" label-width="80px" size="large">
        <el-form-item label="用户名" prop="name">
          <el-input placeholder="请输入用户名" v-model="formData.name" />
        </el-form-item>
        <el-form-item label="真实姓名" prop="realname">
          <el-input placeholder="请输入真实姓名" v-model="formData.realname" />
        </el-form-item>
        <el-form-item v-if="isNewRef" label="密码" prop="password">
          <el-input
            placeholder="请输入密码"
            show-password
            v-model="formData.password"
          />
        </el-form-item>
        <el-form-item label="手机号码" prop="cellphone">
          <el-input placeholder="请输入手机号码" v-model="formData.cellphone" />
        </el-form-item>
        <el-form-item label="选择角色" prop="roleId">
          <el-select
            v-model="formData.roleId"
            placeholder="请选择角色"
            style="width: 100%"
          >
            <template v-for="item in entireRoles" :key="item.id">
              <el-option :label="item.name" :value="item.id" />
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="选择部门" prop="departmentId">
          <el-select
            v-model="formData.departmentId"
            placeholder="请选择部门"
            style="width: 100%"
          >
            <template v-for="item in entireDepartments" :key="item.id">
              <el-option :label="item.name" :value="item.id" />
            </template>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'

const dialogVisible = ref(false)
const formData = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})
// 获取角色和部门信息
const mainStore = useMainStore()
const { entireRoles, entireDepartments } = storeToRefs(mainStore)
const systemStore = useSystemStore()
// 控制对话框的显示与隐藏
const isNewRef = ref(true)
const editData = ref()
function setDialogVisible(isNew: boolean = true, itemData?: any) {
  dialogVisible.value = true
  isNewRef.value = isNew

  if (!isNew && itemData) {
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    for (const key in formData) {
      formData[key] = ''
    }
    editData.value = null
  }
}

// 点击确认新建用户
function handleConfirmClick() {
  // 1.对话框消失
  dialogVisible.value = false
  if (!isNewRef.value && editData.value) {
    // 编辑用户
    systemStore.editUserAction(editData.value.id, formData)
  } else {
    // 创建新用户
    systemStore.newUserAction(formData)
  }
}
// 对外暴露方法和属性
defineExpose({ setDialogVisible })
</script>

<style lang="less" scoped>
.el-form {
  padding: 0 20px;
}
</style>
