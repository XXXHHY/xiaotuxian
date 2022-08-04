import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入左侧骨架效果的ui
import ui from './components/library'
// 引入重置样式的包
import 'normalize.css'

// 引入公共样式
import './assets/styles/common.less'

createApp(App).use(store).use(router).use(ui).mount('#app')
