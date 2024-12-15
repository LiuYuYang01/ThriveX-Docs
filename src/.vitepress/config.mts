import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ThriveX 项目文档",
  description: "ThriveX 项目文档",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/styles/custom.css' }]
  ],
  themeConfig: {
    logo: '/logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '项目部署', link: '/docs/markdown-examples' }
    ],

    sidebar: [
      {
        text: '前端',
        items: [
          { text: '1. 宝塔', link: '/docs/部署/前端/baota' },
          { text: '2. Vercel', link: '/docs/部署/前端/vercel' }
        ]
      },
      {
        text: '控制端',
        items: [
          { text: '1. 宝塔', link: '/docs/部署/控制端/baota' },
          { text: '2. Vercel', link: '/docs/部署/控制端/vercel' }
        ]
      },
      {
        text: '后端',
        items: [
          { text: '1. 宝塔', link: '/docs/部署/后端/baota' },
          { text: '2. Docker', link: '/docs/部署/后端/docker' }
        ]
      },
      {
        text: '数据库',
        items: [
          { text: '1. 安装', link: '/docs/部署/后端/baota' },
          { text: '2. 备份', link: '/docs/部署/后端/docker' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: '高德地图', link: '/docs/部署/API/高德地图' },
          { text: '百度统计', link: '/docs/部署/API/百度统计' },
          { text: '星火大模型', link: '/docs/部署/后端/docker' },
          { text: '对象存储', link: '/docs/部署/后端/docker' },
          { text: '邮件提醒', link: '/docs/部署/后端/docker' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
