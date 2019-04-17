<template>
    <div class="goodsdesc-container">
        <h1 class="title">{{goodsdesc.title}}</h1>
        <hr>
        <div class="content" v-html="goodsdesc.content"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            goodsdesc:{}
        }
    },
    created(){
        this.getgoodsdesc();
    },
    methods:{
        getgoodsdesc(){
            this.$http.get('api/goods/getdesc/'+this.id).then(result=>{
                this.goodsdesc=result.body.message[0];
            })
        }
    }
}
</script>
<style lang="scss">
.goodsdesc-container{
    padding: 0.04rem;
    .title{
        font-size: .16rem;
        font-weight: 800;
        color:#226aff;
        text-align: center;
        margin: .1rem 0;
    }
    hr{
        margin: 0 0 .1rem 0;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
</style>