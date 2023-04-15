import { generateGithubProof } from "@/utils/api";
import { useState } from "react";

const useGithubGenerate = () => {
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const generate = async (sponsors: number, starred: number, prs: number) => {
    setLoading(true);
    const response = await generateGithubProof(sponsors, starred, prs);
    if (response.success) {
      console.log("response", response);
      setData(response.data as string);
      setError("");
      return;
    }

    setData("");
    setError("Unable to fetch stats from Github");
    setLoading(false);
  };

  return { data, loading, error, generate };
};

export default useGithubGenerate;
