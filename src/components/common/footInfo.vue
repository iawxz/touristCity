<template>
  <div class="footInfo">
    <footer>
      <div class="infoBox">
        <div class="info expo">
          <div class="title">2021xxx国际旅游博览会</div>
          <div class="detail">
            <p>时间：2021年2月11日-15日</p>
            <p>地点：xxx博览中心xx号馆</p>
            <p>主办单位：xxxxxxxx</p>
            <p>承办单位：xxx有限公司</p>
            <p>支持单位：xxxxxxx</p>
            <p>合作单位：xxx单位</p>
          </div>
        </div>
        <div class="info company">
          <div class="title">xxx有限公司</div>
          <div class="detail">
            <p>地址：xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p>咨询热线：xx-xxx-xxxxxxx</p>
            <p>邮箱：xxx@xxxxx.com</p>
            <p>网址：xxxxxxx.com</p>
          </div>
        </div>
        <div class="QRcode">
          <div class="title">扫一扫<br />了解更多</div>
          <div class="content"></div>
        </div>
      </div>
      <div class="icp">
        <p>xxx有限公司 XICP备xxxxxx号</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "footInfo",
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
footer {
  width: 100%;
  height: 445px;
  background: linear-gradient(0deg, #131a62 0%, #3340c6 100%);
  .infoBox,
  .icp {
    width: 1200px;
    margin: 0 auto;
  }
  .infoBox {
    height: 359px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .info {
      width: 380px;
      height: 359px;
      .title {
        width: 100%;
        height: 57px;
        padding-top: 50px;
        border-bottom: 2px solid rgba($color: #8fb5ff, $alpha: 0.9);
        font-size: 26px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #ffffff;
      }
      .detail {
        width: 100%;
        height: 250px;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #ffffff;
        p {
          margin-top: 12px;
        }
      }
    }
    .QRcode {
      height: 359px;
      .title {
        width: 100%;
        padding-top: 47px;
        font-size: 26px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #ffffff;
      }
      .content {
        width: 160px;
        height: 160px;
        background: #ffffff;
        margin-top: 50px;
      }
    }
  }
  .icp {
    width: 100%;
    height: 84px;
    border-top: 2px solid rgba($color: #ffffff, $alpha: 0.7);
    p {
      width: 1200px;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 800;
      color: rgba($color: #ffffff, $alpha: 0.7);
      margin: 0 auto;
      margin-top: 29px;
    }
  }
}
</style>