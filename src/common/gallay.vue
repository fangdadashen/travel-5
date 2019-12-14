<template>
  <div 
    @click="gallayshow" 
    class="gallay-container">
        <div class="gallay-wrapper">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) of imgList" :key="index">
                <img class="gallay-img" :src="item">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper> 
        </div>
   </div>
</template>

<script>
export default {
    name:'CommonGallay',
    props:{
        imgList:Array
        },
    data() {
      return {
        swiperOption: {
         pagination : '.swiper-pagination',
         paginationType : 'fraction',
         observer:true,//启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
         observeParents:true,//和上面一样，不过是侦听父元素
        },
      }
    },
    methods:{
        gallayshow(){
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.gallay-container>>>.swiper-container{
    overflow: inherit;
}
.gallay-container{
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    align-items: center;
    overflow: hidden;
    z-index: 3;
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: teal;
}
.gallay-wrapper{
    width:100%;
    height: 0;
    padding-bottom: 100%;
}
.swiper-pagination{
    color: #fff;
    margin-bottom:-1rem;
    font-size: .2rem;
}
.gallay-img{
    width:100%;
}
</style>