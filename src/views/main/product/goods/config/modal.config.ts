const modalConfig = {
  pageName: 'goods',
  header: {
    newTitle: '新建商品',
    editTitle: '编辑商品'
  },
  formItems: [
    { type: 'input', prop: 'name', label: '商品名称' },
    { type: 'input', prop: 'oldPrice', label: '原价' },
    { type: 'input', prop: 'newPrice', label: '现价' },
    { type: 'input', prop: 'desc', label: '商品描述' },
    { type: 'input', prop: 'status', label: '状态' },
    { type: 'input', prop: 'imgUrl', label: '图片' },
    { type: 'input', prop: 'inventoryCount', label: '库存' },
    { type: 'input', prop: 'saleCount', label: '销量' },
    { type: 'input', prop: 'favorCount', label: '收藏' },
    { type: 'input', prop: 'address', label: '地址' }
  ]
}

export default modalConfig
