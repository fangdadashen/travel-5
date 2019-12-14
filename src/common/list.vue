<template>
  <div>
      <div 
        v-for="(item,index) of list" 
        :key="index"
      >
          <div class="list-item" @click="show(index)">
              {{item.name}}
          </div>
          <common-list 
              v-if="listshow[index]"
              :list=item.children 
              class="item-children"
          >
          </common-list>          
      </div>
  </div>
</template>

<script>
export default {
    name:'CommonList',
    props:{
        list:Array
    },
    data(){
        return{
            listshow:[],//上面的v-if="listshow[index]"应该是形成的一个嵌套数组
        }
    },
    methods:{
        show(index){//index取自v-for循环中从0开始
            if(this.listshow[index]===true){
                this.$set(this.listshow,index,false)
            }else{
                this.$set(this.listshow,index,true)
            //    console.log(this.listshow)
            }
        }
    }
}
</script>

<style scoped>
.list-item{
    font-size: .2rem;
    height: .3rem;
    line-height: .3rem;
    padding:.05rem .1rem;
    border-bottom: 1px solid #eee;
}
.item-children{
    padding:0 .2rem;
}
</style>