import Vue from 'vue'
import VueRouter from 'vue-router'
import BaiduMap from 'vue-baidu-map'


Vue.use(VueRouter)
Vue.use(BaiduMap, {
  ak: 'U4t9Dk6CdB4jhHOHt9sxEx4tv5qDFKOH'
})

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/home_m',
    name: 'Home_m',
    component: () => import('../views/Home_m.vue'),
  },
  {
    path: '/exhibit',
    name: 'Exhibit',
    component: () => import('../views/Exhibit.vue'),
    children: [
      {
        path: '/exhibit/detail',
        name: 'ExhibitDetail',
        component: () => import('../views/ExhibitDetail.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
