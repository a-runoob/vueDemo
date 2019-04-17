<template>
    <div class="car-container">
        <!-- 购物车列表 -->
        <div class="mui-card" v-for="(item,index) in buycarlist" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <!-- 给子组件传值 -->
                    <mt-switch  v-model="$store.getters.getselect[item.id]" @change="selectChanged(item.id,$store.getters.getselect[item.id])"></mt-switch>
                    <img :src="item.thumb_path" alt="">
                    <div class="goodsinfo">
                        <h1>{{item.title}}</h1>
                        <p>
                            <span class="price">￥{{item.sell_price}}</span>
                            <numbox class="numbox" :count="$store.getters.getcount[item.id]" :id="item.id"></numbox>
                            <a href="#" @click.prevent="deletegoods(index,item.id)">删除</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 商品 总额   -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="left">
                        <p class="tatal">总计（不含运费）</p>
                        <p class="tatal-price">已勾选商品&nbsp;<span>{{$store.getters.getgoodsTatal.count}}</span>&nbsp;件，总价&nbsp;￥<span>{{$store.getters.getgoodsTatal.tatal}}</span>&nbsp;元</p>
                    </div>
                    <div class="right">
                        <mt-button type="danger" size="large">去结算</mt-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import numbox from '../subcomponent/car_numbox.vue'
export default {
    name:'buycar',
    data(){
        return{
            buycarlist:[],//购物车 的物品
        }
    },
    created(){
        this.getcarlist();
    },
    methods:{
        //获取购物车商品信息
        getcarlist(){
            var idArr=[];
            this.$store.state.car.forEach(item=>{
                idArr.push(item.id);
            });
            if(idArr.length<= 0){
                return;
            }
            this.$http.get('api/goods/getshopcarlist/'+idArr.join(',')).then(result=>{
                this.buycarlist=result.body.message;
            })
        },
        //删除商品
        deletegoods(index,id){  //根据index删除购物车列表的商品
            this.buycarlist.splice(index,1);
            this.$store.commit('delgoods',id);
        },
        //更改select
        selectChanged(id,val){
            // console.log(id,val)
            this.$store.commit('changeSelect',{id:id,select:val})
        }
    },
    components:{
        numbox
    }
}
</script>
<style lang="scss">
.container{
    padding-left: .1rem;
     padding-right: .1rem;
}
.car-container{
    .mui-card-content-inner{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.05rem;
        span{
            color:red;
            font-size: .18rem;
            font-weight: 600;
        }
        img{
            height: .6rem;
            width:.6rem;
        }
        .goodsinfo{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h1{font-size: .15rem;font-weight: bold;text-align: center;}
            p{
                span{color:red;font-weight: 900;font-size: .14rem;}
                .numbox{height: .3rem;}
            }
        }
    }  
}
</style>
