const contentConfig = {
  pageName: 'goods',
  header: {
    title: '商品信息列表',
    btnTitle: '新建商品'
  },
  propsList: [
    { type: 'selection', label: '选择', width: '80px' },
    { type: 'index', label: '序号', width: '80px', fixed: 'left' },

    {
      prop: 'name',
      label: '商品名称',
      width: '140px',
      showOverflowTooltip: true
    },
    { prop: 'oldPrice', label: '原价', width: '60px' },
    { prop: 'newPrice', label: '现价', width: '60px' },
    {
      prop: 'desc',
      label: '商品描述',
      width: '140px',
      showOverflowTooltip: true
    },
    { prop: 'status', label: '状态', width: '50px' },
    {
      type: 'custom',
      prop: 'imgUrl',
      label: '图片',
      width: '80px',
      slotName: 'imgSmall'
    },
    { prop: 'inventoryCount', label: '库存', width: '80px' },
    { prop: 'saleCount', label: '销量', width: '70px' },
    { prop: 'favorCount', label: '收藏', width: '70px' },
    { prop: 'address', label: '地址', width: '70px' },

    { type: 'timer', label: '创建时间', prop: 'createAt', width: '180px' },
    { type: 'timer', label: '更新时间', prop: 'updateAt', width: '180px' },

    { type: 'handler', label: '操作', width: '140px', fixed: 'right' }
  ]
}

export default contentConfig
