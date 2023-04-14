import dynamic from "next/dynamic";
import { VerificationResponse } from "@worldcoin/id";
import axios from "axios";

const IDKitWidget = dynamic(
  () => import("@worldcoin/idkit").then((mod) => mod.IDKitWidget),
  { ssr: false }
);

const VerificationAction = "Sign In WorldID";
const VerificationSignal = "Verification with WORLDID";

const WorldID = () => {
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

  return (
    <div>
      <IDKitWidget
        app_id={app_id} // obtain this from developer.worldcoin.org
        action={VerificationAction}
        signal={VerificationSignal}
        enableTelemetry
        onSuccess={(result) => handleVerify(result)} // pass the proof to the API or your smart contract
      >
        {({ open }) => <button onClick={open}>Click me</button>}
      </IDKitWidget>
    </div>
  );
};

export default WorldID;
