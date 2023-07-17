const contentConfig = {
  pageName: 'category',
  header: {
    title: '商品分类列表',
    btnTitle: '新建分类'
  },
  propsList: [
    { type: 'selection', label: '选择', width: '80' },
    { type: 'index', label: '序号', width: '80' },

    { type: 'normal', prop: 'name', label: '类别名称', width: '140' },

    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },

    { type: 'handler', label: '操作', width: '140' }
  ]
}

export default contentConfig
