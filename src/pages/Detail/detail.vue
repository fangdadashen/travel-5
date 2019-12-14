<template>
  <div class="contain">
       <router-link class="detail-link" to="/">to Home(Detail)</router-link>
  </div>
</template>

<script>
export default {
    name:'Detail'
}
</script>

<style decoped>
.contain{
    font-size: .25rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    padding:.05rem 0;
    background:darkcyan;
}
.detail-link{
    color:#fff;
}
</style>