<template>
    <div>
        <!-- 轮播 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboList"  :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/news.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/share.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/buycar.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/liuyan.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <img src="../../images/video.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/call.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>
<script>
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
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result=>{
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
    }
}
</script>
<style  scoped lang="scss">
  $reed:red;
  h3{
      color:$reed;
  }
  .mint-swipe{
      height: 2rem;
      .mint-swipe-item{
            &:nth-child(1){
                background-color: red;
            }
            &:nth-child(2){
                background-color: gray;
            }
            &:nth-child(3){
                background-color: green;
            }
            img{
                height: 100%;
                width:100%;
            }
      }

  }
  .mui-table-view{
      width: 100%;
       background-color: #fff;
       border:none;
        .mui-table-view-cell{
             border:none;
             border:0;
             width: 33.33%;
             img{
                 width: .4rem;
                 height: .4rem;
             }
             .mui-media-body{
                 font-size: .13rem;
             }
    }
           
   
  }
</style>
