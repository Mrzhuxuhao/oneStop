<template>
  <div class="outer">
    <header>logo</header>
    <div class="menu">
      这是菜单
    </div>
    <div class="cont">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>
<style lang="scss" scoped>
  .outer{
    header{
      height:30px;
      text-align:center;
      line-height:30px;
    }
    .menu{
      width:200px;
      height:500px;
      float:left;
    }
    .cont{
      margin-left:200px;
    }
  }
</style>

