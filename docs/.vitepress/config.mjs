/*
 * @Author: jauntyjinn 2324935200@qq.com
 * @Date: 2026-05-30 17:33:33
 * @LastEditors: jauntyjinn 2324935200@qq.com
 * @LastEditTime: 2026-05-30 17:59:46
 * @FilePath: \undefinedd:\mysite\jauntysite\docs\.vitepress\config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Everything about JAUNTYJINN",
  description: "宝盖的碎碎念",
  lang: 'zh-CN',

  // 顶部导航栏
  themeConfig: {
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
            { text: '总览', link: '/courses/' },
            {
              text: '电子电路基础',
              collapsed: false,
              items: [
                { text: '简介', link: '/courses/电基/' },
              ]
            },
            {
              text: '人工智能',
              collapsed: true,
              items: [
                { text: '简介', link: '/courses/人工智能/' },
              ]
            },
            
          ]
        }
      ],
      '/study/': [
        {
          text: '项目与技术',
          items: [
            { text: '总览', link: '/study/' },
            { text: '项目一', link: '/study/project-1' },
          ]
        }
      ],
      '/art/': [
        {
          text: '书影音',
          items: [
            { text: '总览', link: '/art/' },
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