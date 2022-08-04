<template>
  <div class="home-banner">
    <XtxCarousel autoPlay :silders="silders"/>
  </div>
</template>

<script>
import {findBanner} from '@/api/home'
import { ref } from 'vue'
export default {
  name: 'HomeBanner',
  setup() {
    const silders = ref([])
    findBanner().then(data => {
      silders.value = data.result
      // console.log(data,'lunbotu')
    })
    return {silders}
  }
}
</script>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  // z-index: 98
}

.xtx-carousel {
  ::v-deep .carousel-btn.prev {
    left: 270px;
  }
  ::v-deep .carousel-indicator {
    padding-left: 250px;
  }
}
</style>