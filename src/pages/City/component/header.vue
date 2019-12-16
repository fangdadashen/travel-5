<template>
<div class="header-wrapper">
    <router-link to="/">
        <span class="iconfont header-icon">&#xe624;</span>
    </router-link>
    城市选择
</div>  
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style scoped>
.header-wrapper{
    position: relative;
    font-size: .2rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    padding:.05rem 0;
    background:#00bcd4;
    color:#fff;
}
.header-icon{
    position: absolute;
    left:.1rem;
    color:#fff;
    font-size: .23rem; 
}
</style>