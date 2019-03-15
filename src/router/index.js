import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/tabbar/homeBar.vue'
import buycar from '../components/tabbar/buycarBar.vue'
import search from '../components/tabbar/searchBar.vue'
import vip from '../components/tabbar/vipBar.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/buycar',
      name: 'buycar',
      component: buycar
    },
  ],
  linkActiveClass:'mui-active'
})
