import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//路由未配置时跳转到404
import NotFoundComponent from '@/pages/notFound/index'
//子系统左侧菜单
let menu = () => import('@/pages/childSys/menu')
//供应商地图
let Maps = () => import('@/pages/childSys/maps')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFoundComponent,
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/childSys',
      name: '暂定供应商',
      component: menu,
      children:[
        {
          path: '/childSys/maps',
          name: 'maps',
          component: Maps,
          meta: {
            title: '供应商分布',
            root: true
          }
        },
      ]
    }
  ]
})
