import axios from "axios";
import {
  BACKEND_BASE_URL,
  LOCAL_STORAGE_GITHUB_ACCESS_TOKEN,
} from "./constants";
import { getIpfsUrl, isIpfsCid } from "./helper";

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
  prs: number,
  showPrs: boolean,
  showStarred: boolean,
  showSponsors: boolean
): Promise<IResponse> => {
  try {
    // construct request body
    const requestBody: { [key: string]: number } = {};

    if (showPrs) {
      requestBody["prs"] = prs;
    }

    if (showStarred) {
      requestBody["starred"] = starred;
    }

    if (showSponsors) {
      requestBody["sponsors"] = sponsors;
    }

    console.log("requestbod", requestBody);
    const response = await axios.post(`${BACKEND_BASE_URL}/generate`, {
      token: localStorage.getItem(LOCAL_STORAGE_GITHUB_ACCESS_TOKEN),
      ...requestBody,
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

export const generateWorldIdProof = async (
  address: string
): Promise<IResponse> => {
  try {
    const response = await axios.post(`${BACKEND_BASE_URL}/generateworld`, {
      address,
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

export const getIpfsData = async (cid: string): Promise<any> => {
  try {
    if (!isIpfsCid(cid)) {
      return {
        data: "",
        success: false,
      };
    }

    const url = getIpfsUrl(cid);
    const response = await axios.get(`${url}/resume.json`);

    if (response.status === 200) {
      console.log("here", response.data);
      return {
        data: response.data,
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
