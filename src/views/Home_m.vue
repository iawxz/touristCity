<template>
  <div class="home">
    <!-- 轮播banner -->
    <div class="banner">
      <div class="bannerBox">
        <BannerSwiper></BannerSwiper>
      </div>
    </div>

    <!-- 海报bill -->
    <div class="content showBill">
      <div class="billBox"></div>
    </div>

    <!-- 嘉宾贺词 -->
    <div class="content guestSpeech">
      <TitleBox :titleName="titleName[0]"></TitleBox>
      <div class="guestSpeechCon">
        <div class="videoBox" v-for="(item, index) in 6" :key="index">
          <div class="video"></div>
          <p>西班牙大使馆旅游参赞 Maria Linares</p>
        </div>
      </div>
    </div>

    <!-- 直播入口 -->
    <div class="content liveRoom">
      <TitleBox :titleName="titleName[1]"></TitleBox>
      <div class="liveRoomCon">
        <div class="roomBox" v-for="(item, index) in 3" :key="index">
          <p>2021中国（郑州）国际旅游城市市长论坛旅游 城市市长峰会开幕</p>
        </div>
      </div>
    </div>

    <!-- 推荐展品 -->
    <div class="content showExhibit">
      <TitleBox :titleName="titleName[2]"></TitleBox>
      <div class="exhibitCon">
        <div class="exhibitBox" v-for="(item, index) in 4" :key="index">
          <div class="exhibitImg"></div>
          <p class="exhibitTitle">三亚5日自由行(5钻)</p>
          <p class="exhibitPrice">￥2622</p>
        </div>
      </div>
    </div>

    <!-- 推荐展商 -->
    <div class="content showExhibitor">
      <TitleBox :titleName="titleName[3]"></TitleBox>
      <div class="exhibitorCon">
        <div class="exhibitorBox" v-for="(item, index) in 6" :key="index">
          <div class="exhibitorImg"></div>
          <p class="exhibitorTitle">万豪酒店</p>
        </div>
      </div>
    </div>

    <!-- 各地分馆 -->
    <div class="hallBox">
      <div class="title">
        <span>各地分馆</span>
        <img
          class="arrow"
          src="../assets/home/icon_arrow_bottom_orange.png"
          alt="下拉箭头"
        />
        <select name="halls" id="halls">
          <option value="郑州" v-for="(item, index) in 3" :key="index">
            郑州馆
          </option>
        </select>
      </div>
      <div class="mapBox">
        <div class="mapEarth">
          <MapEarth></MapEarth>
        </div>
      </div>
    </div>

    <!-- 热门活动 -->
    <div class="activityBox">
      <div class="title">热门活动</div>
      <div class="activity" v-for="(item, index) in 3" :key="index">
        <div class="activityImg"></div>
        <div class="infoBox">
          <p class="infoTitle">2021年国际旅游城市市长论坛</p>
          <p class="infoCon address">郑州国际会展中心</p>
          <p class="infoCon time">04月20日 17:00 开始</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerSwiper from "../components/home_m/bannerSwiper";
import TitleBox from "../components/home_m/M_titleBox";
import MapEarth from "../components/home/mapEarth";
export default {
  name: "home",
  data() {
    return {
      titleName: ["嘉宾贺词", "直播入口", "推荐展品", "推荐展商"],
    };
  },
  props: {},
  components: {
    BannerSwiper,
    TitleBox,
    MapEarth,
  },
  mounted() {
    this.getEarthMap();
  },
  methods: {
    getEarthMap() {
      let url = this.$baseUrl+ "?action=getEarthdate";
      this.$axios
        .get(url, {
          params: {
            type: "cn",
          },
        })
        .then((res) => {
          console.log(res); //返回的数据
        })
        .catch((err) => {
          console.log(err); //错误信息
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  // 轮播banner
  .banner {
    width: 686rpx;
    padding: 0 32rpx;
    height: auto;
    background: #f1f1f1;
    padding-top: 40rpx;
    padding-bottom: 24rpx;
    .bannerBox {
      width: 686rpx;
      height: 260rpx;
    }
  }
  // 展示内容
  .content {
    width: 686rpx;
    padding: 0 32rpx;
    height: auto;
    background: #f1f1f1;
    padding-bottom: 40rpx;
  }
  // 海报展示
  .showBill {
    .billBox {
      width: 686rpx;
      height: 322rpx;
      background: #3c79f0;
      border-radius: 10rpx;
    }
  }
  // 嘉宾贺词
  .guestSpeech {
    .guestSpeechCon {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }
    .videoBox {
      width: 330rpx;
      height: auto;
      margin-bottom: 15rpx;
      .video {
        width: 330rpx;
        height: 186rpx;
        background: rgba($color: #000000, $alpha: 0.3);
        border-radius: 6px;
      }
      p {
        font-size: 26rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba($color: #333333, $alpha: 0.8);
        margin-top: 16rpx;

        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
      }
    }
    .videoBox:last-child,
    .videoBox:nth-last-child(2) {
      margin-bottom: 0;
    }
  }
  // 直播入口
  .liveRoom {
    .liveRoomCon {
      .roomBox {
        width: 686rpx;
        height: 230rpx;
        background: rgba($color: #000000, $alpha: 0.4);
        border-radius: 10rpx;
        margin-bottom: 24rpx;
        position: relative;
        p {
          width: 610rpx;
          height: auto;
          font-size: 30rpx;
          font-family: PingFang SC;
          font-weight: bold;
          color: #ffffff;

          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          display: -webkit-box;

          position: absolute;
          bottom: 14rpx;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .roomBox:last-child {
        margin-bottom: 0;
      }
    }
  }
  // 推荐展品
  .showExhibit {
    .exhibitCon {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .exhibitBox {
        width: 331rpx;
        height: 348rpx;
        background: #ffffff;
        box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
        border-radius: 6rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 15rpx;
        .exhibitImg {
          width: 307rpx;
          height: 214rpx;
          border-radius: 6rpx;
          background-color: rgba($color: #000000, $alpha: 0.3);
        }
        p {
          width: 307rpx;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .exhibitTitle {
          margin-top: 18rpx;
          font-size: 26rpx;
          font-family: PingFang SC;
          font-weight: bold;
          color: #333333;
        }
        .exhibitPrice {
          margin-top: 15rpx;
          font-size: 30rpx;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba($color: #e95003, $alpha: 0.9);
        }
      }
    }
    .exhibitBox:last-child,
    .exhibitBox:nth-last-child(2) {
      margin-bottom: 0;
    }
  }
  // 推荐展商
  .showExhibitor {
    .exhibitorCon {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .exhibitorBox {
        width: 215rpx;
        height: auto;
        margin-right: 20rpx;
        margin-bottom: 20rpx;
        .exhibitorImg {
          width: 215rpx;
          height: 160rpx;
          background: #ffffff;
          border: 2rpx solid #cdcdcd;
          border-radius: 4rpx;
        }
        .exhibitorTitle {
          width: 215rpx;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;

          font-size: 24rpx;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba($color: #333333, $alpha: 0.8);
          margin-top: 16rpx;
        }
      }
      .exhibitorBox:nth-child(3n + 0) {
        margin-right: 0;
      }
      .exhibitorBox:last-child,
      .exhibitorBox:nth-last-child(2),
      .exhibitorBox:nth-last-child(3) {
        margin-bottom: 0;
      }
    }
  }
  // 各地分馆
  .hallBox {
    width: 750rpx;
    background: #ffffff;
    border-bottom: 16rpx solid #f1f1f1;
    .title {
      width: 100%;
      height: auto;
      padding-top: 40rpx;
      padding-bottom: 23rpx;
      text-align: center;
      font-size: 30rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba($color: #131a62, $alpha: 0.9);
      position: relative;
      .arrow {
        width: 20rpx;
        height: 8rpx;
        position: absolute;
        top: 58rpx;
        right: 31rpx;
      }
      select {
        position: absolute;
        top: 46rpx;
        right: 57rpx;

        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba($color: #e95003, $alpha: 0.9);

        background: transparent;
        border: 0;
        outline: none;
        appearance: none;
        -moz-appearance: none; /* Firefox */
        -webkit-appearance: none; /* Safari 和 Chrome */
      }
    }
    .mapBox {
      padding: 0 32rpx 32rpx;
      .mapEarth {
        width: 686rpx;
        height: 260rpx;
        border-radius: 10rpx;
        // background-color: #000000;
        background-image: url('../assets/home/earthBack.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }
  // 热门活动
  .activityBox {
    width: 750rpx;
    background: #ffffff;
    .title {
      width: 100%;
      padding-top: 32rpx;
      padding-bottom: 7rpx;
      text-align: center;
      font-size: 30rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba($color: #131a62, $alpha: 0.9);
    }
    .activity {
      width: 686rpx;
      padding: 0 32rpx;
      height: 188rpx;
      border-bottom: 2rpx solid #e5e5e5;
      display: flex;
      align-items: center;
      .activityImg {
        width: 230rpx;
        height: 140rpx;
        background-image: url("../assets/home/live.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
      .infoBox {
        width: 450rpx;
        margin-left: 25rpx;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .infoTitle {
          font-size: 26rpx;
          font-family: PingFang SC;
          font-weight: bold;
          color: #333333;
          opacity: 0.9;
          margin-bottom: 18rpx;
        }
        .infoCon {
          font-size: 24rpx;
          font-family: PingFang SC;
          font-weight: bold;
          color: #333333;
          opacity: 0.8;
        }
        .address {
          margin-bottom: 15rpx;
        }
      }
    }
    .activity:last-child {
      border-bottom: none;
    }
  }
}
</style>