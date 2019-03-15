<template>
  <div class="container">
    <mt-header fixed title="Vue项目"></mt-header>

    <transition >
        <router-view></router-view>
    </transition>

    
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/vip">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/buycar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
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
  name: 'App'
}
</script>

<style scoped>
  .container{
    /* 为40px */
    padding-top:.5rem;    
    overflow-x: hidden;  
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
</style>
