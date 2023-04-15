import { ethers } from "ethers";
import {
  LOCAL_STORAGE_GITHUB_ACCESS_TOKEN,
  LOCAL_STORAGE_GITHUB_CODE,
} from "./constants";

export const getGithubCreds = () => {
  if (typeof window !== "undefined") {
    const code = localStorage.getItem(LOCAL_STORAGE_GITHUB_CODE);
    const access_token = localStorage.getItem(
      LOCAL_STORAGE_GITHUB_ACCESS_TOKEN
    );

    return {
      code,
      access_token,
    };
  }

  return {
    code: "",
    access_token: "",
  };
};

export const getDisplayAddress = (
  address: string | null | undefined,
  size: number,
  isMobile: boolean
): string => {
  if (!address || address === `-`) {
    return `-`;
  }
  if (isMobile) {
    return `${address.toString().slice(0, 3)}...`;
  }
  if (ethers.utils.isAddress(address)) {
    return `${address.toString().slice(0, size)}...${address
      .toString()
      .slice(-size)}`;
  }
  return address;
};

export const getCid = (cidOrPrefixedUrl: string): string => {
  return cidOrPrefixedUrl.replace("ipfs://", "");
};

export const addIpfsPrefix = (cid: string): string => {
  return `ipfs://${cid}`;
};

export const getIpfsUrl = (cid: string): string => {
  return `https://ipfs.io/ipfs/${getCid(cid)}`;
};

export const isIpfsCid = (possibleCid: string): boolean => {
  const isV0Cid = possibleCid.startsWith("Qm");
  const isV1Cid = possibleCid.startsWith("b");

  return isV0Cid || isV1Cid;
};
