<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容，最多输入120字" v-model="msg"></textarea>
        <mt-button size="large" type="primary" @click="postcmt">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title"><span>第1楼</span><span>用户：匿名用户</span><span>发表时间：2012-12-12 12:00:00</span></div>
                <div class="cmt-body">上的连接口附近开房</div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title"><span>第1楼</span><span>用户：匿名用户</span><span>发表时间：2012-12-12 12:00:00</span></div>
                <div class="cmt-body">上的连接口附近开房</div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title"><span>第1楼</span><span>用户：匿名用户</span><span>发表时间：2012-12-12 12:00:00</span></div>
                <div class="cmt-body">上的连接口附近开房</div>
            </div>
        </div>
        <mt-button size="large" type="danger" plain @click="getmore">加载更多...</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            commentlist:[],  //评论列表
            pageIndex:1,  //默认展示第一页
            msg:'',//评论内容
        }
    },
    created(){
        this.getcomment();
    },
    methods:{
        getcomment(){
            this.$http.get('api/getcomments/' + this.id +'?pageIndex = ' + this.pageIndex).then(result=>{
                if(result.body.status==0){
                    // this.commentlist=result.body.message;
                    // 数组拼接  arr3=arr.concat(arr2)
                    this.commentlist = this.commentlist.concat(result.body.message);      //以此实现加载更多
                }
                else{
                    Toast('获取评论列表失败')
                }
            })
        },
        getmore(){
            //加载更多
            this.getcomment();  
        },
        postcmt(){
            // 先判断 输入的评论是否为空
            if(this.msg.trim().length==0){
                Toast('输入不能为空！')
            }
            //发表评论
            this.$http.post('api/postcomment/'+ this.id, {content:this.msg.trim()}).then(result=>{
            //    拼接一个评论对象
                var obj = {
                    user_name:'匿名用户',
                    add_time:Date.now(),
                    content:this.msg.trim()
                }
                this.commentlist.unshift(obj); 
                this.msg="";
            })
        }
    }, 
    props:['id']
}
</script>
<style lang="scss" scoped>
.cmt-container{
    margin-bottom: .2rem;
    hr{
        margin:0.04rem 0 .2rem 0;
    }
    h3{
        font-size: .17rem;
        font-weight: 800; 
    }
    textarea{
        font-size: .14rem;
        height: .9rem;
    }
    .cmt-list{
        margin:.1rem 0;
        .cmt-item{

            .cmt-title{
                font-size: .10rem;
                display: flex;
                justify-content: space-around;
                line-height: .3rem;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: .35rem;
                text-indent: .3rem;
            }
        }
    }
}
</style>
