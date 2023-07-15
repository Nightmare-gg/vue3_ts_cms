<template>
  <div class="search" v-if="isQuery">
    <!-- 输入搜索关键字的表单 -->
    <el-form size="large" label-width="80" :model="searchForm" ref="formRef">
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItem" :key="item.prop">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  v-model="searchForm[item.prop]"
                />
              </template>

              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  v-model="searchForm[item.prop]"
                />
              </template>

              <template v-if="item.type === 'select'">
                <el-select
                  v-model="searchForm[item.prop]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </template>
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

import usePermissions from '@/hooks/usePermissions'

interface IProps {
  searchConfig: {
    pageName: string
    formItem: any[]
  }
}
// 定义form的数据
const props = defineProps<IProps>()
const initialForm: any = {}
for (const item of props.searchConfig.formItem) {
  initialForm[item.prop] = item.initialValue ?? ''
}
// 获取权限
const isQuery = usePermissions(`${props.searchConfig.pageName}:query`)

const searchForm = reactive(initialForm)
const emit = defineEmits(['queryClick', 'resetClick'])

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
