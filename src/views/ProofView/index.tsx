import { FC, useEffect, useState } from "react";
import {
  ProofViewContainer,
  ProofViewContent,
  ProofViewProofDetail,
  ProofViewSection,
  ProofViewText,
  ProofViewTextSeeMore,
} from "./style";
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
  const [viewMorePrs, setViewMorePrs] = useState<boolean>(false);
  const [prsProofDetails, setPrsProofDetails] = useState<string>("");
  const [viewMoreStarred, setViewMoreStarred] = useState<boolean>(false);
  const [starredProofDetails, setStarredProofDetails] = useState<string>("");
  const [viewMoreSponsors, setViewMoreSponsors] = useState<boolean>(false);
  const [sponsorsProofDetails, setSponsorsProofDetails] = useState<string>("");

  const fetchData = async () => {
    setLoading(true);
    if (cid) {
      const { data } = await getIpfsData(cid, "resume.json");
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

  const get = async (cid: string, fileName: string) => {
    const { data } = await getIpfsData(cid, fileName);
    return data;
  };

  const fetchAllDetails = async () => {
    if (data?.prs) {
      const prs_response = await get(data.prs, "prsProof.json");
      setPrsProofDetails(JSON.stringify(prs_response.proof));
    }

    if (data?.starred) {
      console.log(data.starred);
      const starred_response = await get(data.starred, "starredProof.json");
      setStarredProofDetails(JSON.stringify(starred_response.proof));
    }

    if (data?.sponsors) {
      const sponsor_response = await get(data.sponsors, "sponsorProof.json");
      setSponsorsProofDetails(JSON.stringify(sponsor_response.proof));
    }
  };

  useEffect(() => {
    fetchData();
  }, [cid]);

  useEffect(() => {
    if (data) {
      fetchAllDetails();
    }
  }, [data]);

  return (
    <ProofViewContainer>
      {loading ? (
        <ProofViewContent>
          <ProofViewText>Loading...</ProofViewText>
        </ProofViewContent>
      ) : (
        <ProofViewContent>
          {data?.prs && (
            <ProofViewSection>
              <ProofViewText>
                You have at least {data?.prsThreshold} Pulled Requests
              </ProofViewText>
              {viewMorePrs ? (
                <ProofViewProofDetail onClick={() => setViewMorePrs(false)}>
                  {prsProofDetails}
                </ProofViewProofDetail>
              ) : (
                <ProofViewTextSeeMore onClick={() => setViewMorePrs(true)}>
                  View Proof
                </ProofViewTextSeeMore>
              )}
            </ProofViewSection>
          )}

          {data?.starred && (
            <ProofViewSection>
              <ProofViewText>
                You have at least {data?.starredThreshold} Starred Repositories
              </ProofViewText>
              {viewMoreStarred ? (
                <ProofViewProofDetail onClick={() => setViewMoreStarred(false)}>
                  {starredProofDetails}
                </ProofViewProofDetail>
              ) : (
                <ProofViewTextSeeMore onClick={() => setViewMoreStarred(true)}>
                  View Proof
                </ProofViewTextSeeMore>
              )}
            </ProofViewSection>
          )}

          {data?.sponsors && (
            <ProofViewSection>
              <ProofViewText>
                You have at least {data?.sponsorsThreshold} Sponsors
              </ProofViewText>
              {viewMoreSponsors ? (
                <ProofViewProofDetail
                  onClick={() => setViewMoreSponsors(false)}
                >
                  {sponsorsProofDetails}
                </ProofViewProofDetail>
              ) : (
                <ProofViewTextSeeMore onClick={() => setViewMoreSponsors(true)}>
                  View Proof
                </ProofViewTextSeeMore>
              )}
            </ProofViewSection>
          )}
        </ProofViewContent>
      )}
    </ProofViewContainer>
  );
};

export default ProofView;
