import config from "@/utils/config";
import { useState } from "react";
import { useMetaMask } from "./useMetamask";
import { Contract, ethers } from "ethers";
import { ZKredentialsWorldCoin__factory } from "@/contracts/abi/types";

const INSUFFICIENT_FUNDS_ERROR_CODE = "INSUFFICIENT_FUNDS";

const useRegisterUser = () => {
  const { state } = useMetaMask();
  const [transactionHash, setTransactionHash] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const prepareTransactonOption = async (
    contract: Contract,
    account: string
  ) => {
    let estimatedGas = 200000;

    try {
      const estimatedGasFromContract = await contract.estimateGas.register({
        from: account,
      });
      estimatedGas = estimatedGasFromContract.mul(11).div(10).toNumber();
      console.log("estimatedGas for useRegister", estimatedGas);
    } catch (error: any) {
      console.log("[Error from prepareTransactonOption", error);
      if (error.code !== INSUFFICIENT_FUNDS_ERROR_CODE) {
        return {
          from: account,
        };
      }
    }

    return {
      from: account,
      gasLimit: estimatedGas,
    };
  };

  const register = async () => {
    if (!state.wallet) {
      setTransactionHash("");
      setError("User has yet to connect wallet.");
      return;
    }

    setLoading(true);
    setError("");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    if (!provider) {
      setTransactionHash("");
      setError("Provider does not exist.");
      return;
    }

    const signer = provider.getSigner();

    const contract = ZKredentialsWorldCoin__factory.connect(
      config.CONTRACT_ADDRESS,
      signer
    );
    if (!contract) {
      setTransactionHash("");
      setError("Contract does not exist.");
      return;
    }

    // Prepare transaction options
    const transactionOptions = await prepareTransactonOption(
      contract,
      state.wallet
    );
    console.log("transactionOptions", transactionOptions);
    try {
      const tx = await contract.register(transactionOptions);

      const receipt = await tx.wait();
      const txnHash = await receipt.transactionHash;

      console.log("TransactionHash from useRegisterUser", txnHash);

      setTransactionHash(txnHash);
      setError("");
    } catch (error: any) {
      console.log("Minting Error", error.message);
      console.log(error);
      if (error.reason === "transaction failed") {
        setTransactionHash("");
        setError("The transaction has failed");
      } else if (error.code === 4001) {
        // User rejected the transaction
        setTransactionHash("");
        setError("Please approve the transaction.");
      } else if (error.error && error.error.code === -32603) {
        // Internal Error Code from Smart Contract
        // Error use Smart Contract error messages
        let filteredMessage =
          "Reigstering user went wrong. Please refresh and try again.";
        if (error.message.length > 20) {
          filteredMessage = error.error.message.substring(33);
        }
        setTransactionHash("");
        setError(filteredMessage);
      } else {
        setTransactionHash("");
        setError("Registering user went wrong. Please refresh and try again.");
      }
    }

    setLoading(false);
  };

  return { transactionHash, error, loading, register };
};

export default useRegisterUser;
