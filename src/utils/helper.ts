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
