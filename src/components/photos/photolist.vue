<template>
    <div class="ph-container">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                 <div class="mui-scroll">
                     <!-- 控制全部  这个标题 高亮 -->
                    <a :class="['mui-control-item',item.id==0?' mui-active':'']" v-for="item in category" :key="item.id" @click="getphotobyid(item.id)">
                        {{ item.title }}
                    </a>
              </div>
            </div>
        </div>
    <!-- 使用 mint-ui 的懒加载 -->
    <ul class="img-ul">
        <router-link v-for="item in photolist" :key="item.id" tag="li" :to="'/home/photolist/photoinfo/' + item.id ">
            <img v-lazy="item.img_url">
            <div class="msg">
                <h1 class="title">{{item.title}}</h1>
                <div class="content">{{item.zhaiyao}}</div>
            </div>
        </router-link>

    </ul>
    </div>
</template>
<script>
// 'use strict'    
import mui from '../../lib/mui/js/mui.min.js'   //受 严格模式影响  
// document.addEventListener('touchmove', function (event) {
//     event.preventDefault();
// }, {
//     passive: false
// });

export default {
    data(){
        return {
            category:[],
            photolist:[],
        }
    },
    created(){
        this.getCategory();
        this.getphotobyid(0);//默认传参 0   代表全部
    },
    mounted(){
            // mui('body').on('tap','a',function(){document.location.href=this.href;});
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
    },
    methods:{
        getCategory(){
            this.$http.get('api/getimgcategory').then(result=>{
                result.body.message.unshift({
                    id:0,
                    title:'全部'
                })
                this.category=result.body.message;
            })
        },
        getphotobyid(id){
            console.log(id);
            this.$http.get('api/getimages/'+id).then(result=>{
                this.photolist=result.body.message;
            })
        }
    }
}
</script>
<style lang="scss" scoped>
*{
    touch-action: pan-y;
    list-style: none;
}
.img-ul{
    padding: 0.1rem;
    // background-color: #ccc;
    padding-bottom: 0;
    li{
        position: relative;
        img{
            width: 100%;
        }
        text-align: center;
        margin-bottom: .1rem;
        box-shadow: 0 0 0.06rem #999;


        
        img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
        }
        .msg{
            width:100%;
            position: absolute;
            bottom: 0;
            text-align:left;
            color:white;
            background-color: rgba(0,0,0,.4);
            .title{
                font-size: .15rem;
                font-weight: 800;
                margin-bottom: .1rem;
            }
            .content{
                font-size: .14rem;
                // 三行显示
                // overflow: hidden;
                // text-overflow: ellipsis;
                // white-space: nowrap;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
            }
        }
    }

}

</style>
