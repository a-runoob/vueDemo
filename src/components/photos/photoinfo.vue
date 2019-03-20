<template>
    <div class="info-container">
        <div class="header">
            <h1 class="title">{{photoinfo.title}}</h1>
            <div class="dateinfo">
                <span class="time">发表时间:{{photoinfo.add_time | dateFormat}}</span>
                <span class="click">点击次数:{{photoinfo.click}}</span>
            </div>
        </div>
        <hr>


        <!-- 预览图   插件-->
        <div class="thumbs">
            <vue-preview :slides="list" @close="handleClose"></vue-preview>
        </div>


        <!-- 评论  子组件 -->
        <comment :id="this.id"></comment>
    </div>
</template>
<script>
import comment from '../subcomponent/comment.vue'
export default {
    data(){
        return{
            photoinfo:{},
            id:this.$route.params.id,
            list:[],//预览图列表
        }
    },
    created(){
        this.getphotoinfo();
        this.getthumbs();
    },
    methods:{
        getphotoinfo(){
            console.log('图片id'+this.id);
            this.$http.get('api/getimageinfo/'+this.id).then(result=>{
                this.photoinfo=result.body.message[0];
            })
        },
        getthumbs(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                result.body.message.forEach(element => {
                    element.msrc=element.src;
                    element.alt='photo';
                    element.title='title';
                    element.w=600;
                    element.h=600;
                });
                this.list=result.body.message;
            })
        },
        handleClose () {
            console.log('close event')
         }
    },
    components:{
        comment:comment
    }
}
</script>
<style lang="scss">
.info-container{
    width:100%;
    .header{
        .title{
            font-size: .22rem;
            text-align: center;
            margin-bottom: .14rem;
            color:#226aff;
        }
        .dateinfo{
            display: flex;
            justify-content: space-between;
            .time{
                font-size: .13rem;
            }
            .click{
                font-size: .13rem;
            }
        }
    }
    .thumbs{
        width: 100%;
        .my-gallery{
            padding: 0 0.07rem;
            text-align: center;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            // justify-content: space-between;
        }
        figure{
            margin:0.05rem;
            padding:0;
            width: 1rem;
            height: 1rem;
            img{
                height: 100%;
            }
        }

    }
}

</style>
