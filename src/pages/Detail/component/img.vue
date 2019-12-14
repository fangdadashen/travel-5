<template>
  <div>
      <div class="img-wrapper" @click='HandleClickShow'>
          <detail-topbutton class="img-button"></detail-topbutton>
          <img class="img" src='http://img1.qunarzz.com/sight/p0/1503/55/5577ab22b2e205d0.water.jpg_350x240_4477a60d.jpg'>
          <div class="img-icon">
              <span class="iconfont">&#xe615;</span>
              {{this.imgList.length}}
          </div>
      </div>
      <common-gallay :imgList='imgList' v-show="Gshow" @close='HandleClickClose'></common-gallay>
  </div>
</template>

<script>
import DetailTopbutton from './topbutton'
import CommonGallay from '@/common/gallay'
export default {
    name:'DetailImg',
    components:{
        DetailTopbutton,
        CommonGallay
    },
    data(){
        return{
            Gshow:false,
            imgList:[
            'http://img1.qunarzz.com/sight/p0/1503/55/5577ab22b2e205d0.water.jpg_350x240_4477a60d.jpg',
            'http://img1.qunarzz.com/sight/p0/1503/fe/fe5c99cd2e6f7595.water.jpg_350x240_7825760a.jpg'
            ]
        }
    },
    methods:{
        HandleClickShow(){
          return this.Gshow=true;
        },
        HandleClickClose(){
            return this.Gshow=false;
        }
    }
}
</script>

<style scoped>
.img-wrapper{
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom:68.5%;
}
.img{
    width:100%;
}
.img-button{
    position: absolute;
    top:.08rem;
    left:.08rem;
}
.img-icon{
    overflow: hidden;
    position: absolute;
    bottom:.1rem;
    right:.1rem;
    box-sizing: border-box;
    background: rgba(202, 198, 198, 0.767);
    width:.8rem;
    height: 0.3rem;
    line-height: .3rem;
    text-align: center;
    border-radius: .3rem;
    font-size: .2rem;
    color: #fff;
}
</style>