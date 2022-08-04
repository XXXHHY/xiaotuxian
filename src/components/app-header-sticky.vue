<template>
  <div class="app-header-sticky" :class="{show: y>=78}">
    <div class="container" v-show="y>=78">
      <RouterLink class="logo" to="/" />
      <app-header-nav></app-header-nav>
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderNav from './app-header-nav.vue'
import { onMounted, ref } from 'vue'
export default {
  name: 'AppHeaderSticky',
  components: { AppHeaderNav },
  // 传统方式
  setup() {
    // 定义y为距离顶部的距离
    const y = ref(0)
    // 在渲染的时候拿到滚轮滑动的距离并赋值给y
    onMounted(() => {
      window.onscroll = ()=> {
        const scrollTop = document.documentElement.scrollTop
        y.value = scrollTop 
      }
    })
    return { y }
  }
  // 另一种方式
  // 导入npm i @vueuse/core@4.9.0，利用useWindowScroll 获取滚轮距离
  // import {useWindowScroll } from '@vueuse/core'
  // setup() {
  //   const {y} = useWindowScroll()
  //   return {y}
  // }
}
</script>

<style lang='less' scoped>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 移出视野并设置透明
  transform: translateY(-100%);
  opacity: 0;

  // 展示的动画
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url(../assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: @xtxColor;
      }
    }
  }
}
</style>