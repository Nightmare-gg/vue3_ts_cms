<template>
  <div class="search">
    <!-- 输入搜索关键字的表单 -->
    <el-form size="large" label-width="80" :model="searchForm" ref="formRef">
      <el-row :gutter="20">
        <el-col :span="8"
          ><el-form-item label="用户名" prop="name">
            <el-input
              v-model="searchForm.name"
              placeholder="请输入用户名"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="8">
          <el-form-item label="真实名" prop="realname">
            <el-input
              placeholder="请输入真实用户名"
              v-model="searchForm.realname"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="电话号码" prop="cellphone">
            <el-input
              placeholder="请输入电话号码"
              v-model="searchForm.cellphone"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select
              placeholder="请选择"
              style="width: 100%"
              v-model="searchForm.enable"
            >
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="日期" prop="createAt">
            <el-date-picker
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              v-model="searchForm.createAt"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!-- 操作按钮 -->
    <div class="btns">
      <el-button icon="Refresh" size="large" @click="handleResetClick"
        >重置</el-button
      >
      <el-button
        icon="Search"
        size="large"
        type="primary"
        @click="handleQueryClick"
        >搜索</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElForm } from 'element-plus'

const emit = defineEmits(['queryClick', 'resetClick'])

const searchForm = reactive({
  name: '',
  realname: '',
  cellphone: '',
  enable: 1,
  createAt: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

function handleResetClick() {
  // 清空表单
  formRef.value?.resetFields()
  // 传递事件
  emit('resetClick')
}

function handleQueryClick() {
  emit('queryClick', searchForm)
}
</script>

<style lang="less" scoped>
.search {
  background-color: #fff;
  padding: 20px;
  .el-form {
    .el-form-item {
      padding: 20px;
      margin-bottom: 0;
    }
  }
  .btns {
    text-align: right;
    padding: 0 50px 10px 0;
    .el-button {
      height: 36px;
    }
  }
}
</style>
