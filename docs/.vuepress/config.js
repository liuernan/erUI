module.exports = {
  title: 'erUI',
  description: '一个基于 Vue 的 UI 框架',
  base: '/erUI/',
  cache: false,
  themeConfig: {
    // logo: '/assets/img/logo.png',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Docs', link: '/' },
      // { text: 'Guide', link: '/' },
      { text: 'Github', link: 'https://github.com/liuernan/erUI' }
    ],
    sidebar: [
      {
        title: '指南',
        collapsable: false,
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
          '/components/grid',
          '/components/layout',
          '/components/tabs',
          '/components/toast',
          '/components/popover',
          '/components/collapse',
          '/components/cascader',
          '/components/carousel',
          '/components/nav'
        ]
      }
    ]
  }
}