<template>
  <div class="home">
    <div class="banner">
      <div class="showDataList">
        <div class="showData" v-for="(item, index) in showData" :key="index">
          <img :src="item.img" alt="数据图标" />
          <div>
            <p>{{ item.number }}{{ item.unit }}</p>
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <!-- 会议行程 -->
      <div class="agendaBox">
        <div
          class="agendaList"
          :style="{ left: -1 * agendaListViewLeft + 'px' }"
        >
          <div
            class="agenda"
            v-for="(item, index) in agendaList"
            :key="index"
            v-if="index < 10"
            :style="{ left: (342 + 30) * index + 'px' }"
          >
            <p class="time">{{ item.time }}</p>
            <p class="name">{{ item.name }}</p>
            <div class="btn">查看详情</div>
          </div>
        </div>
        <div class="agendaListBody"></div>
        <div class="scrollMore">
          <div class="scrollBox">
            <div class="scroll">
              <div
                class="position"
                :style="{
                  width: agendaListScrollPer + '%',
                  left: agendaListScrollLeft + '%',
                }"
              ></div>
            </div>
            <div class="scrollBtn">
              <div class="left">
                <img
                  v-if="agendaListScrollLeft > 0"
                  src="../assets/home/scrollBtn_left.png"
                  @click="scrollAgenda(-10)"
                  alt="左滑按钮"
                />
                <img
                  v-else
                  class="noMore"
                  src="../assets/home/scrollBtn_left_noMore.png"
                  alt="左滑按钮"
                />
              </div>
              <div class="right">
                <img
                  v-if="agendaListScrollRight > 0"
                  src="../assets/home/scrollBtn_right.png"
                  @click="scrollAgenda(10)"
                  alt="右滑按钮"
                />
                <img
                  v-else
                  class="noMore"
                  src="../assets/home/scrollBtn_right_noMore.png"
                  alt="右滑按钮"
                />
              </div>
            </div>
          </div>
          <p class="more">
            更多
            <img src="../assets/home/icon_arrow_right_blue.png" alt="更多" />
          </p>
        </div>
      </div>
      <!-- 选择各地分场馆 -->
      <div class="exhibitionCenter">
        <div class="nav">
          <p class="title">选择各地分场馆</p>
          <div
            class="btn"
            :class="{ btnSelect: hallSelect == index }"
            v-for="(item, index) in exhibitionCenter"
            :key="index"
            @click="selectHall(index)"
          >
            <div>
              <p class="hall">{{ item.hall }}</p>
              <p class="name">{{ item.name }}</p>
            </div>
            <img
              src="../assets/home/icon_arrow_right_S.png"
              v-if="hallSelect == index"
              alt="查看详情"
            />
            <img
              src="../assets/home/icon_arrow_right.png"
              v-else
              alt="查看详情"
            />
          </div>
        </div>
        <div class="map">
          <mapEarth></mapEarth>
        </div>
      </div>
      <!-- 推荐展品 -->
      <div class="showBox showExhibit">
        <div class="titleBox">
          <p class="showTitle">推荐展品</p>
          <div class="subTitle">
            <p>创意设计产品展区</p>
            <p class="more">查看更多+</p>
          </div>
        </div>
        <div class="showCon">
          <div class="show exhibit" v-for="(item, index) in 10" :key="index">
            <div class="img"></div>
            <p class="title">花边阮</p>
            <p class="price">￥8750</p>
          </div>
        </div>
      </div>
      <!-- 当前直播入口 -->
      <div class="showBox liveRoom">
        <div class="titleBox">
          <div class="showTitle">
            <p>当前直播入口</p>
            <p class="more">查看更多+</p>
          </div>
        </div>
        <div class="showCon">
          <div class="show live" v-for="(item, index) in 10" :key="index">
            <div class="img"></div>
            <p class="title">商业小纸条</p>
            <div class="intro">
              <p class="liveMan">李纸条</p>
              <div class="hotspot">
                <img src="../assets/home/hotspot.png" alt="热点icon" />
                <p>3万人正在观看</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 推荐展商 -->
      <div class="showBox showExhibitor">
        <div class="titleBox">
          <p class="showTitle">推荐展商</p>
        </div>
        <div class="showCon">
          <div class="show exhibitor" v-for="(item, index) in 10" :key="index">
            <div class="img"></div>
            <div class="exhibitorTitle">
              <p>茶文化紫砂</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 展会地址 -->
      <div class="addressBox">
        <div class="title">展会地址</div>
        <div class="address">
          <mapAddress></mapAddress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mapAddress from "@/components/home/mapAddress";
import mapEarth from "@/components/home/mapEarth"

export default {
  name: "home",
  data() {
    return {
      showData: [
        {
          name: "展出面积",
          number: "100,000+",
          unit: "m²",
          img: require("@/assets/home/icon_showData_1.png"),
        },
        {
          name: "展商家数",
          number: "3500+",
          unit: "",
          img: require("@/assets/home/icon_showData_2.png"),
        },
        {
          name: "媒体关注",
          number: "100+",
          unit: "家",
          img: require("@/assets/home/icon_showData_3.png"),
        },
        {
          name: "展位个数",
          number: "3500+",
          unit: "个",
          img: require("@/assets/home/icon_showData_4.png"),
        },
      ],
      agendaList: [
        {
          name: "郑州城市旅游会展中心1",
          time: "2021年3月7日 上午 9:00",
        },
        {
          name: "郑州城市旅游会展中心2",
          time: "2021年3月7日 上午 9:00",
        },
        {
          name: "郑州城市旅游会展中心3",
          time: "2021年3月7日 上午 9:00",
        },
        {
          name: "郑州城市旅游会展中心4",
          time: "2021年3月7日 上午 9:00",
        },
        {
          name: "郑州城市旅游会展中心5",
          time: "2021年3月7日 上午 9:00",
        },
        {
          name: "郑州城市旅游会展中心6",
          time: "2021年3月7日 上午 9:00",
        },
        {
          name: "郑州城市旅游会展中心7",
          time: "2021年3月7日 上午 9:00",
        },
        {
          name: "郑州城市旅游会展中心8",
          time: "2021年3月7日 上午 9:00",
        },
        {
          name: "郑州城市旅游会展中心9",
          time: "2021年3月7日 上午 9:00",
        },
        {
          name: "郑州城市旅游会展中心10",
          time: "2021年3月7日 上午 9:00",
        },
        {
          name: "郑州城市旅游会展中心11",
          time: "2021年3月7日 上午 9:00",
        },
      ],
      agendaListWidth: 0, //agendaList的实际总宽度
      agendaListViewWidth: 1200, //agendaList的显示宽度，默认1200px
      agendaListViewLeft: 0, //agendaList的显示left位置
      agendaListScrollPer: 0, //agendaList的scroll显示宽度，百分比
      agendaListScrollLeft: 0, //agendaList的scroll显示left位置
      agendaListScrollRight: 0, //agendaList的scroll显示right位置
      exhibitionCenter: [
        {
          name: "中国郑州馆",
          hall: "A",
        },
        {
          name: "中国开封馆",
          hall: "B",
        },
        {
          name: "中国洛阳馆",
          hall: "C",
        },
        {
          name: "中国南阳馆",
          hall: "D",
        },
        {
          name: "中国漯河馆",
          hall: "E",
        },
      ],
      hallSelect: 0,
    };
  },
  components: { mapAddress,mapEarth },
  mounted() {
    var agendaWidth = 342; //一个angenda的默认宽度
    var agendaLength = 10; //默认展示10个angenda
    this.agendaListWidth = agendaWidth * agendaLength + 30 * (agendaLength - 1); //agendaList的实际总长度
    this.agendaListScrollPer = 1200 / this.agendaListWidth; //agendaList的显示宽度，百分比
    this.agendaListScrollPer = Number(this.agendaListScrollPer * 100).toFixed(
      1
    );
    this.agendaListScrollRight =
      100 - this.agendaListScrollPer - this.agendaListScrollLeft; //agendaList的scroll显示right位置
  },
  methods: {
    scrollAgenda(left) {
      //left一次加10%的距离
      this.agendaListScrollLeft = this.agendaListScrollLeft + left;
      this.agendaListScrollRight =
        100 - this.agendaListScrollPer - this.agendaListScrollLeft;
      if (this.agendaListScrollLeft < 0) {
        this.agendaListScrollLeft = 0;
      }
      if (this.agendaListScrollRight < 0) {
        this.agendaListScrollRight = 0;
      }
      this.agendaListViewLeft =
        (this.agendaListScrollLeft / 100) * this.agendaListWidth;
      console.log(this.agendaListViewLeft);
    },
    selectHall(index) {
      this.hallSelect = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 600px;
  background-image: url("../assets/home/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  .showDataList {
    width: 1200px;
    height: 80px;
    background: rgba($color: #131A62, $alpha: 0.9);
    border-radius: 10px;
    position: absolute;
    top: 480px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    .showData {
      width: 298px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 2px solid rgba($color: #ffffff, $alpha: 0.9);
      img {
        width: 50px;
        height: 50px;
        display: block;
        margin-right: 25px;
      }
      div {
        p {
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: 800;
          color: #ffffff;
        }
      }
    }
    .showData:last-child {
      border: none;
    }
  }
}
.content {
  width: 100%;
  height: auto;
  padding: 40px 0 80px 0;
  background: #ecf8fe;
  // 会议行程
  .agendaBox {
    width: 1200px;
    height: auto;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
    .agendaList {
      width: 100%;
      height: 186px;
      display: flex;
      position: absolute;
      top: 0;
      left: 0px;

      .agenda {
        position: absolute;
        width: 313px;
        height: 186px;
        padding-left: 29px;
        background: #e6efff;
        border-radius: 4px;
        .time {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba($color: #333333, $alpha: 0.9);
          color: #333333;
          margin-top: 39px;
        }
        .name {
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #131A62;
          margin-top: 24px;
        }
        .btn {
          cursor: pointer;
          width: 80px;
          height: 30px;
          border: 2px solid #cccccc;
          border-radius: 15px;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba($color: #b3b3b3, $alpha: 0.9);
          text-align: center;
          line-height: 30px;
          margin-top: 23px;
        }
      }
    }
    .agendaListBody {
      width: 100%;
      height: 186px;
    }
    .scrollMore {
      width: 100%;
      margin-top: 7px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .scrollBox {
        display: flex;
        align-items: center;
        .scroll {
          width: 800px;
          height: 4px;
          background: #e5e5e5;
          overflow: hidden;
          position: relative;
          .position {
            width: 100px;
            height: 4px;
            background: #131A62;;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 999;
          }
        }
        .scrollBtn {
          display: flex;
          align-items: center;
          justify-content: center;
          .left {
            margin: 0 15px 0 10px;
          }
          img {
            cursor: pointer;
            width: 30px;
            height: 30px;
          }
          img.noMore {
            cursor: auto;
          }
        }
      }
      .more {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #131A62;
        img {
          width: 9px;
          height: 16px;
          display: block;
          margin-left: 6px;
        }
      }
    }
  }
  // 选择各地分场馆
  .exhibitionCenter {
    width: 1200px;
    height: 480px;
    margin: 40px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .nav {
      width: 435px;
      height: 480px;
      padding: 0 35px;
      background: #ffffff;
      border-radius: 6px 0px 0px 6px;
      .title {
        font-size: 34px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #131A62;;
        margin-top: 30px;
        margin-bottom: 25px;
      }
      .btn {
        cursor: pointer;
        width: 389px;
        height: 55px;
        border: 2px solid #97afbf;
        border-radius: 29px;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 42px;
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            font-family: PingFang SC;
            font-weight: bold;
          }
          p.hall {
            font-size: 20px;
            margin-right: 20px;
            color: rgba($color: #f84c3a, $alpha: 0.9);
          }
          p.name {
            font-size: 16px;
            color: #333333;
          }
        }
        img {
          width: 9px;
          height: 13px;
          display: block;
          margin-right: 20px;
        }
      }
      .btn:last-child {
        margin-bottom: 0;
      }
      .btnSelect {
        width: 393px;
        height: 59px;
        background: #131A62;;
        padding-left: 42px;
        border: none;
        div {
          p.hall {
            color: #ffffff;
          }
          p.name {
            color: #ffffff;
          }
        }
      }
    }
    .map {
      width: 895px;
      height: 480px;
      background-color: #000000;
    }
  }
  // 展示部分
  .showBox {
    width: 1200px;
    height: auto;
    margin: 40px auto 0;
    .titleBox {
      .showTitle {
        font-size: 34px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #131A62;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
      }
      .subTitle {
        margin-top: 24px;
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 800;
        color: rgba($color: #333333, $alpha: 0.9);
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
      }
      .more {
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: 800;
        color: rgba($color: #E95003, $alpha: 0.9);
      }
    }
    .showCon {
      width: 1200px;
      display: flex;
      flex-wrap: wrap;
      margin-top: 24px;
      .show {
        width: 227px;
        height: auto;
        overflow: hidden;
        margin-right: 16px;
        margin-bottom: 20px;
        background: #ffffff;
        box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
        border-radius: 6px;

        .img {
          width: 214px;
          height: 214px;
          background-image: url("../assets/home/exhibit.png");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          margin: 7px auto 16px;
        }
        .title {
          width: 214px;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #333333;
          margin: 0 auto;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
      .show:nth-child(5),
      .show:nth-child(10) {
        margin-right: 0;
      }
    }
  }
  .showExhibit {
    .showCon {
      .exhibit {
        .price {
          width: 214px;
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba($color: #E95003, $alpha: 0.9);
          margin: 7px auto 15px;
        }
      }
    }
  }
  .liveRoom {
    .showCon {
      .live {
        .img {
          background-image: url("../assets/home/live.png");
        }
        .intro {
          width: 214px;
          margin: 7px auto 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .liveMan {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #333333;
            opacity: 0.9;
          }
          .hotspot {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            img {
              width: 14px;
              height: 16px;
              display: block;
              margin-right: 5px;
            }
            p {
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #333333;
              opacity: 0.8;
            }
          }
        }
      }
    }
  }
  .showExhibitor {
    .showCon {
      .exhibitor {
        // <img src="@/assets/home/exhibitor.png" alt="展商" />
        .img {
          width: 214px;
          height: 125px;
          background-image: url("../assets/home/exhibitor.png");
          background-size: contain;
          margin: 7px auto;
        }
        .exhibitorTitle {
          width: 100%;
          border-top: 2px solid #e5e5e5;
          p {
            width: 214px;
            margin: 7px auto 15px;
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba($color: #333333, $alpha: 0.7);
          }
        }
      }
    }
  }
  // 地图部分
  .addressBox {
    width: 1200px;
    height: auto;
    margin: 40px auto 0;
    .title {
      font-size: 34px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #131A62;
      text-align: center;
    }
    .address {
      width: 1200px;
      height: 300px;
      // background-image: url("../assets/home/address.png");
      // background-size: cover;
      // background-repeat: no-repeat;
      // background-position: center;
      margin-top: 23px;
    }
  }
}
</style>
