import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const headers = {
  "Content-Type": "application/json",
};

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const {
    app_id,
    nullifier_hash,
    proof,
    merkle_root,
    verificationAction,
    verificationSignal,
  } = req.body;

  try {
    const response = await axios.post(
      `https://developer.worldcoin.org/api/v1/verify/${app_id}`,
      {
        action: verificationAction,
        signal: verificationSignal,
        response_type: "code id_token",
        scope: "openid email profile",
        nonce: "3948293849238",
        nullifier_hash,
        proof,
        merkle_root,
        credential_type: "orb",
      },
      {
        headers,
      }
    );

    console.log("Response from WorldID API", response.data);

    return res.json(response.data.success);
  } catch (error: any) {
    console.log("test1", error.response);
    console.log("test2", error.response?.data);
    console.log("test3", error.response?.data?.code);
    if (error.response?.data?.code.includes("already_verified")) {
      return res.json(true);
    }

    return res.status(500);
  }
};

export default handler;
