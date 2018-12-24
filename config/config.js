export default {
  plugins: [
    ['umi-plugin-react', {
      // 这里暂时还没有添加配置，该插件还不会有作用
      antd: true,
      dva: true
    }],
  ],
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: '/',
        component: './HelloWorld'
      },
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/analysis', component: '../page/Dashboard/Analysis' },
          { path: '/dashboard/monitor', component: '../page/Dashboard/Monitor' },
          { path: '/dashboard/workplace', component: '../page/Dashboard/Workplace' }
        ]
      },
    ]
  }],
};