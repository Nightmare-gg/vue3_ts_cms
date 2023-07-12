<template>
  <div class="department">
    <page-search
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
      :search-config="searchConfig"
    />
    <page-content
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
      :content-config="contentConfig"
    >
      <template #leader="scope">
        <span class="leader">哈哈哈: {{ scope.row[scope.prop] }}</span>
      </template>

      <template #parent="scope">
        <span class="parent">呵呵呵：{{ scope.row[scope.prop] }}</span>
      </template>
    </page-content>
    <page-modal ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import pageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'
import pageModal from './c-cpns/page-modal.vue'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'

import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof pageContent>>()
function handleQueryClick(queryInfo: any) {
  contentRef.value?.fetchPageListData(queryInfo)
}

function handleResetClick() {
  contentRef.value?.fetchPageListData()
}

const modalRef = ref<InstanceType<typeof pageModal>>()
// 控制弹窗显示与隐藏
function handleNewClick() {
  modalRef.value?.setDialogVisible()
}

function handleEditClick(itemData: any) {
  modalRef.value?.setDialogVisible(false, itemData)
}
</script>

<style scoped lang="less">
.leader {
  color: red;
}
.parent {
  color: blue;
}
</style>
