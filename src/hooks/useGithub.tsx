import {
  LOCAL_STORAGE_GITHUB_ACCESS_TOKEN,
  LOCAL_STORAGE_GITHUB_CODE,
} from "@/utils/constants";
import { useEffect, useState } from "react";

const useGithub = () => {
  const [data, setData] = useState<{ code: string; access_token: string }>({
    code: "",
    access_token: "",
  });

  const getGithubCreds = () => {
    if (typeof window !== "undefined") {
      const code = localStorage.getItem(LOCAL_STORAGE_GITHUB_CODE);
      const access_token = localStorage.getItem(
        LOCAL_STORAGE_GITHUB_ACCESS_TOKEN
      );

      setData({
        code: code || "",
        access_token: access_token || "",
      });

      return;
    }

    setData({
      code: "",
      access_token: "",
    });
  };

  useEffect(() => {
    getGithubCreds();
  }, []);

  return {
    data,
  };
};

export default useGithub;
