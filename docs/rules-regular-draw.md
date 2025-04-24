# 🎲 Regular Pool Draw and Cancellation Rules

MythPool's regular lottery pools follow strict rules to ensure **fairness, transparency, and trustlessness** throughout the entire process.


## 🎉 Draw Rules

There are two types of draw mechanisms for regular pools:

### ✅ Instant Draw (Full Sell-Out)

- If all tickets in the pool are sold before the deadline, the system **immediately triggers a draw** by requesting a verifiable random number from **Switchboard VRF**.
- After the draw, the winnings are **automatically distributed** to the winner(s) on-chain.

### ⏰ Deadline-Based Draw

- If the ticket sales **reach at least the minimum threshold** (typically **60%**) before the pool’s deadline:
  - The system will automatically trigger a draw **at the deadline time**.
  - It uses Switchboard’s VRF to ensure a **trustless and tamper-proof random draw**, followed by on-chain distribution of funds.


## ❌ Pool Cancellation Rules

If the deadline arrives **and the ticket sales are below the minimum threshold** (typically **60%**), the system will **automatically cancel** the pool. The following steps occur:

### 🔒 Creator Staking Penalty

- The creator’s initial stake (collateral required to create the pool) will be **forfeited**.
- This forfeited amount will be **converted to platform tokens (Myth)** and **airdropped to all users who bought tickets in that pool**.

### 💸 Refunds + Compensation

- All participants will be able to **redeem their spent ticket funds**.
- In addition, each participant will receive **platform token (Myth) compensation** as an apology for the pool cancellation.


## ⚠️ Handling Unexpected Issues

In rare cases, there may be delays in the draw process due to:

- Overloaded requests on **Switchboard’s oracle network**.
- Network congestion or unresponsive VRF service.

### No Need to Worry:

- We implement a **commitment slot** when requesting randomness, ensuring that the final result is **fixed and cannot be altered**, even if delayed.
- If such a situation occurs, please **contact our support immediately** and we will promptly investigate and resolve the issue.


At **MythPool**, our mission is to build a **fair, fully on-chain, and community-governed lottery platform**. The above mechanisms help us guarantee security and transparency for every participant.