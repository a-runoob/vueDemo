<template>
  <div class="container">
    <mt-header fixed title="Vue项目"></mt-header>
    <!-- 返回按钮 -->
    <div class="back glyphicon glyphicon-chevron-left" @click="back">返回</div>
    <transition >
        <router-view></router-view>
    </transition>

    
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/vip">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/buycar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>



  </div>
</template>

<script>
//导入 jq
import $ from 'jquery'

		//适配初始化设计稿尺寸为375
		document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 100 + 'px';
		$(window).resize(function() {
			document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 100 + 'px';
		})

export default {
  name: 'App',
  methods:{
    back(){
      // 返回上一页
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    /* 为40px */
    padding-top:.5rem;
    padding-bottom: .5rem;    
    overflow-x: hidden;  
    .back{
      position: absolute;
      top:.1rem;
      left:.1rem;
      z-index: 999;
      color:#fff;
    }
  }

  .v-enter{
    transform: translateX(100%);
    opacity: 0;
  }
  .v-leave-to{
    transform: translateX(-100%);
    opacity: 0;
    position: absolute;
  }
  .v-enter-active,.v-leave-active{
    transition: all .5s ease;
  }
  .mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mint-header{
  z-index: 999;
}
</style>
