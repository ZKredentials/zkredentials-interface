import useGithubGenerate from "@/hooks/useGithubGenerate";
import {
  GithubStatisticsInputContainer,
  GithubStatisticsContainer,
  GithubStatisticsContent,
  GithubStatisticsRow,
  GithubStatisticsTableHeader,
  GithubStatisticsText,
  GithubStatisticsTextInput,
  GithubStatisticsError,
} from "./style";
import useGithubStats from "@/hooks/useGithubStats";
import { useState } from "react";
import { generateGithubProof } from "@/utils/api";

const GithubStatistics = () => {
  const {
    data: cid,
    loading,
    error: generationError,
    generate,
  } = useGithubGenerate();
  const { data: stats, loading: fetchingStats } = useGithubStats();
  const [error, setError] = useState<string>("");

  const [numOfPrs, setNumOfPrs] = useState<number>(0);
  const [numOfStarred, setNumOfStarred] = useState<number>(0);
  const [numOfSponsors, setNumOfSponsors] = useState<number>(0);

  const [proofPrs, setProofPrs] = useState<boolean>(false);
  const [proofStarred, setProofStarred] = useState<boolean>(false);
  const [proofSponsors, setProofSponsors] = useState<boolean>(false);

  const handleGenerate = async () => {
    setError("");
    // Check if numbers are valid
    if (!proofPrs && !proofStarred && !proofSponsors) {
      setError("Minimum of one proof");
      return;
    }

    if (proofPrs && numOfPrs > stats.prs) {
      setError("Threshold cannot exceed the numbers of PR you have");
      return;
    }

    if (proofStarred && numOfStarred > stats.starred) {
      setError("Threshold cannot exceed the numbers of Starred you have");
      return;
    }

    if (proofSponsors && numOfSponsors > stats.sponsors) {
      setError("Threshold cannot exceed the numbers of Sponsors you have");
      return;
    }

    if (proofPrs && numOfPrs <= 0) {
      setError("Threshold of PR must be a position value");
      return;
    }

    if (proofStarred && numOfStarred <= 0) {
      setError("Threshold of Starred must be a position value");
      return;
    }

    if (proofSponsors && numOfSponsors <= 0) {
      setError("Threshold of Sponsors must be a position value");
      return;
    }

    const { data: cid } = await generateGithubProof(
      numOfSponsors,
      numOfStarred,
      numOfPrs
    );
    console.log("cid", cid);
  };

  return (
    <GithubStatisticsContainer>
      <GithubStatisticsContent>
        <GithubStatisticsTableHeader>
          <p>Type</p>
          <p>Show</p>
          <p>You have</p>
          <p>Threshold</p>
        </GithubStatisticsTableHeader>
        {fetchingStats ? (
          <GithubStatisticsText>Loading</GithubStatisticsText>
        ) : (
          <>
            <GithubStatisticsRow>
              <GithubStatisticsText>PRs</GithubStatisticsText>
              <GithubStatisticsInputContainer>
                <input
                  type="checkbox"
                  onChange={(e) => setProofPrs(e.target.checked)}
                />
              </GithubStatisticsInputContainer>
              <GithubStatisticsText>{stats.prs}</GithubStatisticsText>
              <GithubStatisticsInputContainer>
                <GithubStatisticsTextInput
                  type="number"
                  onChange={(e) => setNumOfPrs(+e.target.value)}
                />
              </GithubStatisticsInputContainer>
            </GithubStatisticsRow>

            <GithubStatisticsRow>
              <GithubStatisticsText>Starred Repos</GithubStatisticsText>
              <GithubStatisticsInputContainer>
                <input
                  type="checkbox"
                  onChange={(e) => setProofStarred(e.target.checked)}
                />
              </GithubStatisticsInputContainer>
              <GithubStatisticsText>{stats.starred}</GithubStatisticsText>
              <GithubStatisticsInputContainer>
                <GithubStatisticsTextInput
                  type="number"
                  onChange={(e) => setNumOfStarred(+e.target.value)}
                />
              </GithubStatisticsInputContainer>
            </GithubStatisticsRow>

            <GithubStatisticsRow>
              <GithubStatisticsText>Sponsors</GithubStatisticsText>
              <GithubStatisticsInputContainer>
                <input
                  type="checkbox"
                  onChange={(e) => setProofSponsors(e.target.checked)}
                />
              </GithubStatisticsInputContainer>
              <GithubStatisticsText>{stats.sponsors}</GithubStatisticsText>
              <GithubStatisticsInputContainer>
                <GithubStatisticsTextInput
                  type="number"
                  onChange={(e) => setNumOfSponsors(+e.target.value)}
                />
              </GithubStatisticsInputContainer>
            </GithubStatisticsRow>
          </>
        )}
      </GithubStatisticsContent>

      <button type="button" onClick={handleGenerate}>
        Generate
      </button>

      {error && <GithubStatisticsError>{error}</GithubStatisticsError>}
    </GithubStatisticsContainer>
  );
};

export default GithubStatistics;
