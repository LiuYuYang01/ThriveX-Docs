import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ThriveX 项目文档",
  description: "ThriveX 现代化博客管理系统官方文档",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/styles/custom.css' }],
    // 引入百度统计配置
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?f3718a3e71b9e43dd7628b6d2e5f2b75";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `]
  ],
  themeConfig: {
    logo: '/logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '项目介绍', link: '/docs/项目介绍/README' },
      { text: '项目部署', link: '/docs/项目部署/README' },
      { text: '项目使用', link: '/docs/项目使用/README' }
    ],

    sidebar: [
      {
        text: '项目介绍',
        items: [
          { text: '1. 介绍', link: '/docs/项目介绍/README' },
          { text: '2. 项目演示', link: '/docs/项目介绍/项目演示' },
          { text: '3. 项目结构', link: '/docs/项目介绍/项目结构' },
          { text: '4. 项目运行', link: '/docs/项目介绍/项目运行' },
          { text: '5. 常见疑惑', link: '/docs/项目介绍/常见疑惑' },
          { text: '6. 关于项目', link: '/docs/项目介绍/关于项目' },
          { text: '7. 开源协议', link: '/docs/项目介绍/开源协议' },
          { text: '8. 开源地址', link: '/docs/项目介绍/开源地址' },
          { text: '9. 技术交流群', link: '/docs/项目介绍/技术交流群' },
        ]
      },
      {
        text: '项目部署（待完善）',
        collapsed: true,
        items: [
          { text: '1. 部署', link: '/docs/项目部署/README' },
          { text: '2. 前端', link: '/docs/项目部署/前端' },
          { text: '3. 控制端', link: '/docs/项目部署/控制端' },
          { text: '4. 后端', link: '/docs/项目部署/后端' },
          { text: '5. 数据库（待完善）', link: '/docs/项目部署/数据库' }
        ]
      },
      {
        text: '项目使用',
        collapsed: true,
        items: [
          { text: '前言', link: '/docs/项目使用/README' },
          { text: '前端', link: '/docs/项目使用/前端' },
        ]
      },
      {
        text: '第三方服务',
        collapsed: true,
        items: [
          { text: '高德地图', link: '/docs/项目部署/API/高德地图' },
          { text: '百度统计', link: '/docs/项目部署/API/百度统计' },
          { text: '星火大模型', link: '/docs/项目部署/API/星火大模型' },
          { text: '对象存储', link: '/docs/项目部署/API/对象存储' },
          { text: '邮件提醒', link: '/docs/项目部署/API/邮件提醒' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 开启深层目录
    outline: "deep",

    // 汉化内容
    outlineTitle: "目录",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    darkModeSwitchTitle: "切换暗色主题",
    lightModeSwitchTitle: "切换亮色主题",
    darkModeSwitchLabel: "切换主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
    langMenuLabel: "切换语言",
    lastUpdatedText: "更新时间",
    externalLinkIcon: true,
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
          },
          modal: {
            displayDetails: "显示详情",
            noResultsText: "未找到相关结果",
            resetButtonTitle: "清除",
            footer: {
              closeText: "关闭",
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    }
  },
  // 最后一次更新时间
  lastUpdated: true,
})
