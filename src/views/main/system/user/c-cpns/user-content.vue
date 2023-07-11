<template>
  <div class="content">
    <div class="header">
      <h2 class="title">用户列表</h2>
      <el-button type="primary" @click="handleNewUser">新建用户</el-button>
    </div>
    <div class="table">
      <el-table :data="usersList" border style="width: 100%">
        <el-table-column type="selection" align="center" width="50" />
        <el-table-column type="index" align="center" width="60" label="序号" />
        <el-table-column align="center" prop="name" label="姓名" width="140" />
        <el-table-column
          align="center"
          prop="realname"
          label="真实姓名"
          width="140"
        />
        <el-table-column align="center" prop="cellphone" label="手机号码" />
        <el-table-column align="center" prop="enable" label="状态" width="80">
          <!-- 作用域插槽 -->
          <template #default="scope">
            <el-button
              size="small"
              plain
              :type="scope.row.enable ? 'primary' : 'danger'"
            >
              {{ scope.row.enable ? '启用' : '禁用' }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="createAt" label="创建时间">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="updateAt" label="更新时间">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="150">
          <template #default="scope">
            <el-button type="primary" icon="Edit" text size="small"
              >编辑</el-button
            >
            <el-button
              type="danger"
              icon="Delete"
              text
              size="small"
              @click="handleDeleteBtnClick(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="usersTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { formatUTC } from '@/utils/format'

// 自定义事件
const emit = defineEmits(['newClick'])

// 发送网络请求
const currentPage = ref(1)
const pageSize = ref(10)
const systemStore = useSystemStore()
fetchUserListData()
// 拿到用户列表数据
const { usersList, usersTotalCount } = storeToRefs(systemStore)
// 分页逻辑相关
function handleSizeChange() {
  fetchUserListData()
}

function handleCurrentChange() {
  fetchUserListData()
}
// 定义发送网络请求的方法
function fetchUserListData(formData: any = {}) {
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const info = { size, offset }
  // 将传递过来的数据拼接作为参数请求数据
  const queryInfo = { ...info, ...formData }
  systemStore.postUserListAction(queryInfo)
}

// 删除数据
function handleDeleteBtnClick(id: number) {
  systemStore.deleteUserByIdAciton(id)
}

// 新建用户
function handleNewUser() {
  emit('newClick')
}

defineExpose({ fetchUserListData })
</script>

<style lang="less" scoped>
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
  }
  .table {
    .el-button {
      padding: 5px 8px;
      margin-left: 0;
    }
  }
  .pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
}
</style>
