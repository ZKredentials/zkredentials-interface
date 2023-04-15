import GithubStatistics from "@/components/GithubStatistics";
import {
  GenerateProofViewContainer,
  GenerateProofViewContent,
  GenerateProofViewTitle,
} from "./style";

const GenerateProofView = () => {
  return (
    <GenerateProofViewContainer>
      <GenerateProofViewTitle>Generate Proof</GenerateProofViewTitle>
      <GenerateProofViewContent>
        <GithubStatistics />
      </GenerateProofViewContent>
    </GenerateProofViewContainer>
  );
};

export default GenerateProofView;
