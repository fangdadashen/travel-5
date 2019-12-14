<template>
<div>
  <div class="contain">
      <router-link class="home-link" to="/detail">to detail(Home)</router-link>
  </div>
  <div>
      <home-list :list='list'></home-list>
  </div>
</div> 
</template>

<script>
import HomeList from './component/list'
export default {
    name:'Home',
    components:{
        HomeList
    },
    data(){
        return{
            list:[{
                name:'成人票',
                children:[{
                    name:'成人三馆联票',
                    children:[{
                        name:'成人三馆联票 - 某1连锁店销售'
                    },{
                        name:'成人三馆联票 - 某2连锁店销售'
                    },{
                        name:'成人三馆联票 - 某3连锁店销售'
                    }]
                }]
            },{
                name:'学生票',
                children:[{
                    name:'学生三馆联票',
                    children:[{
                        name:'学生三馆联票 - 某1连锁店销售',
                        children:[{
                        name:'学生三馆联票 - 某1连锁店销售'
                    },{
                        name:'学生三馆联票 - 某2连锁店销售'
                    },{
                        name:'学生三馆联票 - 某3连锁店销售'
                    }]
                    },{
                        name:'学生三馆联票 - 某2连锁店销售'
                    },{
                        name:'学生三馆联票 - 某3连锁店销售'
                    }]
                }]
            },{
                name:'儿童票',
                children:[{
                    name:'儿童三馆联票'
                }]
            },{
                name:'特惠票',
                children:[{
                    name:'特惠三馆联票'
                }]
            }]
        }
    }
}
</script>

<style scoped>
.contain{
    font-size: .25rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    padding:.05rem 0;
    background:darkcyan;
}
.home-link{
    color:#fff;
}
</style>