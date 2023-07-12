<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="isNewRef ? '新建部门' : '编辑部门'"
      width="30%"
      center
    >
      <el-form :model="formData" label-width="80px" size="large">
        <el-form-item label="部门" prop="name">
          <el-input placeholder="请输入部门名称" v-model="formData.name" />
        </el-form-item>
        <el-form-item label="部门领导" prop="leader">
          <el-input placeholder="请输入部门领导" v-model="formData.leader" />
        </el-form-item>

        <el-form-item label="上级部门" prop="parentId">
          <el-select
            v-model="formData.parentId"
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
  leader: '',
  parentId: ''
})
// 获取角色和部门信息
const mainStore = useMainStore()
const { entireDepartments } = storeToRefs(mainStore)
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
    systemStore.editPageAction('department', editData.value.id, formData)
  } else {
    // 创建新用户
    systemStore.newPageAction('department', formData)
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
