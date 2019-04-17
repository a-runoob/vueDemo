// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


// 导入Mint Ui
import MintUi from 'mint-ui'    //引入全部组件
import 'mint-ui/lib/style.css'  //样式文件
// 应用到Vue
Vue.use(MintUi)

//按需导入
// import { Header} from 'mint-ui'
// Vue.component(Header.name,Header)
// import {Swipe,SwipeItem} from 'mint-ui'
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
//导入bootstrap  css 文件
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';



//导入 MUI 代码片段    还有js片段
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
// import './lib/mui/js/mui.js'

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root='http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON=true;   //post提交  设置表单数据格式组织形式，就可以代替  application/x-www-form-urlencoded

//导入 axios
import axios from 'axios'
Vue.prototype.$axios = axios;

//导入时间格式化插件  moment.js
import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat',function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dateStr).format(pattern);
})


//预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//Vuex
import Vuex from 'Vuex'
Vue.use(Vuex);
var  store=new Vuex.Store({
  state:{
    //存放购物车商品的 信息    id,price单价 ，count数量， select是否选中（默认选中），
    car:JSON.parse(localStorage.getItem('car')||'[]')
  },
  mutations:{
    addtocar(state,goodsinfo){
      var flag=true;
      state.car.some(item=>{
        if(item.id==goodsinfo.id){
          flag=false;
          item.count+=goodsinfo.count;
          return false;
        }
      })
      if(flag){
        state.car.push(goodsinfo);
      }
      localStorage.setItem('car',JSON.stringify(state.car));
    },
    // 更新购物车  count
    updatecount(state,goodsinfo){
      state.car.some(item=>{
        // 找出 修改的商品与store中对应的商品   count覆盖
        if(item.id==goodsinfo.id){
          item.count=parseInt(goodsinfo.count);
          return true;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    // 删除购物商品
    delgoods(state,id){
      state.car.some((item,index)=>{
        if(item.id==id){
          state.car.splice(index,1);
          return true;
        }
      })
      //更新localStorage  
      localStorage.setItem('car',JSON.stringify(state.car));
    },
    //更改select
    changeSelect(state,info){
      state.car.some(item=>{
        if(item.id==info.id){
          item.select=info.select;
          return true;
        }
      })
      //更新localStorage
      localStorage.setItem('car',JSON.stringify(state.car));
    }
  },
  getters:{
    // 相当于计算属性 computed  和 filter 
    getAllCount(state){
      var c=0
      state.car.forEach(item=>{
        c+=item.count;
      })
      return c;
    },
    // 获取商品count
    getcount(state){
      var count=[];
      state.car.forEach(item => {
          count[item.id]=item.count;
      });
      return count;
    },
    //获取商品 select
    getselect(state){
      var select={};
      state.car.forEach(item=>{
        select[item.id]=item.select;
      })
      return select;
    },
    //计算商品总价
    getgoodsTatal(state){
      var goods={
        count:0,
        tatal:0
      }
      state.car.forEach(item=>{
        if(item.select==true){
          goods.count+=item.count;
          goods.tatal+=item.count * item.price;
        }
      })
      return goods;
    }
    
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store:store
})
