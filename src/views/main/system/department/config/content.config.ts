const contentConfig = {
  pageName: 'department',
  header: {
    title: '部门列表',
    btnTitle: '新建部门'
  },
  propsList: [
    { type: 'selection', label: '选择', width: '80' },
    { type: 'index', label: '序号', width: '80' },

    { type: 'normal', prop: 'name', label: '部门名称', width: '140' },
    { type: 'normal', prop: 'leader', label: '部门领导', width: '140' },
    { type: 'normal', prop: 'parentId', label: '上级部门', width: '140' },

    // {
    //   type: 'custom',
    //   prop: 'leader',
    //   label: '部门领导',
    //   width: '140',
    //   slotName: 'leader'
    // },
    // {
    //   type: 'custom',
    //   prop: 'parentId',
    //   label: '上级部门',
    //   width: '140',
    //   slotName: 'parent'
    // },

    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },

    { type: 'handler', label: '操作', width: '140' }
  ]
}

export default contentConfig
