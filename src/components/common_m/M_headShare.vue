<template>
  <div class="headShare">
    <header>
      <div class="searchBox">
        <img src="@/assets/common/icon_search.png" alt="搜索icon" />
        <input type="text" placeholder="输入搜索的关键字" />
      </div>
      <div class="CNEN">
        <span class="CN select">中</span>
        <div class="split"></div>
        <span class="EN">EN</span>
      </div>
    </header>
    <div class="header"></div>
    <div class="shareBox">
      <img class="logo" src="@/assets/common/logo.png" alt="logo" />
      <div class="info">
        <p class="title">2021中国（郑州）国际 旅游城市市长论坛</p>
        <p class="infoCon address">地点:郑州国际会展中心</p>
        <p class="infoCon time">时间:2021/04/20-04/23</p>
      </div>
      <div class="share">
        <img src="@/assets/common/icon_share.png" alt="icon分享" />
        <span>分享</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headShare",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 128rpx;
  background: #131a62;
  position: absolute;
  top: 0;
  left: 0;
  .searchBox {
    width: 388rpx;
    height: 46rpx;
    background: #ffffff;
    border-radius: 23rpx;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 24rpx;
      height: 24rpx;
      display: block;
      margin-right: 13rpx;
    }
    input {
      outline: none;
      border: none;
      font-size: 20rpx;
      font-family: PingFang SC;
    }
    input::placeholder {
      font-size: 20rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba($color: #333333, $alpha: 0.6);
    }
  }
  .CNEN {
    width: 80rpx;
    height: 36rpx;
    border: solid #ffffff;
    border-width: 2rpx;
    border-radius: 4rpx;
    position: absolute;
    top: 50%;
    right: 32rpx;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 20rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ffffff;
      text-align: center;
      line-height: 36rpx;
    }
    .split {
      width: 2rpx;
      height: 23rpx;
      background: #ffffff;
      margin: 0 4rpx;
    }
    .select {
      font-size: 24rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #e95003;
    }
  }
}
.header {
  width: 100%;
  height: 128rpx;
}
.shareBox {
  width: 100%;
  height: 218rpx;
  background: #ffffff;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 127rpx;
    height: 133rpx;
    display: block;
    margin-left: 32rpx;
  }
  .info {
    width: 315rpx;
    .title {
      font-size: 30rpx;
      font-family: PingFang SC;
      font-weight: 800;
      color: #333333;
      margin-bottom: 25rpx;
    }
    .infoCon {
      font-size: 24rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba($color: #333333, $alpha: 0.9);
    }
    .address {
      margin-bottom: 15rpx;
    }
  }
  .share {
    width: 89rpx;
    height: 44rpx;
    background: #19378c;
    border-radius: 4rpx;
    text-align: center;
    line-height: 44rpx;
    margin-right: 32rpx;
    img {
      width: 22rpx;
      height: 19rpx;
    }
    span {
      font-size: 20rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ffffff;
    }
  }
}
</style>