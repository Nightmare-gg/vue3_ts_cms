<template>
  <div class="user">
    <user-search
      @query-click="handleQueryClick"
      @reset-click="handleResteClick"
    />
    <user-content ref="contentRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import userSearch from './c-cpns/user-search.vue'
import userContent from './c-cpns/user-content.vue'

const contentRef = ref<InstanceType<typeof userContent>>()
function handleQueryClick(formData: any) {
  contentRef.value?.fetchUserListData(formData)
}

function handleResteClick() {
  contentRef.value?.fetchUserListData()
}
</script>

<style lang="less" scoped>
.user {
  border-radius: 16px;
  overflow: hidden;
}
</style>
