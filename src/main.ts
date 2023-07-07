import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/css/index.less'
import router from './router'
import store from './store'
import icons from './global/register-icon'
// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// app.use(ElementPlus)
// 按需引入组件样式
// import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(icons)
app.mount('#app')
