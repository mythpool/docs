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
            { text: 'What is a Regular Pool?', link: '/regular-pool' },
            { text: 'What is a Public Pool?', link: '/public-pool' },
          ]
        },
        {
          text: '🚀 Getting Started',
          items: [
            { text: 'Log in with Wallet', link: '/how-login' },
            { text: 'Buy lottery tickets', link: '/how-to-buy' },
            { text: 'Create a Lottery Pool', link: '/how-to-create-pool' },
            { text: 'Claim Purchase Rewards', link: '/claim-purchase-reward' },
            { text: 'Claim Creation Rewards', link: '/claim-creator-reward' },
            { text: 'Claim Public Tickets', link: '/how-get-public-ticket' },
          ]
        },
        {
          text: '⚖️ Rules & Policies',
          items: [
            { text: 'How Results Are Calculated', link: '/how-result-calculated' },
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
  zh_TW: {
    label: '繁體中文',
    lang: 'zh_TW',
    link: '/zh_TW/',
    themeConfig: {
      nav: [
        { text: '首頁', link: '/' },
        { text: '文檔', link: '/zh_TW/introduction' }
      ],

      sidebar: [
        {
          text: '🎉 什麼是 MythPool?',
          items: [
            { text: '專案介紹', link: '/zh_TW/introduction' },
            { text: '系統架構', link: '/zh_TW/system-architecture' },
            { text: '什麼是普通池?', link: '/zh_TW/regular-pool' },
            { text: '什麼是公共池?', link: '/zh_TW/public-pool' }
          ]
        },
        {
          text: '🚀 快速開始',
          items: [
            { text: '連接錢包驗證登入', link: '/zh_TW/how-login' },
            { text: '購買彩票', link: '/zh_TW/how-to-buy' },
            { text: '創建彩票池', link: '/zh_TW/how-to-create-pool' },
            { text: '領取購買獎勳', link: '/zh_TW/claim-purchase-reward' },
            { text: '領取創建獎勳', link: '/zh_TW/claim-creator-reward' },
            { text: '如何獲得公共彩票', link: '/zh_TW/how-get-public-ticket' }
          ]
        },
        {
          text: '️⚖️ 規則說明',
          items: [
            { text: '開獎結果計算', link: '/zh_TW/how-result-calculated' },
            { text: '普通池開獎規則', link: '/zh_TW/rules-regular-draw' },
            { text: '普通池資金分配', link: '/zh_TW/rules-regular-fund' },
            { text: '公共池開獎規則介紹', link: '/zh_TW/rules-public-draw' },
            { text: '公共池資金分配', link: '/zh_TW/rules-public-fund' },
            { text: '購買空投規則', link: '/zh_TW/rules-buyer-airdrop' },
            { text: '創建池空投規則', link: '/zh_TW/rules-creator-airdrop' },
            { text: '池取消規則', link: '/zh_TW/rules-cancellation' },
            { text: '禁止參與規則', link: '/zh_TW/rules-ban' }
          ]
        },
        {
          text: '🏦 代幣經濟學',
          items: [
            { text: '發行說明', link: '/zh_TW/token-issuance' },
            { text: '釋放規則', link: '/zh_TW/token-unlock' }
          ]
        },
        {
          text: '👨‍💻 開發者',
          items: [
            { text: '合約地址', link: '/zh_TW/contract-address' },
            { text: '合約IDL', link: '/zh_TW/contract-idl' }
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
            { text: '什么是普通池?', link: '/zh/regular-pool' },
            { text: '什么是公共池?', link: '/zh/public-pool' },
          ]
        },
        {
          text: '🚀 快速开始',
          items: [
            { text: '连接钱包验证登录', link: '/zh/how-login' },
            { text: '购买彩票', link: '/zh/how-to-buy' },
            { text: '创建彩票池', link: '/zh/how-to-create-pool' },
            { text: '领取购买奖励', link: '/zh/claim-purchase-reward' },
            { text: '领取创建奖励', link: '/zh/claim-creator-reward' },
            { text: '如何获取公共彩票', link: '/zh/how-get-public-ticket' },
          ]
        },
        {
          text: '️⚖️ 规则说明',
          items: [
            { text: '开奖结果计算', link: '/zh/how-result-calculated' },
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