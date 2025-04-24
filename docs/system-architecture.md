![System Architecture](/system.png)

# 🏗️ System Architecture Overview

This system is built on the Solana blockchain, integrating decentralized smart contracts with off-chain services to provide users with a fast, reliable, and verifiable lottery experience. Below is a detailed overview of the architecture:


## 🧑‍💻 Client Side

Users interact with our DApp via a browser (such as Chrome) or a wallet (e.g., Phantom) to:

- View on-chain information quickly, powered by cached data
- Log in, authorize, and manage transactions through the wallet
- Interact with smart contracts via Solana's `@solana/web3.js` library (e.g., ticket purchase, draw)


## 🌐 Web API Service

- The DApp communicates with our Web API to retrieve cached blockchain data such as pool status and ticket details
- The API ensures high-performance access and reduces latency compared to direct on-chain queries
- Data is sourced from off-chain sync services to ensure freshness and consistency

## 🔄 Scheduled Off-Chain Service

To maintain data accuracy and automate logic, we run a background scheduler service:

- **Event Listener**: Regularly listens to on-chain events such as ticket purchases, draws, and NFT updates
- **Data Synchronization**: Extracts, parses, and writes on-chain data to our local database for real-time display and analysis


## 🎲 Lottery Draw Logic

The drawing process is initiated off-chain to ensure control and verifiability:

1. The **Scheduled Service** triggers the drawing logic at specific times
2. It interacts with the **MythPool smart contract** and requests a random number from **Switchboard VRF**
3. The VRF contract returns a cryptographically verifiable random number on-chain
4. The draw result is saved on-chain and synchronized to our backend database


## 🧱 Core Components Overview

| Component | Description |
|----------|-------------|
| 🖥️ DApp | User-facing application for interaction and contract operations |
| 🔌 Web API | Backend service that exposes high-speed on-chain data queries |
| ⏱️ Scheduled Service | Off-chain cron jobs for data sync and drawing logic |
| 📦 Database | Stores snapshots of blockchain data and user state |
| ⛓️ MythPool Contract | Core contract for lottery logic |
| 🎰 Switchboard VRF | Verifiable random number provider for fair draws |


## 🔐 Security & Performance Highlights

- Cached blockchain data ensures fast and smooth DApp experiences
- All smart contract operations require user-signed transactions for security
- Draw logic uses on-chain verifiable randomness to prevent manipulation
