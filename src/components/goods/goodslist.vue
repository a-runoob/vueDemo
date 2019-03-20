<template>
    <div class="goods-container">
        <div class="goods-header" v-for="item in goodslist" :key="item.id" @click="getdetail(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.zhaiyao}}</h1>
            <div class="goods-footer">
                <div class="price">
                    <div class="new">{{item.sell_price}}￥</div>
                    <div class="old">{{item.market_price}}￥</div>
                </div>
                <div class="sold">
                    <div class="hot">热卖中</div>
                    <div class="left">还剩{{item.stock_quantity}}件</div>
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pageIndex:1,
            goodslist:[],
        }
    },
    created(){
        this.getgoods();
    },
    methods:{
        getgoods(){
            this.$http.get('api/getgoods?pageindex='+ this.pageIndex).then(result=>{
                this.goodslist=this.goodslist.concat(result.body.message);
            })
        },
        getmore(){
            this.pageIndex++;
            this.getgoods();
        },
        getdetail(id){ 
            // console.log(this);
            // 另一种 方法 跳转    代替 routerlink
            this.$router.push('/home/goodslist/goodsinfo/'+id)
            // 2
            // this.$router.push({
            //     path:'/home/goodslist/goodsinfo/'+id
            // })
            // 3
            // this.$router.push({
            //     name:'goodsinfo',
            //     param:{id}
            // })
        }
    }
}
</script>
<style lang="scss" scoped>
.goods-container{
    padding:.1rem 0.07rem;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .goods-header{
        width: 49%;
        border:0.02rem solid #ccc;
        padding: 0.03;
        margin-bottom: .1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img{
            width: 100%;
        }
        .title{
            font-size: .17rem;
            font-weight: bold;
            color: #000;
        }
        .goods-footer{
            background-color: #eee;
            .price{
                display: flex;
                .new{
                    font-size: .16rem;
                    color:red;
                    font-weight: bold;
                }
                .old{
                    font-size: .17rem;
                    text-decoration: line-through;
                    margin-left: .1rem;
                }
            }
            .sold{
                display: flex;
                justify-content: space-between;
                font-size: .15rem;
            }
        }
    }
}
</style>
