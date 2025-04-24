# 📦 合约 IDL 与源码仓库说明

MythPool 致力于构建一个安全、透明且开放的去中心化平台。为了便于开发者集成与验证，我们已开放部分核心智能合约的接口定义（IDL）以及主要业务逻辑源码，其余代码将在通过专业安全审计后逐步开源。


## 🔗 合约 IDL 地址

我们已将合约的 Interface Definition Language（IDL）托管在 GitHub 上：

👉 **[https://github.com/mythpool/IDL](https://github.com/mythpool/IDL)**

### 什么是 IDL？

IDL（Interface Definition Language）是描述智能合约接口的一种标准形式。它的作用包括：

- 明确合约支持的调用方法、参数类型及事件结构
- 让前端或其他客户端项目可以快速集成
- 支持 Anchor 等开发框架进行自动化交互和调用验证

借助 IDL 文件，开发者无需深入合约代码，也能理解和使用合约功能。


## 🧠 核心合约源码地址

我们已将 **核心功能模块** 的智能合约源码开源，托管于 GitHub：

👉 **[https://github.com/mythpool/contract](https://github.com/mythpool/contract)**

### 当前开源的内容包括：

- 🎯 彩票池的创建、购买、开奖等关键逻辑
- 📤 公共池分配与奖励机制
- 🧪 部分单元测试与合约结构说明文档

⚠️ **注意：** 为了确保平台安全，部分合约逻辑和链下服务尚未开源。这些模块将会在通过专业的第三方安全审计后，按计划逐步公开发布。


## 👨‍💻 开发者提示

我们欢迎所有 Web3 开发者参与 MythPool 的生态开发：

- 利用 IDL 快速集成前端或工具类项目
- Fork 合约仓库，基于核心逻辑进行扩展
- 参与提交 Issue、建议或 PR，共建安全稳定的生态系统


## 📬 联系与社区

有任何问题或建议，欢迎加入我们的社区或在 GitHub 提 Issue：

- 🐛 GitHub Issues：[https://github.com/mythpool/contract/issues](https://github.com/mythpool/contract/issues)
