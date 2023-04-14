import { useRouter } from "next/router";
import { useMetaMask } from "./useMetamask";

const isAccountList = (accounts: unknown): accounts is string[] => {
  return (
    Array.isArray(accounts) &&
    accounts.every((account) => typeof account === "string")
  );
};

export const useListen = () => {
  const router = useRouter();
  const { dispatch } = useMetaMask();

  return () => {
    window.ethereum.on("accountsChanged", async (newAccounts: any) => {
      if (isAccountList(newAccounts) && newAccounts.length > 0) {
        // upon receiving a new wallet, we'll request the balance to synchronize the UI again.
        const newBalance = await window.ethereum!.request({
          method: "eth_getBalance",
          params: [newAccounts[0], "latest"],
        });

        const narrowedBalance =
          typeof newBalance === "string" ? newBalance : "";

        dispatch({
          type: "connect",
          wallet: newAccounts[0],
          balance: narrowedBalance,
          chainId: String(window.ethereum.networkVersion),
        });
      } else {
        // if the length is 0, then the user has disconnected from the wallet UI
        dispatch({ type: "disconnect" });
      }
    });

    window.ethereum.on("chainChanged", async (newChainId: any) => {
      router.reload();
      // dispatch({
      //   type: "changeChain",
      //   chainId: String(Number(newChainId)),
      // });
    });
  };
};
