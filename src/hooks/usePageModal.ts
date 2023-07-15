import { ref } from 'vue'
import type pageModal from '@/components/page-modal/page-modal.vue'

type callBackFnType = (data?: any) => void

function usePageModal(
  newCallback?: callBackFnType,
  editCallback?: callBackFnType
) {
  const modalRef = ref<InstanceType<typeof pageModal>>()
  // 控制弹窗显示与隐藏
  function handleNewClick() {
    modalRef.value?.setDialogVisible()
    if (newCallback) newCallback()
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
