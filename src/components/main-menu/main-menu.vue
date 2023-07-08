<template>
  <div class="menu">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="" />
      <h3 class="title" v-show="!isFold">后台管理系统</h3>
    </div>
    <div class="content">
      <el-menu
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
        :default-active="defaultActive"
        :collapse="isFold"
      >
        <!-- 遍历整个菜单 -->
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <!-- 字符串:el-icon-monitor => 组件component动态组件 -->
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>

            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleItemClick(subitem)"
                >{{ subitem.name }}</el-menu-item
              >
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login'
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import { mapPathToMenu } from '@/utils/map-menus'

defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})
// 1.获取动态菜单
const loginStore = useLoginStore()
const userMenus = loginStore.userMenus

// 监听点击跳转页面
const router = useRouter()
function handleItemClick(item: any) {
  const url = item.url
  router.push(url)
}
// elmenu的默认菜单
const route = useRoute()
const defaultActive = computed(() => {
  const pathMenu = mapPathToMenu(route.path, userMenus)
  return pathMenu.id + ''
})
</script>

<style lang="less" scoped>
.menu {
  height: 100%;
  background-color: #00142d;
  .logo {
    display: flex;
    align-items: center;
    padding: 10px;
    height: 28px;
    img {
      width: 30px;
      margin-right: 5px;
    }
    .title {
      color: #fff;
      white-space: nowrap;
    }
  }
  .el-menu {
    border-right: none;
    user-select: none;
  }

  .el-sub-menu {
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135;
    }

    .el-menu-item:hover {
      color: #fff;
    }

    .el-menu-item.is-active {
      background-color: #0a60bd;
    }
  }
}
</style>
