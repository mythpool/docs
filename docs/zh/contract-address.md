# 🔗 合约地址

以下为 MythPool 相关核心合约地址及其用途简介：

| 合约名称           | 合约地址 |
|--------------------|----------|
| **MythPoolContract**  | [7XxQWaWY5faDzmMKSPkMZnkf3JViHZVEutbZquPAzrQ2](https://solscan.io/account/7XxQWaWY5faDzmMKSPkMZnkf3JViHZVEutbZquPAzrQ2) |
| **Myth (平台代币)**    | [DFDDDptKtQyyRbxqZJFBDvCdUsQ2FwrPDrhcvGY7perV](https://solscan.io/account/DFDDDptKtQyyRbxqZJFBDvCdUsQ2FwrPDrhcvGY7perV) |
| **Raydium 交易池**   | [8XMWkg9rwz6QnjJqUqvGjEdSEzVL7vpauLf1M795u6wF](https://raydium.io/swap/?inputMint=DFDDDptKtQyyRbxqZJFBDvCdUsQ2FwrPDrhcvGY7perV&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) |
| **系统管理账户**     | [2GmC8zFbsYGrxqHviziQ6npU3ver6jPmBxk1AxjHfXVD](https://solscan.io/account/2GmC8zFbsYGrxqHviziQ6npU3ver6jPmBxk1AxjHfXVD) |

## 🧩 MythPoolContract

`MythPoolContract` 是 MythPool 平台的核心智能合约，负责处理以下关键逻辑：

- 用户购买彩票
- 创建和管理彩票池（普通池与公共池）
- 开奖逻辑执行
- 奖励分配逻辑触发

该合约可通过 IDL 文件（Interface Definition Language）接入外部应用，实现数据监听或一键交互。开发者可以使用它进行自动化操作或数据读取。


## 🪙 Myth 平台币

`Myth` 是 MythPool 平台原生代币，发行基于 SPL 标准，具备如下用途：

- 用于用户激励（包括参与奖励、社区贡献奖励）
- 平台治理（DAO 治理投票权）
- 平台利润回流（部分收益用于回购添加流动性）

该代币在 Raydium 创建交易对用于交易和空投兑换。


## 🌊 Raydium 交易池

`Raydium Pool` 是 Myth 代币在 [Raydium](https://raydium.io/) 上创建的自动做市（CPMM）交易池。其主要功能包括：

- 用户交易 Myth Token
- 领取平台奖励或空投兑换
- 提供稳定的 Myth 流动性支撑

该池子可通过 Raydium 前端或任何兼容 Serum 的 DEX 访问与交互。


## 🛠️ 系统管理地址

`Manager` 是平台用于管理与自动操作的合约账户，具备如下职责：

- 定时请求 Chainlink VRF 随机数（用于开奖）
- 发起奖池开奖与奖励发放
- 更新系统参数（如规则变更、费用比例等）

关注此地址，用户与开发者可获知平台关键更新与系统操作事件。