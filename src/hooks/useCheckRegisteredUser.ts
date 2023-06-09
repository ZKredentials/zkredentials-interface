import config from "@/utils/config";
import { useEffect, useState } from "react";
import { useMetaMask } from "./useMetamask";
import { ethers } from "ethers";
import { ZKredentialsWorldID__factory } from "@/contracts/abi/types";
import { UPDATE_WORLDID_VERIFIED } from "@/context/actionType";
import { useWorldID } from "@/context/WorldIDContext";
import ChainToAddressMapping, {
  ContractName,
} from "@/utils/chainToAdressMapping";
import { ChainIdToChainName } from "@/utils/chains";

const useCheckRegisteredUser = () => {
  const { state } = useMetaMask();
  const { dispatch: WorldIDDispatch } = useWorldID();

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (!state.wallet) {
        WorldIDDispatch({ type: UPDATE_WORLDID_VERIFIED, isVerified: false });
        setError("User has yet to connect wallet.");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      if (!provider) {
        WorldIDDispatch({ type: UPDATE_WORLDID_VERIFIED, isVerified: false });
        setError("Provider does not exist.");
        return;
      }

      if (!state.chainId) {
        return;
      }
      const currentContractAddress =
        ChainToAddressMapping[ChainIdToChainName[state.chainId]][
          ContractName.WORLDID
        ];
      const contract = ZKredentialsWorldID__factory.connect(
        currentContractAddress,
        provider
      );
      if (!contract) {
        WorldIDDispatch({ type: UPDATE_WORLDID_VERIFIED, isVerified: false });
        setError("Contract does not exist.");
        return;
      }

      const tokens = await contract.balanceOf(state.wallet);

      WorldIDDispatch({
        type: UPDATE_WORLDID_VERIFIED,
        isVerified: Number(tokens) > 0,
      });
    } catch (error) {
      console.log("Error from fetchUserNFTLimit", error);
      WorldIDDispatch({ type: UPDATE_WORLDID_VERIFIED, isVerified: false });
      setError(
        "Something went wrong with fetching user minting limits. Please refresh the page."
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    if (state.wallet) {
      fetchData();
    }
  }, [state.wallet]);

  return { error, loading, fetchData };
};

export default useCheckRegisteredUser;
