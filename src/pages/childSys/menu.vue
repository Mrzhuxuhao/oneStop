<template>
  <!--<el-container style="height:100%; border:1px solid #eee" direction="vertical">-->
    <!--<el-header height="50px" style="text-align:center; font-size:12px">logo</el-header>-->
    <!--<el-aside width="200px" style="height:300px;background-color: rgb(238, 241, 246)">-->
      <!--这是菜单-->
    <!--</el-aside>-->
    <!--<el-container style="margin-left:200px;">-->
      <!--<el-main style="">-->
        <!--<router-view></router-view>-->
      <!--</el-main>-->
    <!--</el-container>-->
  <!--</el-container>-->


  <el-container style="height: 100%; border: 1px solid #eee">
    <!--<el-header>-->
      <!--logo-->
    <!--</el-header>-->
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      这是菜单
    </el-aside>

    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>


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

</style>

