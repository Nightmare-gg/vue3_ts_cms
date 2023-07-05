<template>
  <div class="panel">
    <h1 class="title">后台管理系统</h1>
    <!-- 中间tab切换 -->
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <!-- 账号登录的pan -->
        <el-tab-pane label="账号登录" name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>
          <pane-account />
        </el-tab-pane>
        <!-- 手机登录的pan -->
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <div class="label">
              <el-icon><Cellphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <pane-phone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      type="primary"
      size="large"
      class="login-btn"
      @click="handleLoginBtn"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import PaneAccount from './pane-account.vue'
import PanePhone from './pane-phone.vue'

const isRemPwd = ref(false)
const activeName = ref('account')
function handleLoginBtn() {
  if (activeName.value === 'account') {
    console.log('用户进行账号')
  } else {
    console.log('用户进行手机登录')
  }
}
</script>

<style lang="less" scoped>
.panel {
  width: 330px;
  text-align: center;
  .tabs {
    margin: 15px 0;
    .label {
      display: flex;
      align-items: center;
      justify-content: center;
      .text {
        margin-left: 5px;
      }
    }
  }
  .controls {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
