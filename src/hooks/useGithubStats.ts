import { IBaseStats, getGithubStats } from "@/utils/api";
import { useEffect, useState } from "react";

const EmptyData: IBaseStats = {
  sponsors: 0,
  starred: 0,
  prs: 0,
};

const useGithubStats = () => {
  const [data, setData] = useState<IBaseStats>(EmptyData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchGithubStats = async () => {
    setLoading(true);
    const response = await getGithubStats();
    console.log("github stats", response);
    if (response.success) {
      setData(response.data as IBaseStats);
      setError("");
      setLoading(false);
      return;
    }

    setData(EmptyData);
    setError("Unable to fetch stats from Github");
    setLoading(false);
  };

  useEffect(() => {
    fetchGithubStats();
  }, []);

  return { data, loading, error };
};

export default useGithubStats;
