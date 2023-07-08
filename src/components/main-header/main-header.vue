<template>
  <div class="header">
    <div class="menu-icon" @click="handleMenuIconClick">
      <el-icon size="24px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <header-crumb />
      <header-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import headerInfo from './c-cpns/header-info.vue'
import headerCrumb from './c-cpns/header-crumb.vue'

import { ref } from 'vue'
// 内部自定义事件
const emit = defineEmits(['foldChange'])
// 记录状态
const isFold = ref(false)
function handleMenuIconClick() {
  // 1.内部改变状态
  isFold.value = !isFold.value
  // 2.将事件和状态传递给父组件
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  height: 100%;
  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
  }
}
</style>
