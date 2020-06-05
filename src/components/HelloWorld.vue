<template>
  <div class="indexPage">
    <div class="containerWrapper">
      <div class="sidebarWrapper">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="collapseStatus">
          <el-menu-item index="0">
            <i class="el-icon-menu"></i>
            <span slot="title">工作平台</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" @click="goTo('/childSys/maps')">
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
            <el-link :underline="false" href="https://www.baidu.com" class="username">Admin</el-link>
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
      isCollapse: false,
      collapseStatus: false,
      avaUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  methods: {
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
  }
  .mainContent{/*内容区样式设置*/
    padding: 0 10px;
    background: #F0F2F5;
    height: 100%;
  }
  .userCenter{/*头部右侧个人中心*/
    display: flex;
    align-items: center;
  }
  .userCenter .username{
    margin-right: 15px;
  }
</style>