<template>
  <div class="alphabet-wrapper">
      <ul>
          <li
            class="alphabet-list" 
            v-for="item of letter" 
            :key="item.id"
            :ref="item"
            @click="HandleClickAlphabet"
            @touchstart='TouchStart'
            @touchmove='TouchMove'
            @touchend='TouchEnd'
          >
              {{item}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'cityAlphabet',
    props:{
        cities:Object
    },
    data(){
        return{
            touch:false,
            timer:null
        }
    },
    computed:{
        letter(){
            let touches=[];
            for(let i in this.cities){
                touches.push(i);
            }
            return touches;
        }
    },
    methods:{
        HandleClickAlphabet(e){//点击切换首字母区域
            this.$emit('change',e.target.innerText)
        },
        TouchStart(){
            this.touch=true;
        },
        TouchMove(e){//滑动切换首字母区域
            if(this.touch){
                if(this.timer){
                    clearTimeout(this.timer);
                }
                this.timer=setTimeout(()=>{
                    let AtouchY=this.$refs['A'][0].offsetTop;
                    let touches=e.touches[0].clientY-76;
                    let index=Math.floor((touches-AtouchY)/24);
                    if(this.letter.length&&index>=0){
                        this.$emit('change',this.letter[index]);
                    }
                },16)
            }
        },
        TouchEnd(){
            this.touch=false;
        }
    }
}
</script>

<style scoped>
.alphabet-wrapper{
    position:absolute;
    right:0;
    bottom: 0;
    top:.76rem;
    z-index:5;
    overflow: hidden;
    font-size: .2rem;
    text-align: center;
    width:0.2rem;
    display: flex;
    flex-direction: column;
    justify-content:center;
    color:#00bcd4;
}
.alphabet-list{
    padding-bottom:.04rem
}
</style>