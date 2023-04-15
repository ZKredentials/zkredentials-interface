import { EChain } from "./chains";

export enum ContractName {
  WORLDID = "WORLDID",
  GITHUB = "GITHUB",
}

const ChainToAddressMapping: { [key: string]: { [key: string]: string } } = {
  [EChain.CHIADO]: {
    [ContractName.GITHUB]: "0x3ca839f1E7E456464e2CEF5bd43E4e64aBFcFBff",
    [ContractName.WORLDID]: "0xA960261A0926F02822543561f3ae0f86839b2Ea2",
  },
  [EChain.TAIKO]: {
    [ContractName.GITHUB]: "0xfA3422b99515d78D889C0a8Ce866A8444A589fB8",
    [ContractName.WORLDID]: "0x07A583000b1C86b159e065D16c05fbD5A14f92A8",
  },
  [EChain.MUMBAI]: {
    [ContractName.GITHUB]: "0x61225EBA5d5CFaEe6A849211374F8e40572B00Df",
    [ContractName.WORLDID]: "0xa994866Fa037fF7F80205136671d762B5D24e8Dc",
  },
  [EChain.SCROLL]: {
    [ContractName.GITHUB]: "0xFb6bf2E085f4ffB8f521A9E53d70963fa90e9fe8",
    [ContractName.WORLDID]: "0x23E122D9dBFc3A2BD61a5d9E0dA98499C5890579",
  },
  [EChain.LINEA]: {
    [ContractName.GITHUB]: "0xE3641277B8450e174a2Dea656649a3A1EBcEb2BE",
    [ContractName.WORLDID]: "0xfA3422b99515d78D889C0a8Ce866A8444A589fB8",
  },
};

export default ChainToAddressMapping;
