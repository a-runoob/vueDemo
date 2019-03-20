<template>
    <div class="goodsinfo-container">
        <!-- top -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <!-- 引入 轮播 组件   lunbo -->
                    <lunbo :lunboList="lunboList"></lunbo>
                </div>
            </div>
        </div>
        <!-- center -->
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                    </div>
                </div>
            <div class="mui-card-footer">页脚</div>
        </div>
        <!-- bottom -->
        <div class="mui-card">
            <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../images/cbd.jpg)"></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>Posted on January 18, 2016</p>
                    <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <a class="mui-card-link">Like</a>
                <a class="mui-card-link">Read more</a>
            </div>
        </div>
    </div>
</template>
<script>
import lunbo from '../subcomponent/lunbo.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            lunboList:[],
        }
    },
    created(){
        this.getlunbo();
    },
    methods:{
        getlunbo(){
            this.$http.get('api/getthumimages/'+ this.id).then(result=>{
                result.body.message.forEach(element => {
                    element.img=element.src;
                });
                this.lunboList=result.body.message;
            })
        }
    },
    components:{
        lunbo:lunbo
    }
}
</script>
<style lang="scss" scoped>
.container{
    padding-left: 0;
    padding-right: 0;
}
.goodsinfo-container{
    width:100%;
    background-color: #eee;
    overflow: hidden;   
}
</style>
