import {
  GithubStatisticsInputContainer,
  GithubStatisticsContainer,
  GithubStatisticsContent,
  GithubStatisticsRow,
  GithubStatisticsTableHeader,
  GithubStatisticsText,
  GithubStatisticsTextInput,
  GithubStatisticsError,
  GithubStatisticsButton,
} from "./style";
import useGithubStats from "@/hooks/useGithubStats";
import { useState } from "react";
import { generateGithubProof } from "@/utils/api";
import useGithubMint from "@/hooks/useGithubMint";

const GithubStatistics = () => {
  const { data: stats, loading: fetchingStats } = useGithubStats();
  const {
    transactionHash,
    error: githubMintingError,
    submitProof,
    clearData: clearMint,
    replaceProof,
  } = useGithubMint();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [numOfPrs, setNumOfPrs] = useState<number>(0);
  const [numOfStarred, setNumOfStarred] = useState<number>(0);
  const [numOfSponsors, setNumOfSponsors] = useState<number>(0);

  const [proofPrs, setProofPrs] = useState<boolean>(false);
  const [proofStarred, setProofStarred] = useState<boolean>(false);
  const [proofSponsors, setProofSponsors] = useState<boolean>(false);

  const clearData = () => {
    setProofPrs(false);
    setProofSponsors(false);
    setProofStarred(false);

    setNumOfPrs(0);
    setNumOfStarred(0);
    setNumOfSponsors(0);
    clearMint();
  };

  const handleGenerate = async () => {
    setError("");
    setLoading(true);
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

    try {
      const { data: cid } = await generateGithubProof(
        numOfSponsors,
        numOfStarred,
        numOfPrs,
        proofPrs,
        proofStarred,
        proofSponsors
      );
      await replaceProof(cid as string);
      clearData();
    } catch (error) {
      setError("Something went wrong with submitting proof. Please try again.");
    }

    setLoading(false);
  };

  const handleReplace = async () => {
    setError("");
    setLoading(true);
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

    try {
      const { data: cid } = await generateGithubProof(
        numOfSponsors,
        numOfStarred,
        numOfPrs,
        proofPrs,
        proofStarred,
        proofSponsors
      );
      await submitProof(cid as string);
      clearData();
    } catch (error) {
      setError("Something went wrong with submitting proof. Please try again.");
    }

    setLoading(false);
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

      <GithubStatisticsButton
        type="button"
        onClick={() => {
          if (!loading) {
            // TODO Find a way to decide which generate
            handleGenerate();
          }
        }}
        disabled={loading}
      >
        {loading ? <p>Submitting Proof</p> : <p>Submit</p>}
      </GithubStatisticsButton>

      {error && <GithubStatisticsError>{error}</GithubStatisticsError>}
    </GithubStatisticsContainer>
  );
};

export default GithubStatistics;
