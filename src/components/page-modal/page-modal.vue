<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="
        isNewRef
          ? props.modalConfig.header.newTitle
          : props.modalConfig.header.editTitle
      "
      width="30%"
      center
    >
      <div class="form">
        <el-form :model="formData" label-width="80px" size="large">
          <template v-for="item in modalConfig.formItems" :key="item.prop">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                />
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="formData[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
              <template v-if="item.type === 'custom'">
                <slot :name="item.slotName"></slot>
              </template>
            </el-form-item>
          </template>
        </el-form>
      </div>
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

import useSystemStore from '@/store/main/system/system'
import type { IModalProps } from './type'

// interface IProps {
//   modalConfig: {
//     header: {
//       newTitle: string
//       editTitle: string
//     }
//     formItems: any[]
//   }
// }

const props = defineProps<IModalProps>()

const dialogVisible = ref(false)
const initialData: any = {}
for (const item of props.modalConfig.formItems) {
  initialData[item.prop] = item.initialValue ?? ''
}

const formData = reactive<any>(initialData)
// 获取角色和部门信息
const systemStore = useSystemStore()
// 控制对话框的显示与隐藏
const isNewRef = ref(true)
const editData = ref()
function setDialogVisible(isNew: boolean = true, itemData?: any) {
  dialogVisible.value = true
  isNewRef.value = isNew

  if (!isNew && itemData) {
    // 编辑数据
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    // 新建数据
    for (const key in formData) {
      const item = props.modalConfig.formItems.find((item) => item.prop === key)
      formData[key] = item ? item.initialValue : ''
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
    systemStore.editPageAction(
      props.modalConfig.pageName,
      editData.value.id,
      formData
    )
  } else {
    // 创建新用户
    systemStore.newPageAction(props.modalConfig.pageName, formData)
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
