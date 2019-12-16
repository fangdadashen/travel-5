<template>
<div>
  <div class="search-con">
        <input 
          v-model="inputdata" 
          class="search-input" 
          type="text" 
          placeholder="输入城市名或拼音"
        >
  </div>
  <div class="search-list" v-show="inputdata">
        <div 
            class='city-data' 
            v-for="item of list"
            :key="item.id"
            @click='HandleClickCity(item.name)'
        >
            {{item.name}}
        </div>
        <div class='city-data' v-show="!list.length">
            没有搜到相关内容
        </div>
  </div>
</div>
</template>

<script>
export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data(){
        return{
            inputdata:'',//input双向绑定
            list:[],//存放搜索结果
            timer:null,
            listshow:false
        }
    },
    methods:{
        HandleClickCity(city){
            this.$store.commit('CityChange',city);
            this.$router.push('/');
        }
    },
    watch:{
        inputdata(){
            if(this.timer){
                clearTimeout(this.timer);
            }
            this.timer=setTimeout(()=>{
            const item=[];
            for(let i in this.cities){
                this.cities[i].forEach((value) => {
                    if(value.name.indexOf(this.inputdata)>-1||
                       value.spell.indexOf(this.inputdata)>-1
                    ){
                        item.push(value);
                    }
                });
            }
             return this.list=item;
            },100)
        }
    }
}
</script>

<style scoped>
.search-con{
    background: #00bcd4;
    padding:.03rem .05rem;
}
.search-input{
    width:100%;
    border:transparent;
    border-radius: .05rem;
    height: .3rem;
    text-align: center;
    font-size: .18rem;
}
.search-list{
    position: absolute;
    top:.76rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index:99;
}
.city-data{
    font-size: .2rem;
    height: .3rem;
    line-height: .3rem;
    padding:.05rem .1rem;
    border-bottom: 1px solid #eee;
}
</style>