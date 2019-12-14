<template>
  <div class="contain">
      <router-link to="/">
        <span class="iconfont button-icon">&#xe624;</span>
      </router-link>
  </div>
</template>

<script>
export default {
    name:'DetailTopbutton'
}
</script>

<style scoped>
.contain{
    height:.4rem;
    width: .4rem;
    background: rgba(39, 38, 38, 0.781);
    text-align: center;
    line-height: .4rem;
    border-radius: 50%;
}
.button-icon{
    color:#fff;
    font-size:.2rem;
}
</style>