# 🔗 Contract Addresses Overview

Here are the key contract addresses associated with the MythPool platform and their purposes:

| Contract Name        | Address |
|----------------------|---------|
| **MythPoolContract**  | [7XxQWaWY5faDzmMKSPkMZnkf3JViHZVEutbZquPAzrQ2](https://solscan.io/account/7XxQWaWY5faDzmMKSPkMZnkf3JViHZVEutbZquPAzrQ2) |
| **Myth Token (MYTH)** | [DFDDDptKtQyyRbxqZJFBDvCdUsQ2FwrPDrhcvGY7perV](https://solscan.io/account/DFDDDptKtQyyRbxqZJFBDvCdUsQ2FwrPDrhcvGY7perV) |
| **Raydium Pool**      | [8XMWkg9rwz6QnjJqUqvGjEdSEzVL7vpauLf1M795u6wF](https://raydium.io/swap/?inputMint=DFDDDptKtQyyRbxqZJFBDvCdUsQ2FwrPDrhcvGY7perV&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) |
| **Manager Account**   | [2GmC8zFbsYGrxqHviziQ6npU3ver6jPmBxk1AxjHfXVD](https://solscan.io/account/2GmC8zFbsYGrxqHviziQ6npU3ver6jPmBxk1AxjHfXVD) |


## 🧩 MythPoolContract

The `MythPoolContract` is the core smart contract of the MythPool platform. It powers the primary lottery functions, including:

- Purchasing lottery tickets
- Creating and managing both standard and public pools
- Executing draw results
- Handling reward distribution

This contract is accessible via IDL (Interface Definition Language), allowing integration with external applications for automation and monitoring.

## 🪙 Myth Token (MYTH)

`Myth` is the native utility token of the MythPool platform, issued under the standard SPL token specification. It serves several purposes:

- Incentivizing user participation and community contributions
- Supporting DAO-based governance
- Recycling platform profits back into liquidity pools via buybacks

MYTH can be traded through the Raydium liquidity pool.


## 🌊 Raydium Liquidity Pool

The `Raydium Pool` is an automated market maker (AMM) pool created for MYTH token trading. It enables:

- Seamless token swaps on Raydium or any Serum-compatible DEX
- Claiming airdrop rewards and platform incentives
- Strengthening liquidity support for MYTH

Users can trade MYTH tokens or provide liquidity through Raydium’s swap interface.

## 🛠️ Manager Account

The `Manager` account is responsible for backend system operations, including:

- Triggering Chainlink VRF for random draw results
- Executing automated draws and reward distribution
- Updating critical system parameters such as fee rates and rules

Monitoring this account allows users and developers to stay up to date with all platform-level actions and changes.
