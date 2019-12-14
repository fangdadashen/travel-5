<template>
<div>
  <div class="contain">
      <router-link class="home-link" to="/detail">to detail(Home)</router-link>
  </div>
</div> 
</template>

<script>

export default {
    name:'Home',
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