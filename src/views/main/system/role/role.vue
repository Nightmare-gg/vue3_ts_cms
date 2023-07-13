<template>
  <div class="role">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <page-content
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
      :content-config="contentConfig"
    />
    <page-modal :modal-config="modalConfig" ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import pageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'
import pageModal from '@/components/page-modal/page-modal.vue'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

// 头部查询重置功能
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
// 点击新建/编辑显示对话框
const { modalRef, handleNewClick, handleEditClick } = usePageModal()
</script>

<style lang="less" scoped></style>
