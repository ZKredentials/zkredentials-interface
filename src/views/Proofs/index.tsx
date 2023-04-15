import { ProofsContainer, ProofsTitle } from "./style";
import ProofCard from "@/components/ProofCard";
import { useUserProof } from "@/context/UserProofContext";

const Proofs = () => {
  const { state } = useUserProof();

  return (
    <ProofsContainer>
      <ProofsTitle>Proofs</ProofsTitle>
      {state.cid && <ProofCard cid={state.cid || ""} />}
    </ProofsContainer>
  );
};

export default Proofs;
