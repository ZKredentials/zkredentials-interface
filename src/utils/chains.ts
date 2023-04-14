export enum EChain {
  MUMBAI = "MUMBAI",
  GOERLI = "GOERLI",
  SCROLL = "SCROLL",
  CHIADO = "CHIADO", // Gnosis Testnet
  TAIKO = "TAIKO", // Taiko Testnet
  POLYGON = "POLYGON",
}

export const ChainNameToChainId = {
  [EChain.MUMBAI]: "80001",
  [EChain.GOERLI]: "5",
  [EChain.SCROLL]: "534353",
  [EChain.CHIADO]: "10200",
  [EChain.TAIKO]: "167004",
  [EChain.POLYGON]: "137",
};
