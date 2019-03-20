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
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// import './lib/mui/js/mui.js'

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root='http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON=true;   //post提交  设置表单数据格式组织形式，就可以代替  application/x-www-form-urlencoded

//导入时间格式化插件  moment.js
import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat',function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dateStr).format(pattern);
})


//预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// with parameters install
// Vue.use(VuePreview, {
//   mainClass: 'pswp--minimal--dark',
//   barsSize: {top: 0, bottom: 0},
//   captionEl: false,
//   fullscreenEl: false,
//   shareEl: false,
//   bgOpacity: 0.85,
//   tapToClose: true,
//   tapToToggleControls: false
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
