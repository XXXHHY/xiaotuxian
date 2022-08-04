<template>
  <!-- 首页入口 -->
  <div class="home-entry">
    <div class="container">
      <!-- 左侧分类 -->
      <home-category></home-category>
      <!-- 轮播图 -->
      <home-banner></home-banner>
      <!-- 新鲜好物 -->
      <home-new></home-new>
      <!-- 人气推荐 -->
      <home-hot></home-hot>
      <!-- 热门品牌 -->
      <home-brand></home-brand>
      <!-- 产品区域 -->
      <home-product></home-product>
      <!-- 最新专题 -->
      <home-special></home-special>
    </div>
  </div>

</template>

<script>
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
import HomeProduct from './components/home-product.vue'
import HomeSpecial from './components/home-special.vue'
export default {
  name: 'xtx-home-page',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand,
    HomeProduct,
    HomeSpecial
  }

}
</script>

<style lang='less' scoped>
</style>