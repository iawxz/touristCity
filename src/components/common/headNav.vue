<template>
  <div id="headNav">
    <header>
      <img class="logo" src="@/assets/common/logo.png" alt="logo" />
      <div class="searchBox">
        <div class="select">
          <select>
            <option>全部</option>
          </select>
        </div>
        <div class="inputBox">
          <input type="text" placeholder="输入搜索的关键字" />
          <img src="@/assets/common/icon_search.png" alt="" />
        </div>
      </div>
      <div class="roomBox">
        <div class="room B">展商入口</div>
        <div class="room C">观众入口</div>
        <div class="CNEN">
          <span class="CN select">中</span>
          <div class="split"></div>
          <span class="EN">EN</span>
        </div>
      </div>
    </header>
    <div :class="$route.path == '/' ? 'navBox' : 'navBoxNoHome'">
      <div class="set">热门展馆+</div>
      <div class="navs">
        <div
          class="nav"
          v-for="(item, index) in navList"
          :key="index"
          @click="goView(item.path)"
        >
          {{ item.name }}<span>+</span>
        </div>
      </div>
    </div>
    <navPosition :navList="navList" v-if="$route.path != '/'"></navPosition>
  </div>
</template>

<script>
import navPosition from "../common/navPosition";
export default {
  name: "headNav",
  data() {
    return {
      navList: [
        { name: "首页", path: "/" },
        { name: "展商", path: "/" },
        { name: "展品", path: "/exhibit" },
        { name: "资讯", path: "/" },
        { name: "媒体", path: "/" },
        { name: "直播大厅", path: "/" },
        { name: "联系我们", path: "/" },
      ],
      navPosition: "",
    };
  },
  props: {},
  components: {
    navPosition,
  },
  mounted() {
    console.log(this.$route.path);
  },
  methods: {
    goView(path) {
      this.$router.push({ path });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 157px;
  position: relative;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .logo {
    width: 123px;
    height: 130px;
  }
  .searchBox,
  .roomBox {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .searchBox {
    width: 600px;
    height: 40px;
    border: 2px solid #dadada;
    border-radius: 4px;
    margin: 0 70px 0 177px;
    select,
    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;

      font-size: 14px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba($color: #333333, $alpha: 0.7);
    }
    .select {
      width: 118px;
      height: 100%;
      border-right: 2px solid #dadada;
      select {
        padding-left: 33px;
      }
    }
    .inputBox {
      width: 455px;
      height: 100%;
      padding-left: 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        display: block;
        width: 20px;
        height: 20px;
        margin-left: 10px;
        margin-right: 20px;
      }
    }
  }
  .roomBox {
    position: relative;
    .room {
      cursor: pointer;
      width: 100px;
      height: 40px;
      background: #131a62;
      border-radius: 4px;

      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ffffff;
      text-align: center;
      line-height: 40px;
    }
    .C {
      margin-left: 30px;
      background: #e95003;
    }
    .CNEN {
      cursor: pointer;
      width: 80px;
      height: 32px;
      border: 1px solid rgba($color: #333333, $alpha: 0.6);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      right: -160px;
      transform: translateY(-50%);
      .split {
        width: 1px;
        height: 19px;
        background-color: rgba($color: #333333, $alpha: 0.6);
        margin: 0 7px 0 11px;
      }
      span {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba($color: #333333, $alpha: 0.9);
      }
      .select {
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba($color: #e95003, $alpha: 0.9);
      }
    }
  }
}
.navBox,
.navBoxNoHome {
  .set,
  .nav {
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 800;
    color: #ffffff;
  }
  .set {
    cursor: pointer;
    width: 200px;
    height: 60px;
    background: #e95003;
  }
  .navs {
    width: 1000px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    .nav {
      cursor: pointer;
      width: 120px;
      height: 60px;
    }
  }
}
.navBox {
  width: 1200px;
  height: 60px;
  background: rgba($color: #000000, $alpha: 0.4);
  border-radius: 0px 0px 10px 10px;
  overflow: hidden;
  position: absolute;
  top: 157px;
  left: 50%;
  z-index: 999;
  transform: translateX(-50%);
  display: flex;
}
.navBoxNoHome {
  width: 100%;
  height: 60px;
  background: #131a62;
  display: flex;
  align-items: center;
  justify-content: center;
}
// @media only screen and (max-width: 768px) {}
</style>