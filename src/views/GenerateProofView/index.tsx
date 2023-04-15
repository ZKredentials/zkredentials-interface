import GithubStatistics from "@/components/GithubStatistics";
import {
  GenerateProofViewContainer,
  GenerateProofViewContent,
  GenerateProofViewTitle,
} from "./style";
import { useSocials } from "@/context/SocialsContext";

const GenerateProofView = () => {
  const { state } = useSocials();

  return (
    <GenerateProofViewContainer>
      <GenerateProofViewTitle>Generate Proof</GenerateProofViewTitle>
      <GenerateProofViewContent>
        {state.isGithub && <GithubStatistics />}
      </GenerateProofViewContent>
    </GenerateProofViewContainer>
  );
};

export default GenerateProofView;
