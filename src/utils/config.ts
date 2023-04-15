const config = {
  CONTRACT_ADDRESS: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "",
  ALCHEMY_ID: process.env.NEXT_PUBLIC_ALCHEMY_ID || "",
  GITHUB_CLIENT_ID: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || "",
  GITHUB_CLIENT_SECRET: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET || "",
  SUBGRAPH_URL: process.env.NEXT_PUBLIC_SUBGRAPH || "",
  WORLDCOIN_CONTRACT_ADDRESS:
    process.env.NEXT_PUBLIC_WORLDCOIN_CONTRACT_ADDRESS || "",
  GITHUB_CONTRACT_ADDRESS:
    process.env.NEXT_PUBLIC_GITHUB_CONTRACT_ADDRESS || "",
  TWITTER_CONTRACT_ADDRESS:
    process.env.NEXT_PUBLIC_TWITTER_CONTRACT_ADDRESS || "",
};

export default config;
