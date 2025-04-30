# 🔗 合約地址

以下為 MythPool 相關核心合約地址及其用途簡介：

| 合約名稱            | 合約地址 |
|---------------------|----------|
| **MythPoolContract**  | [7XxQWaWY5faDzmMKSPkMZnkf3JViHZVEutbZquPAzrQ2](https://solscan.io/account/7XxQWaWY5faDzmMKSPkMZnkf3JViHZVEutbZquPAzrQ2) |
| **Myth (平台代幣)**   | [DFDDDptKtQyyRbxqZJFBDvCdUsQ2FwrPDrhcvGY7perV](https://solscan.io/account/DFDDDptKtQyyRbxqZJFBDvCdUsQ2FwrPDrhcvGY7perV) |
| **Raydium 交易池**    | [8XMWkg9rwz6QnjJqUqvGjEdSEzVL7vpauLf1M795u6wF](https://raydium.io/swap/?inputMint=DFDDDptKtQyyRbxqZJFBDvCdUsQ2FwrPDrhcvGY7perV&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) |
| **系統管理帳戶**      | [2GmC8zFbsYGrxqHviziQ6npU3ver6jPmBxk1AxjHfXVD](https://solscan.io/account/2GmC8zFbsYGrxqHviziQ6npU3ver6jPmBxk1AxjHfXVD) |

## 🧩 MythPoolContract

`MythPoolContract` 是 MythPool 平台的核心智能合約，負責處理以下關鍵邏輯：

- 用戶購買彩票
- 創建和管理彩票池（普通池與公共池）
- 開獎邏輯執行
- 獎勳分配邏輯觸發

該合約可通過 IDL 文件（Interface Definition Language）接入外部應用，實現數據監聽或一鍵交互。開發者可以使用它進行自動化操作或數據讀取。

## 🪙 Myth 平台幣

`Myth` 是 MythPool 平台原生代幣，發行基於 SPL 標準，具備如下用途：

- 用於用戶激勳（包括參與獎勳、社區貢獻獎勳）
- 平台治理（DAO 治理投票權）
- 平台利潤回流（部分收益用於回購並添加流動性）

該代幣在 Raydium 創建交易對，用於交易和空投兌換。

## 🌊 Raydium 交易池

`Raydium Pool` 是 Myth 代幣在 [Raydium](https://raydium.io/) 上創建的自動做市（CPMM）交易池。其主要功能包括：

- 用戶交易 Myth Token
- 領取平台獎勳或空投兌換
- 提供穩定的 Myth 流動性支撐

該池可通過 Raydium 前端或任何兼容 Serum 的 DEX 訪問與互動。

## 🛠️ 系統管理地址

`Manager` 是平台用於管理與自動操作的合約帳戶，具備如下職責：

- 定時請求 Chainlink VRF 隨機數（用於開獎）
- 發起獎池開獎與獎勳發放
- 更新系統參數（如規則變更、費用比例等）

關注此地址，用戶與開發者可獲知平台關鍵更新與系統操作事件。
