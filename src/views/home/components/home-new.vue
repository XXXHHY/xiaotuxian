<template>
  <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
    <template v-slot:right>
      <XtxMore />
    </template>
    <div ref="target" style="position: relative;height: 406px;">
      <Transition name="fade">
        <ul v-if="goods.length" ref="pannel" class="goods-list">
          <li v-for="item in goods" :key="item.id">
            <RouterLink :to="'/product/' + item.id">
              <img :src="item.picture" alt="">
              <p class="name">{{ item.name }}</p>
              <p class="price">&yen;{{ item.price }}</p>
            </RouterLink>
          </li>
        </ul>
        <home-skeleton bg="#f0f9f4" v-else></home-skeleton>
      </Transition>
    </div>
  </HomePanel>
</template>
<script>
import { ref } from 'vue'
import HomePanel from './home-panel'
import { findNew } from '@/api/home'
import homeSkeleton from './home-skeleton.vue'
// 导入数据懒加载的函数
// import { useIntersectionObserver } from '@vueuse/core'
import {useLazyData } from '@/hooks'
export default {
  name: 'HomeNew',
  components: { HomePanel, homeSkeleton },
  setup() {
    // const goods = ref([])
    // const box = ref(null)
    // // stop 是停止观察是否进入或移出可视区域的行为  
    // const { stop } = useIntersectionObserver(
    //   // target 是观察的目标dom容器，必须是dom容器，而且是vue3.0方式绑定的dom对象
    //   // 这里的target就是box
    //   box,
    //   // isIntersecting 是否进入可视区域，true是进入 false是移出
    //   // observerElement 被观察的dom
    //   ([{ isIntersecting }]) => {
    //     if (isIntersecting) {
    //       stop()
    //       findNew().then(data => {
    //         goods.value = data.result
    //       })
    //     }
    //   }
    // )
    const { target, result } = useLazyData(findNew)
    return { goods: result, target }
  }
}
</script>
<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }

    .price {
      color: @priceColor;
    }
  }
}
</style>