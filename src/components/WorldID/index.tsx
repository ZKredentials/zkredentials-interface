import dynamic from "next/dynamic";
import { VerificationResponse } from "@worldcoin/id";
import axios from "axios";
import Image from "next/image";
import WorldIDIcon from "@/assets/images/WorldId.svg";
import { WorldIDLogo, WorldIdContainer, WorldIdText } from "./style";
import { useState } from "react";

const IDKitWidget = dynamic(
  () => import("@worldcoin/idkit").then((mod) => mod.IDKitWidget),
  { ssr: false }
);

const VerificationAction = "Sign In WorldID";
const VerificationSignal = "Verification with WORLDID";

const WorldID = () => {
  const [isVerified, setIsVerified] = useState<boolean>(true);

  const app_id = "app_staging_80251b57de090b576b3c8c1d0eab9cfd";
  const handleVerify = async (verificationResponse: VerificationResponse) => {
    const response = await axios.post("http://localhost:3000/api/worldid", {
      app_id,
      nullifier_hash: verificationResponse.nullifier_hash,
      proof: verificationResponse.proof,
      merkle_root: verificationResponse.merkle_root,
      verificationAction: VerificationAction,
      verificationSignal: VerificationSignal,
    });

    // TODO -> from the success, trigger a signing proof process
    console.log("response from frontend", response.data);
  };

  // TODO Include smart contract call to check whether is it verified

  return (
    <>
      {isVerified ? (
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
          enableTelemetry
          onSuccess={(result) => handleVerify(result)} // pass the proof to the API or your smart contract
        >
          {({ open }) => (
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
  );
};

export default WorldID;
