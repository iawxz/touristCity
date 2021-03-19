<template>
  <div class="footNav">
    <footer>
      <div
        class="nav"
        v-for="(item, index) in navs"
        :key="index"
        @click="goNav(item)"
      >
        <img v-if="!item.isSelect" :src="item.img" alt="nav" />
        <img v-else :src="item.img_S" alt="nav" />
        <p :class="{ select: item.isSelect == true }">{{ item.name }}</p>
      </div>
    </footer>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "footNav",
  data() {
    return {
      navs: [
        {
          name: "首页",
          img: require("../../assets/common/footNav/footNav_1.png"),
          img_S: require("../../assets/common/footNav/footNav_1_S.png"),
          isSelect: true,
        },
        {
          name: "论坛",
          img: require("../../assets/common/footNav/footNav_2.png"),
          img_S: require("../../assets/common/footNav/footNav_2_S.png"),
          isSelect: false,
        },
        {
          name: "展商",
          img: require("../../assets/common/footNav/footNav_3.png"),
          img_S: require("../../assets/common/footNav/footNav_3_S.png"),
          isSelect: false,
        },
        {
          name: "展品",
          img: require("../../assets/common/footNav/footNav_4.png"),
          img_S: require("../../assets/common/footNav/footNav_4_S.png"),
          isSelect: false,
        },
        {
          name: "头条",
          img: require("../../assets/common/footNav/footNav_5.png"),
          img_S: require("../../assets/common/footNav/footNav_5_S.png"),
          isSelect: false,
        },
      ],
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    // 切换nav
    goNav(item) {
        for(var i of this.navs){
            i.isSelect = false
        }
        item.isSelect = true
    },
  },
};
</script>

<style lang="scss" scoped>
.footNav {
  footer {
    width: 100%;
    height: 98rpx;
    background: #ffffff;
    box-shadow: 0px -3px 8px 0px rgba(0, 0, 0, 0.1);
    position: fixed;
    left: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: space-around;
    .nav {
      width: 100rpx;
      width: 100rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 50rpx;
        height: 50rpx;
        display: block;
        margin-bottom: 6rpx;
      }
      p {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba($color: #333333, $alpha: 0.7);
      }
      .select {
        color: rgba($color: #131a62, $alpha: 0.9);
      }
    }
  }
  .footer {
    width: 100%;
    height: 98rpx;
  }
}
</style>