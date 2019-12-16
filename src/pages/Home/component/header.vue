<template>
  <div class="home-header-contain">
       Home
       <router-link class="detail-link" to="/detail">
        to detail
      </router-link>
      <router-link class="city-link" to="/city">
        {{this.$store.state.city}}
        <span class="iconfont">&#xe601;</span>
      </router-link>
      
  </div>
</template>

<script>
export default {
    name:'HomeHeader'
}
</script>

<style>
.home-header-contain{
    position: relative;
    font-size: .25rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    padding:.05rem 0;
    background:#00bcd4;
    color:#fff;
}
.city-link{
    position: absolute;
    right:.05rem;
    color:#fff;
    padding-right:.1rem;
     font-size: .2rem;
}
.detail-link{
    position: absolute;
    left:.05rem;
    color:#fff;
    padding-left:.1rem;
    font-size: .2rem;
}
</style>