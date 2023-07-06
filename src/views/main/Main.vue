<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="240px">Aside</el-aside>
      <el-container>
        <el-header height="50px">Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
// import { localCache } from '@/utils/cache'
// import { LOGIN_TOKEN } from '@/global/constants'
// import { useRouter } from 'vue-router'

// const router = useRouter()
// function handleExitClick() {
//   // 1.删除token
//   localCache.removeCache(LOGIN_TOKEN)
//   // 2.返回login页面
//   router.push('/login')
// }
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  .main-content {
    height: 100%;

    .el-aside {
      background-color: pink;
    }
    .el-header {
      background-color: skyblue;
    }
    .el-main {
      background-color: purple;
    }
  }
}
</style>
