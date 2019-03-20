<template>
    <div>
        <!-- 轮播 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboList"  :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:['lunboList']
}
</script>
<style lang="scss" scoped>
  .mint-swipe{
      height: 2rem;
      .mint-swipe-item{
            img{
                height: 100%;
                width:100%;
            }
      }

  }
</style>
