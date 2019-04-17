<template>
    <div class="goodsinfo-container">
        <!-- 加入购物车的小球  ball -->
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag"  ref="ballDom"></div>
        </transition>

        <!-- top   轮播-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <!-- 引入 轮播 组件   lunbo -->
                    <lunbo :lunboList="lunboList" :ifFull="false"></lunbo>
                </div>
            </div>
        </div>
        <!-- center   商品购买-->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.title}}</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <div class="price">
                            <span class="market">市场价:<del>￥{{goodsinfo.market_price}}</del></span>
                            <span class="sold">销售价:<span class="sold-price">￥{{goodsinfo.sell_price}}</span> </span>
                        </div>
                        <div class="num">购买数量:<numbox class="numbox" @getcount="getcount" :max="goodsinfo.stock_quantity"></numbox></div>
                        <mt-button size="small" type="primary">立即购买</mt-button>
                        <mt-button size="small" type="danger" class="buycar" @click="addbuycar">加入购物车</mt-button>
                    </div>
                </div>
        </div>
        <!-- bottom   商品参数-->
        <div class="mui-card goodsmsg">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="goods-num">商品货号:{{goodsinfo.goods_no}}</p>
                    <p class="goods-storage">库存情况:{{goodsinfo.stock_quantity}}件</p>
                    <p class="goods-time">上架时间:{{goodsinfo.add_time  | dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer goodsmsg-footer">
                <mt-button type='primary' plain size='large' class="mt-button" @click="godesc(id)">图文介绍</mt-button>
                <mt-button type='danger' plain size="large" class="mt-button" @click="gocomment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import lunbo from '../subcomponent/lunbo.vue'
import numbox from '../subcomponent/goodsinfo_numbox.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            lunboList:[],
            goodsinfo:{},
            ballFlag:false,
            //购买数量
            count:1,
        }
    },
    created(){
        // console.log(this.id)
        this.getlunbo();
        this.getgoodsinfo();
    },
    methods:{
        getlunbo(){
            this.$http.get('api/getthumimages/'+ this.id).then(result=>{
                result.body.message.forEach(element => {
                    element.img=element.src;
                });
                this.lunboList=result.body.message;
            })
        },
        // 获取商品信息
        getgoodsinfo(){
            this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
                this.goodsinfo=result.body.message[0];
            })
        },
        //使用编程时导航进入 图文介绍
        godesc(id){
            console.log(id)
            this.$router.push({name:'goodsdesc',params:{id}})
        },
        gocomment(id){
            this.$router.push({name:'goodscomment',params:{id}})
        },
        // 加入购物车
        addbuycar(){
            this.ballFlag=!this.ballFlag;
            //car 存放购物车商品的 信息    id,price单价 ，count数量， select是否选中（默认选中），
            var goodsinfo={id:this.id,count:this.count,price:this.goodsinfo.sell_price,select:true};
            this.$store.commit('addtocar',goodsinfo);//调用 store中的方法
        },
        // 半场动画  钩子函数
        beforeEnter(el){
            el.style.transform='translate(0,0)';
        },
        enter(el,done){
            // 获取小球dom
            const ballposition = this.$refs.ballDom.getBoundingClientRect();
            const buycarposition = document.getElementById('badge').getBoundingClientRect();
            const x=buycarposition.left-ballposition.left;
            const y=buycarposition.top-ballposition.top;
            el.offsetWidth;
            el.style.transform=`translate(${x}px, ${y}px)`;
            el.style.transition='all 1s cubic-bezier(.62,-0.32,1,.69)  ';
            done();   //相当于  afterEnter()
        },
        afterEnter(el){
            this.ballFlag=!this.ballFlag;
        },
        // 获取购买数量  从子组件总得到
        getcount(count){
            this.count=count;
        }
    },
    components:{
        lunbo:lunbo,
        numbox:numbox
    }
}
</script>
<style lang="scss" scoped>
.container{
    padding-left: 0;
    padding-right: 0;
}
.goodsinfo-container{
    position: relative;
    .ball{
        width: .15rem;
        height: .15rem;
        background-color: red;
        border-radius: 50%;
        z-index: 99;
        position: absolute;
        left:1.58rem;
        top: 3.68rem;
    }
    width:100%;
    background-color: #eee;
    overflow: hidden;  
    .price{
        font-size: .15rem;
        .sold{
            margin-left: .2rem;
            .sold-price{
                color:red;
                font-weight: bolder;
            }
        }
    } 
    .num{
        margin:.1rem 0;
        .numbox{
            margin-left: .2rem;
        }
    }
    .buycar{
        margin-left: .2rem;
    }
    .goodsmsg{
        .goodsmsg-footer{
            display: block;
            .mt-button{
                margin:.1rem 0;
            }
        }
    }
}
</style>
