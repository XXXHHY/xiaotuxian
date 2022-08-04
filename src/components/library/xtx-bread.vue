<!-- 面包屑 -->
<!-- <template>
  <div class='xtx-bread'>
    <slot />
  </div>
</template> -->

<script>
import { h } from 'vue'
export default {
  name: 'XtxBread',
  // props: {
  //   parentName: {
  //     type: String,
  //     default: ''
  //   },
  //   parentPath: {
  //     type: String,
  //     default: ''
  //   }
  // }

  //   render 是vue提供的一个渲染函数，优先级大于el,template等选项，用来提供组件结构。
  // 注意：
  // vue2.0 render函数提供h（createElement）函数用来创建节点
  // vue3.0 h（createElement）函数有 vue 直接提供，需要按需导入
  // this.$slots.default() 获取默认插槽的node结构，按照要求拼接结构。
  // h函数的传参 tag 标签名|组件名称, props 标签属性|组件属性, node 子节点|多个节点
  // 具体参考 render
  // 注意：不要在 xtx-bread 组件插槽写注释，也会被解析。
  render() {
    // 用法
    // 1. template 标签去除，单文件组件
    // 2. 返回值就是组件内容
    // 3. vue2.0 的h函数传参进来的，vue3.0 的h函数导入进来
    // 4. h 第一个参数 标签名字  第二个参数 标签属性对象  第三个参数 子节点
    // 需求
    // 1. 创建xtx-bread父容器
    // 2. 获取默认插槽内容
    // 3. 去除xtx-bread-item组件的i标签，因该由render函数来组织
    // 4. 遍历插槽中的item，得到一个动态创建的节点，最后一个item不加i标签
    // 5. 把动态创建的节点渲染再xtx-bread标签中
    const items = this.$slots.default()
    const dymanicItems = []
    items.forEach((item, i) => {
      dymanicItems.push(item)
      if (i < (items.length - 1)) {
        dymanicItems.push(h('i', { class: 'iconfont icon-angle-right' }))
      }
    });
    // console.log(dymanicItems, '面包屑');
    return h('div', { class: 'xtx-bread' }, dymanicItems)
  }
}
</script>

<style lang='less'>
// 去除 scoped 属性，目的：然样式作用到xtx-bread-item组件
.xtx-bread {
  display: flex;
  padding: 25px 10px;

  // ul li:last-child {}
  // 先找到父元素，找到所有的子元素，找到最后一个，判断是不是LI，是就是选中，不是就是无效选择器
  // ul li:last-of-type {}
  // 先找到父元素，找到所有的类型为li的元素，选中最后一个
  &-item {
    a {
      color: #666;
      transition: all .4s;

      &:hover {
        color: @xtxColor;
      }
    }
  }

  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
    // 样式的方式，不合理
    // &:last-child {
    //   display: none;
    // }
  }
}
</style>