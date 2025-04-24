export const localesConfig = {
    root: {
        label: 'English',
        lang: 'en',
        link: '/',
        themeConfig: {
            nav: [
                { text: 'Home', link: '/' },
                { text: 'Docs', link: '/introduction' }
            ],

            sidebar: [
                {
                  text: '🎉 About MythPool',
                  items: [
                    { text: 'Project Overview', link: '/introduction' },
                    { text: 'System Architecture', link: '/system-architecture' },
                  ]
                },
                {
                  text: '🚀 Getting Started',
                  items: [
                    { text: 'Buy with Wallet', link: '/how-to-buy' },
                    { text: 'Create a Lottery Pool', link: '/how-to-create-pool' },
                    { text: 'Claim Purchase Rewards', link: '/claim-purchase-reward' },
                    { text: 'Claim Creation Rewards', link: '/claim-creator-reward' },
                    { text: 'Common Questions (FAQ)', link: '/faq' },
                  ]
                },
                {
                  text: '⚖️ Rules & Policies',
                  items: [
                    { text: 'Regular Pool Rules', link: '/rules-regular-draw' },
                    { text: 'Regular Fund Allocation', link: '/rules-regular-fund' },
                    { text: 'Public Pool Rules', link: '/rules-public-draw' },
                    { text: 'Public Fund Allocation', link: '/rules-public-fund' },
                    { text: 'Buyer Airdrop Rules', link: '/rules-buyer-airdrop' },
                    { text: 'Creator Airdrop Rules', link: '/rules-creator-airdrop' },
                    { text: 'Cancellation Rules', link: '/rules-cancellation' },
                    { text: 'Prohibited Behavior', link: '/rules-ban' },
                  ]
                },
                {
                  text: '🏦 Token Economics',
                  items: [
                    { text: 'Token Issuance', link: '/token-issuance' },
                    { text: 'Unlocking Schedule', link: '/token-unlock' }
                  ]
                },
                {
                  text: '👨‍💻 Developers',
                  items: [
                    { text: 'Contract Addresses', link: '/contract-address' },
                    { text: 'Contract IDL', link: '/contract-idl' }
                  ]
                }
              ]
        }
    },
    zh: {
        label: '简体中文',
        lang: 'zh',
        link: '/zh/',
        themeConfig: {
            nav: [
                { text: '主页', link: '/' },
                { text: '文档', link: '/zh/introduction' }
            ],

            sidebar: [
              {
                text: '🎉 什么是 MythPool?',
                items: [
                  { text: '项目介绍', link: '/zh/introduction' },
                  { text: '系统架构', link: '/zh/system-architecture' },
                ]
              },
              {
                text: '🚀 快速开始',
                items: [
                  { text: '连接钱包购买彩票', link: '/zh/how-to-buy' },
                  { text: '创建彩票池', link: '/zh/how-to-create-pool' },
                  { text: '领取购买奖励', link: '/zh/claim-purchase-reward' },
                  { text: '领取创建奖励', link: '/zh/claim-creator-reward' },
                  { text: '常见问题QA', link: '/zh/faq' },
                ]
              },
              {
                text: '️⚖️ 规则说明',
                items: [
                  { text: '普通池开奖规则', link: '/zh/rules-regular-draw' },
                  { text: '普通池资金分配', link: '/zh/rules-regular-fund' },
                  { text: '公共池开奖规则介绍', link: '/zh/rules-public-draw' },
                  { text: '公共池资金分配', link: '/zh/rules-public-fund' },
                  { text: '购买空头规则', link: '/zh/rules-buyer-airdrop' },
                  { text: '创建池空投规则', link: '/zh/rules-creator-airdrop' },
                  { text: '池取消规则', link: '/zh/rules-cancellation' },
                  { text: '禁止参与规则', link: '/zh/rules-ban' },
                ]
              },
              {
                text: '🏦 代币经济学',
                items: [
                  { text: '发行说明', link: '/zh/token-issuance' },
                  { text: '释放规则', link: '/zh/token-unlock' }
                ]
              },
              {
                text: '👨‍💻 开发者',
                items: [
                  { text: '合约地址', link: '/zh/contract-address' },
                  { text: '合约IDL', link: '/zh/contract-idl' }
                ]
              }
            ]
        }
    }
}