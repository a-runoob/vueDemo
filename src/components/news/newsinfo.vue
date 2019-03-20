<template>
    <div class="newsinfo-container">
        <h3 class="title">{{content.title}}</h3>
        <p class="subtitle">
            <span class="add-time">发表时间：{{content.add_time | dateFormat}}</span>
            <span class="click">点击次数：{{content.click}}</span>
        </p>
        <hr>
        <div class="newscontent" v-html="content.content">

        </div>

        <!-- 评论 子组件    父子组件传值 -->
        <comment :id="this.id"></comment>
    </div>
</template>
<script>
import {Taost} from 'mint-ui'  
//  导入子组件comment  
import comment from '../subcomponent/comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            content:{}  //新闻对象
        }
    },
    created(){
        this.getnewsinfo();
    },
    methods:{
        getnewsinfo(){
            this.$http.get('api/getnew/' + this.id).then(result=>{
                if(result.body.status==0){
                    this.content=result.body.message[0];
                }
                else{
                    Toast('新闻详情内容获取失败');
                }
            })
        }
    },
    components:{
        //注册子组件
        'comment':comment
    }
}
</script>
<style lang="scss" scoped>
.newsinfo-container{
    padding:0 0.05rem;
    .title{
        font-size: .16rem;
        text-align: center;
        color:red;
        margin:.15rem 0;
    }
    .subtitle{
        font-size: .13rem;
        display: flex;
        justify-content: space-between;
        color:#226aff; 

    }
}
</style>
