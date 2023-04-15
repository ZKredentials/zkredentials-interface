## ZK-Credentials

This repository contains all frontend code written for project ZKCredentials as part of the ETHTokyo 2023 Hackathon organised by ETHGlobal. This application allows users to login with their 
github accounts to create an anonymous resume using zkproofs.

## Getting Started

First run 
```
npm install
```
Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables
NEXT_PUBLIC_WORLDCOIN_CONTRACT_ADDRESS=world coin contract
NEXT_PUBLIC_GITHUB_CONTRACT_ADDRESS=github contract
NEXT_PUBLIC_TWITTER_CONTRACT_ADDRESS=twitter contract
NEXT_PUBLIC_ALCHEMY_ID=alchemy id
NEXT_PUBLIC_SUBGRAPH=subgraph url