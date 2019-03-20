<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <!-- 点击  加个  id -->
                <router-link :to="'/home/newslist/newsinfo/'+ item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                            <span>时间:{{item.add_time | dateFormat}}</span>
                            <span>点击次数:{{ item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.mui-media a{
    padding:.15rem 0;
}
.mui-ellipsis{
    display: flex;
    // 左右对齐
    justify-content: space-between;  
    span{
        font-size: .12rem;
        color:#226aff;
       
    }
}
</style>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{ 
            newslist:[]
        }
    },
    created(){
        this.getnewslist();
    },
    methods:{
        getnewslist(){
            this.$http.get('api/getnewslist').then(result=>{
                if(result.body.status==0){
                    this.newslist=result.body.message;
                }
                else{
                    Toast('新闻列表请求失败')
                }
            })
        }
    }
}
</script>
