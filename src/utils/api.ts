import axios from "axios";
import {
  BACKEND_BASE_URL,
  LOCAL_STORAGE_GITHUB_ACCESS_TOKEN,
} from "./constants";

export interface IBaseStats {
  sponsors: number;
  starred: number;
  prs: number;
}

interface IResponse {
  data: IBaseStats | string;
  success: boolean;
}

export const getGithubStats = async (): Promise<IResponse> => {
  try {
    const response = await axios.post(`${BACKEND_BASE_URL}/stats`, {
      token: localStorage.getItem(LOCAL_STORAGE_GITHUB_ACCESS_TOKEN),
    });
    if (response.status === 200) {
      return {
        data: {
          sponsors: response.data.sponsors,
          starred: response.data.starred,
          prs: response.data.prs,
        },
        success: true,
      };
    }
    return {
      data: {
        sponsors: 0,
        starred: 0,
        prs: 0,
      },
      success: false,
    };
  } catch (error: any) {
    console.log(error);
    return {
      data: {
        sponsors: 0,
        starred: 0,

        prs: 0,
      },
      success: false,
    };
  }
};

export const generateGithubProof = async (
  sponsors: number,
  starred: number,
  prs: number
): Promise<IResponse> => {
  try {
    const response = await axios.post(`${BACKEND_BASE_URL}/generate`, {
      token: localStorage.getItem(LOCAL_STORAGE_GITHUB_ACCESS_TOKEN),
      sponsors,
      starred,
      prs,
    });
    if (response.status === 200) {
      return {
        data: response.data.cid as string,
        success: true,
      };
    }
    return {
      data: "",
      success: false,
    };
  } catch (error) {
    return {
      data: "",
      success: false,
    };
  }
};
