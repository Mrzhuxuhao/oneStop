let menu = () => import('@/pages/childSys/menu');

export default [
  {
    path: '/childSys',
    component: () => import('@/empty.vue'),
    children: [
      {
        path: '/menu',
        name: 'menu',
        component: menu,
        meta: {
          title: '菜单',
          root: true
        }
      }
    ]
  }
]
