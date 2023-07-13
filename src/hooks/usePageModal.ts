import { ref } from 'vue'
import type pageModal from '@/components/page-modal/page-modal.vue'

type editFnType = (data: any) => void

function usePageModal(editCallback?: editFnType) {
  const modalRef = ref<InstanceType<typeof pageModal>>()
  // 控制弹窗显示与隐藏
  function handleNewClick() {
    modalRef.value?.setDialogVisible()
  }

  function handleEditClick(itemData: any) {
    modalRef.value?.setDialogVisible(false, itemData)
    if (editCallback) {
      editCallback(itemData)
    }
  }
  return { modalRef, handleNewClick, handleEditClick }
}

export default usePageModal
