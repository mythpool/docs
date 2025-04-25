# 🎰 开奖结果计算

我们采用 **Switchboard** 的随机数生成技术来确保开奖的公正性和随机性。那么，Switchboard 是如何确保随机数的安全性呢？

Switchboard 通过以下技术组合来解决随机数安全问题：

- **可信执行环境 (TEE)**：TEE 是一个超级安全的黑匣子，代码可以在其中运行而无需任何人窥视或篡改。
  
- **按需预言机**：Switchboard 使用其预言机网络来获取和处理信息。关键在于，所有操作都发生在安全的 TEE 黑匣子中，这使得生成的随机数更加可靠和不可篡改。

你可以了解更多关于 [Switchboard 的可验证随机性方法](https://docs.switchboard.xyz/product-documentation/randomness/switchboards-approach-to-verifiable-randomness)。

若想深入了解 Switchboard 的工作原理，建议查阅 [SwitchBoard 文档](https://docs.switchboard.xyz/)。

## 🛠️ 计算过程

在开奖时，系统会通过 Switchboard 提供的随机数生成器来生成公平的随机数。具体过程如下所示：

![winner](/winner.png)

### 1. 开奖请求

当池的开奖请求发送时，系统会请求 Switchboard 创建一个 **随机账户** 用于接收随机数。

### 2. 承诺插槽

承诺插槽是一个关键参数，代表开奖请求的时间点插槽。收到请求后，Switchboard 会在该插槽内计算出一个随机数，并将其写入随机账户。

### 3. 生成随机数

随机账户存储的是一个 256 位的大数字。系统会根据池出售的票数进行取模运算，以获得最终的幸运数字。

## 📝 示例代码

以下是使用 Rust 编写的开奖代码，演示如何从随机账户中获取并计算幸运数字：

```rust
pub fn reveal_draw(randomness_data: &RandomnessAccountData, max_random: u64) -> Result<u64> {
    let clock = Clock::get()?;

    // 确保我们有可用的随机数
    if randomness_data.seed_slot == 0 {
        return Err(error!(RandomnessError::RandomnessNotAvailable));
    }

    // 获取随机数值
    let value = randomness_data.get_value(&clock)
        .map_err(|_| error!(RandomnessError::RandomnessNotAvailable))?;
    
    let value_bytes = value.as_ref();
    let value_u64 = u64::from_le_bytes(value_bytes[0..8].try_into().unwrap());

    // 使用池票数取模计算幸运数字
    Ok(value_u64 % max_random)
}
```

详细的开奖代码可以参考我们的 GitHub 开源仓库：[MythPool LAB](https://www.github.com/mythpool/contract)。

## 🔑 IDL 开源与验证

基础用户可以通过 **IDL** 或 **Web3JS** 来关注随机账户的随机数和交易细节，验证开奖结果。

- 你可以通过 [MythPool IDL](https://github.com/mythpool/IDL) 来集成和验证随机数的生成过程。

这个 IDL 提供了一个简便的接口，使开发者能够在链上获取随机数，跟踪随机账户的交易和细节，进一步确保开奖过程的透明度和公正性。


## 🔑 总结

通过以上方法，我们确保每次开奖过程中生成的随机数是公正和不可篡改的。借助 Switchboard 和可信执行环境 (TEE)，我们能够提供一个透明、安全的开奖过程，确保每个参与者都能获得公平的机会。

如果您对这个过程有任何问题或建议，欢迎查阅文档或加入我们的社区获取更多支持！