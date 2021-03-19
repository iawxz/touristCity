<template>
  <div class="bannerSwiper">
    <div class="warpper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in swiperList" :key="index">
          <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <!-- 用于分页 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "bannerSwiper",
  data() {
    return {
      swiperOption: {
        // 轮播方式,渐隐渐现
        effect: "fade",
        // 参数选项,显示小点
        pagination: ".swiper-pagination",
        // 循环轮播
        loop: true,
        // 每张播放时长1秒，自动播放
        autoplay: 5000,
        // 滑动速度
        speed: 3000,
      },
      swiperList: [
        {
          imgUrl: require("../../assets/home/banner1.png"),
        },
        {
          imgUrl: require("../../assets/home/banner2.png"),
        },
        {
          imgUrl: require("../../assets/home/banner3.png"),
        },
        {
          imgUrl: require("../../assets/home/banner4.png"),
        },
      ],
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.warpper {
  overflow: hidden;
  width: 100%;
  height: 100%;
  .swiper-img {
    width: 100%;
  }
  ::v-deep .swiper-pagination-bullet-active {
    background: #ffffff;
  }
}
</style>