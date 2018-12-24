export default {
  singular: true,
  plugins: [
    ['umi-plugin-react', {
      // 这里暂时还没有添加配置，该插件还不会有作用
      antd: true,
      dva: true,
      locale: {
        enable: true
      }
    }],
  ],
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: '/',
        component: './index'
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
  // proxy: { // 代理服务器
  //   '/dev': {
  //     target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
  //     changeOrigin: true,
  //   }
  // }
};