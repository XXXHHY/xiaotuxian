import {
  createStore
} from 'vuex'
// 使用persistedstate插件进行持久化
import createPersistedstate from 'vuex-persistedstate'
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'


export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cart,
    user,
    category
  },
  //  默认是存储在localStorage中
  //  key是存储数据的键名
  //  paths是存储state中的那些数据，如果是模块下具体的数据需要加上模块名称，如user.token
  //  修改state后触发才可以看到本地存储数据的的变化。
  plugins: [
    createPersistedstate({
      key: 'erabbit-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})