<template>
  <div class="navPosition">
    <div class="content">
      <p>
        首页 > <span>{{ navNow || "" }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "navPosition",
  data() {
    return {
      navNow: "",
    };
  },
  props: {
    navList: Array,
    required: true,
  },
  components: {},
  mounted() {
    for (var item of this.navList) {
      if (item.path == this.$route.path) {
        this.navNow = item.name;
      }
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.navPosition {
  width: 100%;
  height: auto;
  background: #ecf8fe;
}
.content {
  width: 1200px;
  height: 40px;
  border-bottom: 2px solid #dadada;
  margin: 0 auto;
  padding-top: 33px;
  p {
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 800;
    color: #333333;
    span {
      color: #f84c3a;
    }
  }
}
</style>