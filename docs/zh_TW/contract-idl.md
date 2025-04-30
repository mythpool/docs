# 📦 合約 IDL 與原始碼倉庫說明

MythPool 致力於構建一個安全、透明且開放的去中心化平台。為了便於開發者集成與驗證，我們已開放部分核心智能合約的介面定義（IDL）以及主要業務邏輯原始碼，其餘代碼將在通過專業安全審計後逐步開源。

## 🔗 合約 IDL 地址

我們已將合約的 Interface Definition Language（IDL）托管在 GitHub 上：

👉 **[https://github.com/mythpool/IDL](https://github.com/mythpool/IDL)**

### 什麼是 IDL？

IDL（Interface Definition Language）是描述智能合約介面的一種標準形式。它的作用包括：

- 明確合約支持的調用方法、參數類型及事件結構
- 讓前端或其他客戶端項目可以快速集成
- 支援 Anchor 等開發框架進行自動化交互和調用驗證

藉助 IDL 文件，開發者無需深入合約代碼，也能理解和使用合約功能。

## 🧠 核心合約原始碼地址

我們已將 **核心功能模塊** 的智能合約原始碼開源，托管於 GitHub：

👉 **[https://github.com/mythpool/contract](https://github.com/mythpool/contract)**

### 當前開源的內容包括：

- 🎯 彩票池的創建、購買、開獎等關鍵邏輯
- 📤 公共池分配與獎勳機制
- 🧪 部分單元測試與合約結構說明文檔

⚠️ **注意：** 為了確保平台安全，部分合約邏輯和鏈下服務尚未開源。這些模塊將會在通過專業的第三方安全審計後，按計劃逐步公開發布。

## 👨‍💻 開發者提示

我們歡迎所有 Web3 開發者參與 MythPool 的生態開發：

- 利用 IDL 快速集成前端或工具類項目
- Fork 合約倉庫，基於核心邏輯進行擴展
- 參與提交 Issue、建議或 PR，共建安全穩定的生態系統

## 📬 聯繫與社群

有任何問題或建議，歡迎加入我們的社群或在 GitHub 提 Issue：

- 🐛 GitHub Issues：[https://github.com/mythpool/contract/issues](https://github.com/mythpool/contract/issues)
