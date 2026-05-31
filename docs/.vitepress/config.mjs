/*
 * @Author: jauntyjinn 2324935200@qq.com
 * @Date: 2026-05-30 17:33:33
 * @LastEditors: jauntyjinn 2324935200@qq.com
 * @LastEditTime: 2026-05-31 20:51:53
 * @FilePath: \undefinedd:\mysite\jauntysite\docs\.vitepress\config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Everything about JAUNTYJINN",
  description: "宝盖的碎碎念",
  lang: 'zh-CN',
  base: '/jauntysite/',  // 和你的仓库名一致
  title: "Everything about JAUNTYJINN",
  // 顶部导航栏
  themeConfig: {
    siteTitle: 'JAUNTYJINN',  // 导航栏左上角显示这个
    nav: [
      { text: '首页', link: '/' },
      { text: '课程笔记', link: '/courses/' },
      { text: '项目与技术', link: '/study/' },
      { text: '书影音', link: '/art/' },
    ],

    // 侧边栏
    sidebar: {
      '/courses/': [
        {
          text: '课程笔记',
          items: [
            { text: '微积分', link: '/courses/微积分/' },
            { text: '线性代数', link: '/courses/线代/' },
            { text: '英语', link: '/courses/英语/' },
            { text: '常微分方程', link: '/courses/常微分方程/' },
            { text: '大学物理', link: '/courses/大学物理/' },
            { text: '数字系统', link: '/courses/数字系统/' },
            { text: '电子电路基础', link: '/courses/电子电路基础/' },
            { text: '概率论与数理统计', link: '/courses/概统/' },
            { text: '偏微分方程', link: '/courses/偏微分方程/' },
            { text: '复变函数与积分变换', link: '/courses/复变/' },
          ]
        }
      ],
      '/study/': [
        {
          text: '项目与技术',
          items: [
            { text: '电赛', link: '/study/电赛' },
            { text: 'SRTP', link: '/study/SRTP' },
          ]
        }
      ],
      '/art/': [
        {
          text: '书影音',
          items: [
            { text: '我的天才女友', link: '/art/我的天才女友' },
          ]
        }
      ],
    },

    // 搜索（本地搜索，完全免费）
    search: {
      provider: 'local'
    },

    // 页脚
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024'
    },

    // 编辑链接（可选，指向你的 GitHub 仓库）
    // editLink: {
    //   pattern: 'https://github.com/你的用户名/仓库名/edit/main/docs/:path',
    //   text: '在 GitHub 上编辑此页'
    // },

    // 社交链接
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/你的用户名' }
    ]
  }
})