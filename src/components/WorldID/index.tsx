import dynamic from "next/dynamic";
import { VerificationResponse } from "@worldcoin/id";
import axios from "axios";
import Image from "next/image";
import WorldIDIcon from "@/assets/images/WorldId.svg";
import { WorldIDLogo, WorldIdContainer, WorldIdText } from "./style";
import { useState } from "react";
import useRegisterUser from "@/hooks/useRegisterUser";
import useCheckRegisteredUser from "@/hooks/useCheckRegisteredUser";
import { useWorldID } from "@/context/WorldIDContext";
import { generateWorldIdProof } from "@/utils/api";
import { useMetaMask } from "@/hooks/useMetamask";

const IDKitWidget = dynamic(
  () => import("@worldcoin/idkit" as any).then((mod) => mod.IDKitWidget),
  { ssr: false }
) as any

const VerificationAction = "Sign In WorldID";
const VerificationSignal = "Verification with WORLDID";

const WorldID = () => {
  const { state } = useMetaMask();
  const [loading, setLoading] = useState<boolean>(false);
  const { state: WorldIDState } = useWorldID();
  const { fetchData } = useCheckRegisteredUser();

  const {
    transactionHash,
    error,
    loading: isRegistering,
    register,
  } = useRegisterUser();

  useCheckRegisteredUser();

  const app_id = "app_staging_80251b57de090b576b3c8c1d0eab9cfd";

  const handleRegister = async (address: string) => {
    const cid = await generateWorldIdProof(address);
    console.log("cid for worldcoin", cid);
    await register(cid.data as string);
    await fetchData();
  };

  const handleVerify = async (verificationResponse: VerificationResponse) => {
    setLoading(true);

    if (state.wallet) {
      const response = await axios.post("http://localhost:3000/api/worldid", {
        app_id,
        nullifier_hash: verificationResponse.nullifier_hash,
        proof: verificationResponse.proof,
        merkle_root: verificationResponse.merkle_root,
        verificationAction: VerificationAction,
        verificationSignal: VerificationSignal,
      });

      if (response.data) {
        await handleRegister(state.wallet);
      }
    }

    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <WorldIdContainer>
          <WorldIDLogo>
            <Image src={WorldIDIcon} alt="World Id Icon" fill />
          </WorldIDLogo>
          <WorldIdText>Verifying</WorldIdText>
        </WorldIdContainer>
      ) : (
        <>
          {transactionHash ? (
            <WorldIdContainer>
              <WorldIDLogo>
                <Image src={WorldIDIcon} alt="World Id Icon" fill />
              </WorldIDLogo>
              <WorldIdText>Verified</WorldIdText>
            </WorldIdContainer>
          ) : (
            <>
              {WorldIDState.isVerified ? (
                <WorldIdContainer>
                  <WorldIDLogo>
                    <Image src={WorldIDIcon} alt="World Id Icon" fill />
                  </WorldIDLogo>
                  <WorldIdText>Verified</WorldIdText>
                </WorldIdContainer>
              ) : (
                <IDKitWidget
                  app_id={app_id} // obtain this from developer.worldcoin.org
                  action={VerificationAction}
                  signal={VerificationSignal}
                  action_description="Verify with WorldID for generation for Zkredentials"
                  enableTelemetry
                  onSuccess={(result: any) => handleVerify(result)} // pass the proof to the API or your smart contract
                >
                  {({ open }: {open: any}) => (
                    <WorldIdContainer onClick={open}>
                      <WorldIDLogo>
                        <Image src={WorldIDIcon} alt="World Id Icon" fill />
                      </WorldIDLogo>
                      <WorldIdText>Verify with World ID</WorldIdText>
                    </WorldIdContainer>
                  )}
                </IDKitWidget>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default WorldID;
