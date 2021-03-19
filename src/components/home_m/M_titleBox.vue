<template>
  <div class="titleBox">
    <div class="titleName">
      <div class="titleSplit"></div>
      <span>{{titleName}}</span>
    </div>
    <div class="more">
      <span>更多</span>
      <img src="../../assets/home/icon_arrow_right_blue.png" alt="更多" />
    </div>
  </div>
</template>

<script>
export default {
  name: "titleBox",
  data() {
    return {};
  },
  props: {
    titleName:String,
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.titleBox {  
  padding-bottom: 23rpx;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  .titleName {
    display: flex;
    align-items: center;
    .titleSplit {
      width: 8rpx;
      height: 28rpx;
      background: linear-gradient(0deg, #ea5404 0%, #ffdf00 100%);
      border-radius: 4rpx;
      margin-right: 6rpx;
    }
    span {
      font-size: 30rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba($color: #131a62, $alpha: 0.9);
    }
  }
  .more {
    display: flex;
    align-items: center;
    span {
      font-size: 20rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba($color: #131a62, $alpha: 0.8);
    }
    img {
      width: 9rpx;
      height: 16rpx;
      display: block;
      margin-left: 4rpx;
    }
  }
}
</style>