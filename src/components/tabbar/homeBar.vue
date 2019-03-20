<template>
    <div>
        <!-- 引入 轮播 组件   lunbo -->
        <lunbo :lunboList="lunboList"></lunbo>

        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <img src="../../images/news.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                    <img src="../../images/share.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                    <img src="../../images/buycar.png" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <img src="../../images/liuyan.png" alt="">
                    <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                   <img src="../../images/video.png" alt="">
                    <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <img src="../../images/call.png" alt="">
                    <div class="mui-media-body">联系我们</div></router-link></li>
        </ul>
    </div>
</template>
<script>
import lunbo from '../subcomponent/lunbo.vue'
import {Toast} from 'mint-ui'
export default {
    name:'home',
    data(){
        return{
            lunboList:[],  //轮播图片
        }
    },
    created(){
        this.getLunbo();
    },
    methods:{
        getLunbo(){
            this.$http.get('api/getlunbo').then(result=>{
                if(result.body.status==0){
                    this.lunboList=result.body.message;

                }
                else{
                    //失败
                    Toast({
                        message:'获取轮播失败',
                        duration:1500,
                        position:'top',
                    })
                }
            })
        }
    },
    components:{
        lunbo:lunbo
    }
}
</script>
<style  scoped lang="scss">
  $reed:red;
  h3{
      color:$reed;
  }

  .mui-table-view{
    //   width: 100%;
       background-color: #fff;
       border:none;
        .mui-table-view-cell{
             border:none;
             border:0;
             width: 33.33%;
             padding: 0;
             margin-top: .2rem;
             img{
                 width: .4rem;
                 height: .4rem;
             }
             .mui-media-body{
                 height: .3rem;
                 font-size: .13rem;
                 line-height: .3rem;
             }
    }
  }
</style>
