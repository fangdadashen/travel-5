<template>
<div class="hidden-list" ref='wrapper'>
  <div>
    <div class="list-area">
        当前城市
    </div>
    <div class="list-wrapper">
        <div class="nowcity list-button">
           {{this.$store.state.city}}
        </div>
    </div>
    <div  class="list-area">
        热门城市
    </div>
    <div class="hotcity-wrapper">
        <div 
           class="hotcity list-button" 
           v-for="item of hotCities"
           :key="item.id"
           @click="HandleClickCity(item.name)"
        >
          {{item.name}}
        </div>
    </div>
    <div v-for="(item,key) of cities" :key="item.id" :ref="key">
        <div class="list-area">
            {{key}}
        </div>
        <div 
           class="list-city" 
           v-for="initem of item" 
           :key='initem.id'
            @click="HandleClickCity(initem.name)"
        >
            {{initem.name}}
        </div>
    </div>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Citylist',
    props:{
        cities:Object,
        hotCities:Array,
        letter:String
    },
    methods:{
        HandleClickCity(city){
            this.$store.commit('CityChange',city);
            this.$router.push('/');
        }
    },
    // created(){//bus总线传递数据
    //     this.bus.$on('busclick',function(msg){
    //             console.log(msg)
    //         });
    // },
    mounted(){//引入better-scroll插件
        this.scroll=new BScroll(this.$refs.wrapper,{
            click:true
        });
    },
    watch:{
        letter(){//点击/滑动右栏字母跳到对应首字母城市区域
            let element=this.$refs[this.letter][0];
            this.scroll.scrollToElement(element);
        }
    }
}
</script>

<style scoped>
.hidden-list{
    position: absolute;
    top:.76rem;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
}
.list-area{
    box-sizing: border-box;
    padding:.05rem 0 .05rem .1rem;
    background: #eee;
    font-size:.2rem;
}
.list-wrapper{
    width:100%;
    display: table-cell;
    vertical-align: middle;
}
.list-button{
    border-radius: .01rem;
    width:1rem;
    text-align: center;
    height: .3rem;
    line-height: .3rem;
    margin:.1rem;
    font-size:.18rem;
}
.nowcity{
    border: 1px solid #00bcd4;
}
.hotcity-wrapper{
    display: flex;
    flex-wrap: wrap;
    padding-right:0.1rem;
}
.hotcity{
    width:25%;
    border: 1px solid #ccc;
}
.list-city{
    font-size: .18rem;
    height: .3rem;
    line-height: .3rem;
    padding:.05rem .05rem;
    border-bottom: 1px solid #eee;
}
</style>