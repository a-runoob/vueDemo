<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1"  @change="countchange" ref="input"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    mounted(){
        // 初始化numbox
        mui('.mui-numbox').numbox();
        console.log('最大库存:'+this.max); 
    },
    methods:{
        countchange(){
            //input 值 传给父组件
            // console.log(this.$refs.input.value)
            this.$emit('getcount',parseInt(this.$refs.input.value));
        }
    },
    props:['max'],
    watch:{
        max:function(newValue,oldValue){
            // 为  numbox  用js方法添加最大值
            mui('.mui-numbox').numbox().setOption('max',newValue);
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
