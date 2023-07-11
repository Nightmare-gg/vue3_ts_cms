<template>
  <div class="user">
    <user-search
      @query-click="handleQueryClick"
      @reset-click="handleResteClick"
    />
    <user-content
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
    />
    <user-modal ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import userSearch from './c-cpns/user-search.vue'
import userContent from './c-cpns/user-content.vue'
import userModal from './c-cpns/user-modal.vue'

const contentRef = ref<InstanceType<typeof userContent>>()
function handleQueryClick(formData: any) {
  contentRef.value?.fetchUserListData(formData)
}

function handleResteClick() {
  contentRef.value?.fetchUserListData()
}

const modalRef = ref<InstanceType<typeof userModal>>()
function handleNewClick() {
  modalRef.value?.setDialogVisible()
}

function handleEditClick(itemData: any) {
  modalRef.value?.setDialogVisible(false, itemData)
}
</script>

<style lang="less" scoped>
.user {
  border-radius: 16px;
  overflow: hidden;
}
</style>
