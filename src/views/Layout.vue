<template>
  <!-- 顶部吸附组件 -->
  <app-header-sticky></app-header-sticky>
  <!-- 顶部吸附组件 -->

  <!-- 顶部通栏 -->
  <app-topnav></app-topnav>
  <!-- 顶部通栏 -->

  <!-- 头部 -->
  <app-header></app-header>
  <!-- 头部 -->

  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>

  <!-- 底部 -->
  <app-footer></app-footer>
  <!-- 底部 -->

</template>

<script>
import AppTopnav from '../components/app-topnav.vue'
import AppHeader from '../components/app-header.vue'
import AppFooter from '../components/app-footer.vue'
import AppHeaderSticky from '../components/app-header-sticky.vue'

import { useStore } from 'vuex'
// import store from '../store'
export default {
name: 'XtxLayout',
components: {
  AppTopnav,
  AppHeader,
  AppFooter,
  AppHeaderSticky
},
// 获取分类数据
setup() {
  const store = useStore()
  store.dispatch('category/getList')
}
}
</script>

<style lang='less' scoped>

</style>