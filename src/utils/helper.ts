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
