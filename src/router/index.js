import Vue from 'vue'
import Router from 'vue-router'
import Slider from '@/components/Slider'
//路由未配置时跳转到404
import NotFoundComponent from '@/pages/notFound/index'
//子系统左侧菜单
// let menu = () => import('@/pages/childSys/menu')
//供应商地图
let Area = () => import('@/pages/childSys/supplier/area')

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
      name: 'Slider',
      component: Slider
    },
    {
      path: '/childSys',
      name: 'Slider',
      component: Slider,
      children:[
        {
          path: '/childSys/supplier',  //供应商
          component:() => import('@/empty.vue'),
          name: '供应商',
          children:[
            {
              path:'/childSys/supplier/area',
              name:'area',
              component: () => import('@/empty.vue'),
              children:[{
                path:'/childSys/supplier/area/maps',
                name:'地区',
                component:Area,
                meta: {
                  title: '地区',
                  root: true
                }
              }]

            }
          ]
        },
      ]
    }
  ]
})
