import { FC, useEffect, useState } from "react";
import { ProofViewContainer, ProofViewContent, ProofViewText } from "./style";
import { getIpfsData } from "@/utils/api";

interface IProps {
  cid: string;
}

interface IGithubProof {
  prs?: string;
  prsThreshold?: number;
  starred?: string;
  starredThreshold?: number;
  sponsors?: string;
  sponsorsThreshold?: number;
}

const ProofView: FC<IProps> = ({ cid }) => {
  const [data, setData] = useState<IGithubProof>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setLoading(true);
    if (cid) {
      const { data } = await getIpfsData(cid);
      setData({
        prs: data.prs || "",
        prsThreshold: data.prsThreshold || 0,
        starred: data.starred || "",
        starredThreshold: data.starredThreshold || 0,
        sponsors: data.sponsors || "",
        sponsorsThreshold: data.sponsorsThreshold || 0,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [cid]);

  return (
    <ProofViewContainer>
      {loading ? (
        <ProofViewText>Loading...</ProofViewText>
      ) : (
        <ProofViewContent>
          <ProofViewText>
            You have at least {data?.prsThreshold} Pulled Requests
          </ProofViewText>
          <ProofViewText>
            You have at least {data?.sponsorsThreshold} Sponsors
          </ProofViewText>
          <ProofViewText>
            You have at least {data?.starredThreshold} Starred Repositories
          </ProofViewText>
        </ProofViewContent>
      )}
    </ProofViewContainer>
  );
};

export default ProofView;
