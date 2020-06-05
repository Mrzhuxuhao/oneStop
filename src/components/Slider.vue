<template>
  <div class="indexPage">
    <div class="containerWrapper">
      <div class="sidebarWrapper">
        <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect" @open="handleOpen" @close="handleClose" :collapse="collapseStatus">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">供应商</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/childSys/supplier/area/maps">地区</el-menu-item>
              <el-menu-item index="/childSys/supplier/area">行业分类</el-menu-item>
              <el-menu-item index="3">核心供应商</el-menu-item>
            </el-menu-item-group>
            <!--<el-submenu index="1-4">-->
              <!--<span slot="title">选项4</span>-->
              <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
            <!--</el-submenu>-->
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="contentWrapper">
        <div class="mainHeader">
          <!--侧边导航栏控制按钮-->
          <span><i class="el-icon-s-fold" @click="handleFold()"></i></span>
          <div class="userCenter">
            <el-link :underline="false" class="username">Admin</el-link>
            <el-avatar :size="40" :src="avaUrl"></el-avatar>
          </div>
        </div>
        <div class="mainContent">
          <el-container>
            <el-main>
              <router-view></router-view>
            </el-main>
          </el-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeIndex:'/childSys/supplier/area/maps',
      isCollapse: false,
      collapseStatus: false,
      avaUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  watch:{
    activeIndex (newVal){
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      this.$router.push({
        path: key,
        params: {}
      })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleFold () {
      this.collapseStatus = !this.collapseStatus
    },
    goTo (path) {
      console.log(path)
      this.$router.replace(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .containerWrapper{
    display: flex;
    flex-direction: row;
  }
  .sidebarWrapper{/*设置侧边栏导航高度*/
    min-height: 100vh;
     background:#545c64;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {/*设置侧边栏不折叠的宽度*/
    width: 250px;
    height: 100%;
    background:#545c64;
    color:#F0F2F5;
  }
  .el-menu--collapse{/*设置侧边栏折叠后的高度*/
    height: 100%;
  }
  .indexPage .el-aside{
    width: 300px;/*设置侧边导航栏宽度*/
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .contentWrapper{/*设置内容区包裹样式*/
    flex: 1;
    min-height: 100vh;
  }
  .mainHeader{/*头部样式设置*/
    height: 56px;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #F0F2F5;

  }
  .mainContent{/*内容区样式设置*/
    /*padding: 0 10px;*/
    /*height: 100%;*/
  }
  .userCenter{/*头部右侧个人中心*/
    display: flex;
    align-items: center;
  }
  .userCenter .username{
    margin-right: 15px;
  }
</style>
