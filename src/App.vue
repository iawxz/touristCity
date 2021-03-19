<template>
  <div id="app">
    <HeadNav v-if="isMobile"></HeadNav>
    <HeadShare v-else></HeadShare>
    <router-view />
    <FootInfo v-if="isMobile"></FootInfo>
    <FootNav v-else></FootNav>
  </div>
</template>

<script>
import HeadNav from "./components/common/headNav";
import HeadShare from "./components/common_m/M_headShare";
import FootInfo from "./components/common/footInfo";
import FootNav from "./components/common_m/M_footNav";
export default {
  name: "app",
  data() { 
    return {
      isMobile:0,//0pc端，1通信设备
    }
  },
  components: {
    HeadNav,
    FootInfo,
    HeadShare,
    FootNav
  },
  mounted() {
    if (this._isMobile()) {
      // alert("手机端");
      this.$router.replace("/home_m");
      this.isMobile= false
    } else {
      // alert("pc端");
      this.$router.replace("/");
      this.isMobile= true
    }
  },
  methods: {
    // 判断是否用通信设备打开网页
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
// 删除地图图标
.BMap_cpyCtrl {
  display: none;
}
.anchorBL {
  display: none;
}
</style>
