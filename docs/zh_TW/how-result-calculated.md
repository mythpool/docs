# 🎰 開獎結果計算

我們採用 **Switchboard** 的隨機數生成技術來確保開獎的公正性和隨機性。那么，Switchboard 是如何確保隨機數的安全性呢？

Switchboard 透過以下技術組合來解決隨機數安全問題：

- **可信執行環境 (TEE)**：TEE 是一個超級安全的黑匣子，程式碼可以在其中運行而無需任何人窺視或篡改。
  
- **按需預言機**：Switchboard 使用其預言機網絡來獲取和處理信息。關鍵在於，所有操作都發生在安全的 TEE 黑匣子中，這使得生成的隨機數更加可靠和不可篡改。

你可以了解更多關於 [Switchboard 的可驗證隨機性方法](https://docs.switchboard.xyz/product-documentation/randomness/switchboards-approach-to-verifiable-randomness)。

若想深入了解 Switchboard 的工作原理，建議查閱 [SwitchBoard 文檔](https://docs.switchboard.xyz/)。

## 🛠️ 計算過程

在開獎時，系統會通過 Switchboard 提供的隨機數生成器來生成公平的隨機數。具體過程如下所示：

![winner](/winner.png)

### 1. 開獎請求

當池的開獎請求發送時，系統會請求 Switchboard 創建一個 **隨機帳戶** 用於接收隨機數。

### 2. 承諾插槽

承諾插槽是一個關鍵參數，代表開獎請求的時間點插槽。收到請求後，Switchboard 會在該插槽內計算出一個隨機數，並將其寫入隨機帳戶。

### 3. 生成隨機數

隨機帳戶存儲的是一個 256 位的大數字。系統會根據池出售的票數進行取模運算，以獲得最終的幸運數字。

## 📝 範例代碼

以下是使用 Rust 編寫的開獎代碼，演示如何從隨機帳戶中獲取並計算幸運數字：

```rust
pub fn reveal_draw(randomness_data: &RandomnessAccountData, max_random: u64) -> Result<u64> {
    let clock = Clock::get()?;

    // 確保我們有可用的隨機數
    if randomness_data.seed_slot == 0 {
        return Err(error!(RandomnessError::RandomnessNotAvailable));
    }

    // 獲取隨機數值
    let value = randomness_data.get_value(&clock)
        .map_err(|_| error!(RandomnessError::RandomnessNotAvailable))?;
    
    let value_bytes = value.as_ref();
    let value_u64 = u64::from_le_bytes(value_bytes[0..8].try_into().unwrap());

    // 使用池票數取模計算幸運數字
    Ok(value_u64 % max_random)
}
```

詳細的開獎代碼可以參考我們的 GitHub 開源倉庫：[MythPool LAB](https://www.github.com/mythpool/contract)。

## 🔑 IDL 開源與驗證

基礎用戶可以通過 **IDL** 或 **Web3JS** 來關注隨機帳戶的隨機數和交易細節，驗證開獎結果。

- 你可以通過 [MythPool IDL](https://github.com/mythpool/IDL) 來集成和驗證隨機數的生成過程。

這個 IDL 提供了一個簡便的介面，使開發者能夠在鏈上獲取隨機數，追蹤隨機帳戶的交易和細節，進一步確保開獎過程的透明度和公正性。

## 🔑 總結

通過以上方法，我們確保每次開獎過程中生成的隨機數是公正和不可篡改的。借助 Switchboard 和可信執行環境 (TEE)，我們能夠提供一個透明、安全的開獎過程，確保每個參與者都能獲得公平的機會。

如果您對這個過程有任何問題或建議，歡迎查閱文檔或加入我們的社區獲取更多支持！
