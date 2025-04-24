import { defineConfig } from 'vitepress'
import { localesConfig } from './configLocales'

export default defineConfig({
  title: "MythPool - docs",
  description: "Myth Pool - A fair, transparent, decentralized blockchain pool platform, making every draw a worthwhile experience.",
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: './logo.png' }]
  ],
  locales: localesConfig,
  themeConfig: {
    logo: "./logo.png", 

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mythpool' },
      { icon: 'twitter', link: 'https://x.com/mythpool' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Mythpool Lab'
    }
  },
  srcDir:'./docs',
})


