import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/css/index.less'
import router from './router'
import pinia from './store'
import registerIcons from './global/register-icon'
// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// app.use(ElementPlus)

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(registerIcons)
app.mount('#app')
