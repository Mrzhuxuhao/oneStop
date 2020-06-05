// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//highchart相关
import Highchart from "highcharts/highcharts";
import highcharts3d from 'highcharts/highcharts-3d';
import mapInit from "highcharts/modules/map";
import HighchartsVue from "highcharts-vue";
import stockInit from "highcharts/modules/stock";
stockInit(Highchart);
highcharts3d(Highchart);
mapInit(Highchart);
Vue.use(HighchartsVue);

import '@/assets/styles/reset.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 路由前置导航守卫,变换路由时更换title
router.beforeEach((to,from,next)=>{
  // 根据路由元信息设置文档标题
  window.document.title = to.meta.title || ''
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
