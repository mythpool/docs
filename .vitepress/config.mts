import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MythPool",
  description: "Myth Pool - A fair, transparent, decentralized blockchain pool platform, making every draw a worthwhile experience.",
  base: '/docs/',
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    fr: {
      label: 'French',
      lang: 'fr', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/fr/guide' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
    },
    zh: {
      label: '简体中文',
      lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/zh/' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
    }
  },
  themeConfig: {
    logo: "../image/256X256.png", 
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mythpool' }
    ],

    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Mythpool Lab'
    }
  },
  srcDir:'./src',
  outDir: '../docs/.vitepress/dist',
})


