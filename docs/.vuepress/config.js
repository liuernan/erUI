module.exports = {
  title: 'erUI',
  description: '一个基于 Vue 的 UI 框架',
  base: '/erUI/',
  themeConfig: {
    // logo: '/assets/img/logo.png',
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/' },
      { text: 'Github', link: 'https://github.com/liuernan/erUI' }
    ],
    sidebar: [
      {
        title: '指南',   // 必要的
        // path: '/introduce/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        // sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/introduce/introduce',
          '/introduce/startup'
        ]
      },
      {
        title: '组件列表',
        collapsable: false,
        children: [
          '/components/icon',
          '/components/button',
          '/components/input',
          '/components/tabs',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/collapse',
        ]
      }
    ]
  }
}