<template>
  <div class="exhibit">
    <div class="content">
      <div class="left">
        <div class="title">筛选条件</div>
        <div class="searchBox">
          <div class="searchInput">
            <img
              @click="goSearchInput(searchCon)"
              src="../assets/exhibit/icon_shearch.png"
              alt="搜索icon"
            />
            <input
              type="text"
              v-model="searchCon"
              placeholder="搜索公司/展品名称"
            />
          </div>
          <div
            class="searchAlways"
            v-for="(item, index) in alwaysWords"
            :class="{ select: item.isSearch }"
            :key="index"
            @click="goSearch(item)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="right">
        <div class="searchContent">
          <p class="searchTitle">搜索条件：</p>
          <div class="conditionBox">
            <p
              class="condition"
              v-for="(item, index) in condition"
              :key="index"
            >
              {{ item }}
              <img
                @click="closeSearch(item, index)"
                src="../assets/exhibit/icon_searchClose.png"
                alt="关闭搜索"
              />
            </p>
          </div>
        </div>
        <div class="list">
          <div class="exhibitLists">
            <div
              class="exhibitList"
              v-for="(item, index) in exhibitList"
              :key="index"
              @click="goDetail(item)"
            >
              <div class="bigImg"></div>
              <div class="smallImg">
                <img
                  v-for="(item_, index_) in item.imgList"
                  :key="index_"
                  v-if="index_ > 0 && index_ < 5"
                  :src="item_"
                  alt="小图"
                />
              </div>
              <div class="nameBox">
                <p class="name">{{ item.name }}</p>
                <p class="mark">
                  <img src="../assets/common/icon_mark.png" alt="收藏" />收藏
                </p>
              </div>
              <div class="area">{{ item.area }}</div>
            </div>
          </div>
          <div class="pagination">
            <img
              @click="goPage(pageIndex - 1 > 0 ? pageIndex - 1 : pageIndex)"
              src="../assets/common/pagination_L.png"
              alt="上一页"
            />
            <div class="pageBox" v-if="pageSize <= 10 && pageSize > 0">
              <div
                class="pageNum"
                :class="{ select: index + 1 == pageIndex }"
                @click="goPage(index + 1)"
                v-for="(item, index) in pageSize"
                :key="index"
              >
                <span>{{ item }}</span>
              </div>
            </div>
            <div class="pageBox" v-if="pageSize > 10">
              <!-- 1<=index<5 -->
              <div class="pageElse" v-if="pageIndex >= 1 && pageIndex < 5">
                <div
                  class="pageNum"
                  :class="{ select: index + 1 == pageIndex }"
                  @click="goPage(index + 1)"
                  v-if="index < 5"
                  v-for="(item, index) in pageSize"
                  :key="index"
                >
                  <span>{{ item }}</span>
                </div>
                <p class="dot">...</p>
                <div
                  class="pageNum"
                  :class="{ select: index + 1 == pageIndex }"
                  @click="goPage(index + 1)"
                  v-if="index < pageSize && index >= pageSize - 2"
                  v-for="(item, index) in pageSize"
                  :key="index"
                >
                  <span>{{ item }}</span>
                </div>
              </div>
              <!-- 5<=index<pageSize-5 -->
              <div
                class="pageElse"
                v-if="pageIndex >= 5 && pageIndex <= pageSize - 4"
              >
                <div
                  class="pageNum"
                  :class="{ select: index + 1 == pageIndex }"
                  @click="goPage(index + 1)"
                  v-if="index < 2 && index >= 0"
                  v-for="(item, index) in pageSize"
                  :key="index"
                >
                  <span>{{ item }}</span>
                </div>
                <p class="dot">...</p>
                <div
                  class="pageNum"
                  :class="{ select: index + 1 == pageIndex }"
                  @click="goPage(index + 1)"
                  v-if="pageIndex - 3 <= index && index < pageIndex + 2"
                  v-for="(item, index) in pageSize"
                  :key="index"
                >
                  <span>{{ item }}</span>
                </div>
                <p class="dot">...</p>
                <div
                  class="pageNum"
                  :class="{ select: index + 1 == pageIndex }"
                  @click="goPage(index + 1)"
                  v-if="index < pageSize && index >= pageSize - 2"
                  v-for="(item, index) in pageSize"
                  :key="index"
                >
                  <span>{{ item }}</span>
                </div>
              </div>
              <!-- pageSize-5<=index<pageSize -->
              <div
                class="pageElse"
                v-if="pageIndex > pageSize - 4 && pageIndex <= pageSize"
              >
                <div
                  class="pageNum"
                  :class="{ select: index + 1 == pageIndex }"
                  @click="goPage(index + 1)"
                  v-if="index < 2"
                  v-for="(item, index) in pageSize"
                  :key="index"
                >
                  <span>{{ item }}</span>
                </div>
                <p class="dot">...</p>
                <div
                  class="pageNum"
                  :class="{ select: index + 1 == pageIndex }"
                  @click="goPage(index + 1)"
                  v-if="index < pageSize && index >= pageSize - 5"
                  v-for="(item, index) in pageSize"
                  :key="index"
                >
                  <span>{{ item }}</span>
                </div>
              </div>
            </div>
            <img
              @click="
                goPage(pageIndex + 1 > pageSize ? pageIndex : pageIndex + 1)
              "
              src="../assets/common/pagination_R.png"
              alt="下一页"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exhibit",
  data() {
    return {
      searchCon: "",
      alwaysWords: [
        { name: "文旅融合综合展区", isSearch: 0 },
        { name: "沿黄文旅展区", isSearch: 0 },
        { name: "大运河文旅展区", isSearch: 0 },
        { name: "“一带一路”展区", isSearch: 0 },
        { name: "“文旅+”展区", isSearch: 0 },
        { name: "乡村文化旅游振兴展区", isSearch: 0 },
        { name: "房车露营及旅游装备展区", isSearch: 0 },
        { name: "特色旅游线路产品展区", isSearch: 0 },
        { name: "创意设计产品展区", isSearch: 0 },
        { name: "国家工艺美术精品展区", isSearch: 0 },
      ],
      condition: [],
      exhibitList: [
        {
          name: "仿制油画",
          area: "工艺美术精品展区",
          imgList: [
            require("../assets/exhibit/img1.png"),
            require("../assets/exhibit/img2.png"),
            require("../assets/exhibit/img3.png"),
            require("../assets/exhibit/img2.png"),
            require("../assets/exhibit/img3.png"),
          ],
        },
        {
          name: "仿制油画",
          area: "工艺美术精品展区",
          imgList: [
            require("../assets/exhibit/img1.png"),
            require("../assets/exhibit/img2.png"),
            require("../assets/exhibit/img3.png"),
          ],
        },
        {
          name: "仿制油画",
          area: "工艺美术精品展区",
          imgList: [
            require("../assets/exhibit/img1.png"),
            require("../assets/exhibit/img2.png"),
            require("../assets/exhibit/img3.png"),
          ],
        },
        {
          name: "仿制油画",
          area: "工艺美术精品展区",
          imgList: [
            require("../assets/exhibit/img1.png"),
            require("../assets/exhibit/img2.png"),
            require("../assets/exhibit/img3.png"),
          ],
        },
        {
          name: "仿制油画",
          area: "工艺美术精品展区",
          imgList: [
            require("../assets/exhibit/img1.png"),
            require("../assets/exhibit/img2.png"),
            require("../assets/exhibit/img3.png"),
          ],
        },
        {
          name: "仿制油画",
          area: "工艺美术精品展区",
          imgList: [
            require("../assets/exhibit/img1.png"),
            require("../assets/exhibit/img2.png"),
            require("../assets/exhibit/img3.png"),
          ],
        },
        {
          name: "仿制油画",
          area: "工艺美术精品展区",
          imgList: [
            require("../assets/exhibit/img1.png"),
            require("../assets/exhibit/img2.png"),
            require("../assets/exhibit/img3.png"),
          ],
        },
        {
          name: "仿制油画",
          area: "工艺美术精品展区",
          imgList: [
            require("../assets/exhibit/img1.png"),
            require("../assets/exhibit/img2.png"),
            require("../assets/exhibit/img3.png"),
          ],
        },
        {
          name: "仿制油画",
          area: "工艺美术精品展区",
          imgList: [
            require("../assets/exhibit/img1.png"),
            require("../assets/exhibit/img2.png"),
            require("../assets/exhibit/img3.png"),
          ],
        },
        {
          name: "仿制油画",
          area: "工艺美术精品展区",
          imgList: [
            require("../assets/exhibit/img1.png"),
            require("../assets/exhibit/img2.png"),
            require("../assets/exhibit/img3.png"),
          ],
        },
        {
          name: "仿制油画",
          area: "工艺美术精品展区",
          imgList: [
            require("../assets/exhibit/img1.png"),
            require("../assets/exhibit/img2.png"),
            require("../assets/exhibit/img3.png"),
          ],
        },
        {
          name: "仿制油画",
          area: "工艺美术精品展区",
          imgList: [
            require("../assets/exhibit/img1.png"),
            require("../assets/exhibit/img2.png"),
            require("../assets/exhibit/img3.png"),
          ],
        },
      ],

      pageSize: 15,
      pageIndex: 1,
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    // 常见搜索，点击搜索
    goSearch(item) {
      //0没查过，1已查找
      if (item.isSearch == 0) {
        this.condition.push(item.name);
        item.isSearch = 1;
      } else {
        item.isSearch = 0;
        var index = this.condition.indexOf(item.name);
        this.condition.splice(index, 1);
      }
    },
    // 输入框搜索
    goSearchInput(name) {
      if (name == "") {
        return;
      }
      var isSearch = 0; //0没查过，1已查找
      for (var item of this.condition) {
        if (item == name) {
          isSearch = 1;
          return;
        }
      }
      if (isSearch == 0) {
        this.condition.push(name);
        this.searchCon = "";
      }
    },
    // 关闭搜索条件
    closeSearch(item, index) {
      for (var i of this.alwaysWords) {
        if (i.name == item) {
          i.isSearch = 0;
        }
      }
      this.condition.splice(index, 1);
    },
    // 跳转页码
    goPage(page) {
      this.pageIndex = page;
    },
    // 查看详情
    goDetail(item) {
      this.$router.push({ name: "ExhibitDetail", params: { key: item } });
    },
  },
};
</script>

<style lang="scss" scoped>
.exhibit {
  width: 100%;
  height: auto;
  background: #ecf8fe;
  padding-top: 35px;
  .content {
    width: 1200px;
    height: auto;
    margin: 0 auto;
    display: flex;
    .left {
      width: 300px;
      height: 633px;
      background: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      .title {
        width: 100%;
        height: 60px;
        background: #131a62;
        border-radius: 10px 10px 0px 0px;
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #ffffff;
        line-height: 60px;
        text-align: center;
      }
      .searchBox {
        width: 100%;
        height: 573px;
        background: #ffffff;
        .searchInput {
          width: 223px;
          height: 50px;
          padding-right: 17px;
          border: 1px solid #131a62;
          border-radius: 6px;
          margin: 24px auto 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            cursor: pointer;
            width: 26px;
            height: 26px;
            display: block;
            margin-left: 17px;
            margin-right: 13px;
          }
          input {
            width: 100%;
            outline: none;
            border: none;
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: bold;
          }
          input::placeholder {
            color: rgba($color: #131a62, $alpha: 0.8);
          }
        }
        .searchAlways {
          cursor: pointer;
          width: 240px;
          height: 36px;
          background: #f3f3f3;
          border-radius: 2px;
          margin: 0 auto 10px;

          font-size: 16px;
          font-family: PingFang SC;
          font-weight: bold;

          text-align: center;
          line-height: 36px;
        }
        .select {
          width: 238px;
          height: 34px;
          border: 1px solid #e95003;
          color: rgba($color: #e95003, $alpha: 0.9);
          line-height: 34px;
        }
      }
    }
    .right {
      width: 876px;
      height: auto;
      margin-left: 24px;
      .searchContent {
        width: 876px;
        min-height: 60px;
        background: #ffffff;
        border-radius: 10px;
        display: flex;
        .searchTitle {
          width: 100px;
          height: 60px;
          text-align: center;
          line-height: 60px;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #333333;
          opacity: 0.7;
          margin-left: 25px;
        }
        .conditionBox {
          width: 100%;
          padding: 10px 0 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          .condition {
            position: relative;
            padding: 8px 10px;
            margin-right: 15px;
            margin-bottom: 10px;
            background: #f3f3f3;
            border: 1px solid #e95003;
            border-radius: 2px;

            font-size: 16px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba($color: #e95003, $alpha: 0.9);
            text-align: center;
            line-height: 36px;
            img {
              cursor: pointer;
              width: 16px;
              height: 16px;
              position: absolute;
              top: -8px;
              right: -8px;
            }
          }
        }
      }
      .list {
        width: 876px;
        height: 1615px;
        background: #ffffff;
        border-radius: 10px;
        margin-top: 24px;
        margin-bottom: 134px;
        padding-top: 15px;
        .exhibitLists {
          width: auto;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          .exhibitList {
            cursor: pointer;
            width: 272px;
            height: 346px;
            border: 1px solid #131a62;
            border-radius: 6px;
            overflow: hidden;
            margin-right: 15px;
            margin-bottom: 24px;
            .bigImg {
              width: 100%;
              height: 200px;
              background-image: url("../assets/exhibit/img1.png");
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
            }
            .smallImg {
              width: 252px;
              padding: 10px;

              display: flex;
              align-items: center;
              justify-content: flex-start;
              img {
                width: 56px;
                height: 40px;
                display: block;
                margin-right: 9px;
              }
              img:last-child {
                margin-right: 0;
              }
            }
            .nameBox {
              margin-top: 6px;
              padding: 0 10px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              .name {
                width: 80%;
                font-size: 20px;
                font-family: PingFang SC;
                font-weight: 800;
                color: rgba($color: #333333, $alpha: 0.8);
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
              }
              .mark {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                font-family: PingFang SC;
                font-weight: 800;
                color: rgba($color: #e95003, $alpha: 0.8);

                img {
                  width: 17px;
                  height: 16px;
                  display: block;
                }
              }
            }
            .area {
              width: 252px;
              padding: 0 10px;
              margin-top: 16px;

              font-size: 16px;
              font-family: PingFang SC;
              font-weight: 800;
              color: rgba($color: #131a62, $alpha: 0.8);

              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }
          .exhibitList:nth-child(3n + 0) {
            margin-right: 0;
          }
          .exhibitList:nth-child(10),
          .exhibitList:nth-child(11),
          .exhibitList:nth-child(12) {
            margin-bottom: 0;
          }
        }
        .pagination {
          margin-top: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 50px;
            height: 30px;
            display: block;
            cursor: pointer;
          }
          img:first-child {
            margin-right: 12px;
          }
          .pageBox {
            display: flex;
            .pageElse {
              display: flex;
              .dot {
                font-size: 20px;
                font-family: SimSun;
                font-weight: 400;
                color: #333333;
                margin-right: 12px;
              }
            }
            .pageNum {
              cursor: pointer;
              width: 30px;
              height: 30px;
              margin-right: 12px;
              border: 2px solid #b3b3b3;
              border-radius: 2px;
              display: flex;
              align-items: center;
              justify-content: center;
              span {
                font-size: 20px;
                font-family: SimSun;
                font-weight: 400;
                color: #333333;
              }
            }
            .select {
              width: 34px;
              height: 34px;
              border: 0;
              background: #e95003;
              span {
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
}
</style>