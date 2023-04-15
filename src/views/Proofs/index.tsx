import { getProofByUser } from "@/subgraph/getProofByUser";
import { ProofsContainer, ProofsTitle } from "./style";
import { useEffect, useState } from "react";
import { useMetaMask } from "@/hooks/useMetamask";
import { getIpfsData } from "@/utils/api";
import { getCid } from "@/utils/helper";
import ProofCard from "@/components/ProofCard";

interface IGithubProof {
  prs?: string;
  prsThreshold?: number;
  starred?: string;
  starredThreshold?: number;
  sponsors?: string;
  sponsorsThreshold?: number;
}

const Proofs = () => {
  const { state } = useMetaMask();
  const [data, setData] = useState<IGithubProof>();
  const [cid, setCid] = useState<string>();

  const fetchData = async () => {
    if (state.wallet) {
      const { cid: _cid } = await getProofByUser(state.wallet);
      if (_cid) {
        const url = getCid(_cid);
        setCid(url);
        const data = await getIpfsData(url);

        setData({
          prs: data.prs || "",
          prsThreshold: data.prsThreshold || 0,
          starred: data.starred || "",
          starredThreshold: data.starredThreshold || 0,
          sponsors: data.sponsors || "",
          sponsorsThreshold: data.sponsorsThreshold || 0,
        });
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProofsContainer>
      <ProofsTitle>Proofs</ProofsTitle>
      <ProofCard cid={cid || ""} />
    </ProofsContainer>
  );
};

export default Proofs;
