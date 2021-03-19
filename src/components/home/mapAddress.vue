<template>
  <baidu-map
    class="mapAddress"
    :center="center"
    :zoom="zoom"
    @ready="handler"
    @click="getClickInfo"
    :scroll-wheel-zoom="true"
  >
  </baidu-map>
</template>

<script>
export default {
  name: "mapAddress",
  data() {
    return {
      center: { lng: 109.45744048529967, lat: 36.49771311230842 },
      zoom: 1,
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    handler({ BMap, map }) {
      var point = new BMap.Point(109.49926175379778, 36.60449676862417);
      map.centerAndZoom(point, 1);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      var circle = new BMap.Circle(point, 6, {
        strokeColor: "Red",
        strokeWeight: 6,
        strokeOpacity: 1,
        Color: "Red",
        fillColor: "#f03",
      });
      map.addOverlay(circle);
    },
    getClickInfo(e) {
      console.log(e.point.lng);
      console.log(e.point.lat);
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    },
  },
};
</script>

<style lang="scss" scoped>
.mapAddress {
  width: 100%;
  height: 100%;  
}

</style>