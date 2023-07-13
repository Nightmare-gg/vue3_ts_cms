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
    <page-modal
      :modal-config="modalConfig"
      ref="modalRef"
      :other-info="otherInfo"
    >
      <template #menulist>
        <el-tree
          ref="treeRef"
          :data="entireMenus"
          show-checkbox
          node-key="id"
          @check="handleCheck"
          :props="{
            children: 'children',
            label: 'name'
          }"
        />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/store/main/main'
import { storeToRefs } from 'pinia'
import { ref, nextTick } from 'vue'
import { ElTree } from 'element-plus'

import pageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'
import pageModal from '@/components/page-modal/page-modal.vue'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import { mapMenuListToIds } from '@/utils/map-menus'

// 头部查询重置功能
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
// 点击新建/编辑显示对话框
const { modalRef, handleNewClick, handleEditClick } = usePageModal(editCallback)

// 获取菜单列表
const mainStore = useMainStore()
const { entireMenus } = storeToRefs(mainStore)

const otherInfo = ref({})
function handleCheck(data1: any, data2: any) {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  otherInfo.value = { menuList }
}

const treeRef = ref<InstanceType<typeof ElTree>>()
function editCallback(itemData: any) {
  nextTick(() => {
    const menuIds = mapMenuListToIds(itemData.menuList)
    treeRef.value.setCheckedKeys(menuIds)
  })
}
</script>

<style lang="less" scoped></style>
