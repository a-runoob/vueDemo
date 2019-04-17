<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="count" @change="updatecar" ref="input" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data(){
        return{
        }
    },
    methods:{
        // 更新购物车
        updatecar(){
            console.log(this.$refs.input.value);
            this.$store.commit('updatecount',{id:this.id,count:this.$refs.input.value})
        }
    },
    mounted(){
        // 初始化numbox
        mui('.mui-numbox').numbox();
    },
    props:['count','id']
}
</script>
<style lang="scss" scoped>

</style>
