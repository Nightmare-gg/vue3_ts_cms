const contentConfig = {
  pageName: 'story',
  header: {
    title: '故事列表'
  },
  propsList: [
    { type: 'index', label: '序号', width: '80px' },
    { label: '故事标题', prop: 'title' },
    { label: '故事内容', prop: 'content' },
    { type: 'timer', label: '创建时间', prop: 'createAt' }
  ]
}

export default contentConfig
