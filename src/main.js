import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入echarts
import echarts from 'echarts'
import 'echarts-gl'
Vue.prototype.$echarts = echarts

// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// 引入axios
import axios from 'axios'
//设置axios为form-data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]
//修改原型链
Vue.prototype.$axios = axios
Vue.prototype.$baseUrl = 'http://192.168.6.156:8028/ajax/exapi.aspx'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
