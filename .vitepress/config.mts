import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MythPool",
  description: "Myth Pool - A fair, transparent, decentralized blockchain pool platform, making every draw a worthwhile experience.",
  base: '/',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/'
    },
    zh: {
      label: '简体中文',
      lang: 'zh', 
      link: '/zh/' 
    }
  },
  themeConfig: {
    logo: "../docs/image/256X256.png", 
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
})


