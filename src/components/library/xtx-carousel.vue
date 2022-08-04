<template>
  <!-- 轮播图组件 -->
  <div class='xtx-carousel' @mouseenter="stop()" @mouseleave="start()">
    <ul class="carousel-body">
      <li class="carousel-item" :class="{ fade: index === i }" v-for="(item, i) in silders" :key="i">
        <RouterLink to="/">
          <img :src="item.imgUrl" alt="">
        </RouterLink>
      </li>
    </ul>
    <a href="javascript:;" class="carousel-btn prev" @click="toggle(-1)"><i class="iconfont icon-angle-left"></i></a>
    <a href="javascript:;" class="carousel-btn next" @click="toggle(1)"><i class="iconfont icon-angle-right"></i></a>
    <div class="carousel-indicator">
      <span v-for="(item, i) in sliders" :key="i" :class="{ active: index === i }"></span>
    </div>
  </div>
</template>

<script>
import { ref, watch, onUnmounted } from 'vue'
export default {
  name: 'XtxCarousel',
  props: {
    silders: {
      type: Array,
      default: () => []
    },
    // 轮播图时间切换
    duration: {
      type: Number,
      default: 3000
    },
    // 是否自动播放
    autoPlay: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    // 默认显示的图片的索引
    const index = ref(0)
    // console.log(props.silders, 'props');

    // 自动播放函数
    let timer = null
    const autoPlayFn = () => {
      clearInterval(timer)
      timer = setInterval(() => {
        // console.log(index.value)
        index.value++
        if (index.value >= props.silders.length) {
          index.value = 0
        }
      }, props.duration)
    }

    watch(() => props.silders, (newValue) => {
      // 获取到数据&&autoPlay为true就开启自动播放函数
      // console.log('触发了watch', newValue.length, props.autoPlay);
      if (newValue.length && props.autoPlay) {
        autoPlayFn()
      }
    }, {
      immediate: true
    })
    // 如果有自动播放，鼠标进入离开，暂停，开启
    // 鼠标进入图片，轮播停止
    const stop = () => {
      if (timer) {
        clearInterval(timer)
      }
    }
    // 鼠标离开图片，轮播继续
    const start = () => {
      if (props.silders.length && props.autoPlay) {
        autoPlayFn()
      }
    }

    // 点击按钮实现左右翻页
    const toggle = (val) => {
      const page = index.value + val
      if (page >= props.silders.length) {
        index.value = 0
        return
      }
      if (page < 0) {
        index.value = props.silders.length - 1
      }
      index.value = page
    }
    // 组件消耗，清理定时器
    onUnmounted(() => {
      clearInterval(timer)
    })
    return { index, stop, start, toggle }
  },


}

</script>
<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;

  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }

    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;

      &.fade {
        opacity: 1;
        z-index: 1;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;

      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;

        ~span {
          margin-left: 12px;
        }

        &.active {
          background: #fff;
        }
      }
    }

    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, .2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;

      &.prev {
        left: 20px;
      }

      &.next {
        right: 20px;
      }
    }
  }

  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>