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
// import { Header} from 'mint-ui'
// Vue.component(Header.name,Header)

//导入bootstrap  css 文件
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


//导入 MUI 代码片段
import './lib/mui/css/mui.min.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
