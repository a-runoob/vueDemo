import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/tabbar/homeBar.vue'
import buycar from '../components/tabbar/buycarBar.vue'
import search from '../components/tabbar/searchBar.vue'
import vip from '../components/tabbar/vipBar.vue'
import newslist from '../components/news/newslist.vue'
import newsinfo from '../components/news/newsinfo.vue'
import photolist from '../components/photos/photolist.vue'
import photoinfo from '../components/photos/photoinfo.vue'
import goodslist from '../components/goods/goodslist.vue'
import goodsinfo from '../components/goods/goodsinfo.vue'
import goodsdesc from '../components/goods/goodsdesc.vue'
import goodscomment from '../components/goods/goodscomment.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {
      path: '/home',
      name: 'home',
      component: home,
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
    {
      path:"/home/newslist",
      component:newslist
    },
    {
      path:'/home/newslist/newsinfo/:id',
      component:newsinfo
    },
    {
      path:'/home/photolist',
      component:photolist
    },
    {
      path:'/home/photolist/photoinfo/:id',
      component:photoinfo
    },
    {
      path:'/home/goodslist',
      component:goodslist
    },
    {
      path:'/home/goodslist/goodsinfo/:id',
      component:goodsinfo,
      name:goodsinfo,
    },
    {
      path:'/home/goodslist/goodsinfo/goodsdesc/:id',
      component:goodsdesc,
      name:'goodsdesc'
    },
    {
      path:'/home/goodslist/goodsinfo/goodscomment/:id',
      component:goodscomment,
      name:'goodscomment'
    }
  ],
  linkActiveClass:'mui-active'
})
