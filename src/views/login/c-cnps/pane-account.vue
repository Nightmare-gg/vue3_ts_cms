<template>
  <div class="account">
    <el-form
      label-width="60px"
      :model="account"
      :rules="accountRules"
      status-icon
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules, ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'
import useLoginStore from '@/store/login/login'
import type { IAccount } from '@/types'

const account = reactive<IAccount>({
  name: '',
  password: ''
})
// 2.定义校验规则
const accountRules = reactive<InstanceType<typeof FormRules>>({
  name: [
    { required: true, message: '必须输入账号信息', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '必须是6-20数组或字母组成',
      trigger: 'change'
    }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '必须是3位以上数字或字母组成',
      trigger: 'change'
    }
  ]
})
// 3.执行账号的登录逻辑
const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
function loginAction() {
  formRef.value?.validate((valid: any) => {
    if (valid) {
      const name = account.name
      const password = account.password
      loginStore.loginAccountAction({ name, password })
    } else {
      ElMessage.error('请输入正确的格式后再操作！')
    }
  })
}
defineExpose({
  loginAction
})
</script>

<style lang="less" scoped></style>
