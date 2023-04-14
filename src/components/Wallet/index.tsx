import { useMetaMask } from "@/hooks/useMetamask";
import { WalletContainer } from "./style";
import { useListen } from "@/hooks/useListen";
import { ChainNameToChainId } from "@/utils/chains";

const Wallet = () => {
  const {
    dispatch,
    state: { status, isMetaMaskInstalled, wallet, chainId },
  } = useMetaMask();
  const listen = useListen();

  // we can use this to conditionally render the UI
  const showInstallMetaMask =
    status !== "pageNotLoaded" && !isMetaMaskInstalled;

  // we can use this to conditionally render the UI
  const showConnectButton =
    status !== "pageNotLoaded" && isMetaMaskInstalled && !wallet;

  // we can use this to conditionally render the UI
  const isConnected = status !== "pageNotLoaded" && typeof wallet === "string";

  const rightNetwork =
    status !== "pageNotLoaded" &&
    chainId &&
    Object.values(ChainNameToChainId).includes(chainId);

  // can be passed to an onclick handler
  const handleConnect = async () => {
    dispatch({ type: "loading" });
    const accounts = (await window.ethereum.request({
      method: "eth_requestAccounts",
    })) as string[];

    if (accounts.length > 0) {
      const balance = (await window.ethereum!.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      })) as string;

      dispatch({
        type: "connect",
        wallet: accounts[0],
        balance,
        chainId: String(window.ethereum.networkVersion),
      });

      // we can register an event listener for changes to the users wallet
      listen();
    }
  };

  // can be passed to an onclick handler
  const handleDisconnect = () => {
    dispatch({ type: "disconnect" });
  };

  return (
    <WalletContainer>
      {showInstallMetaMask && <p>Please install Metamask</p>}
      {isConnected && (
        <>
          {rightNetwork ? (
            <>
              <p>Connected: {wallet}</p>
              <button type="button" onClick={handleDisconnect}>
                Disconnect
              </button>
            </>
          ) : (
            <>
              <p>Wrong network</p>
            </>
          )}
        </>
      )}
      {showConnectButton && (
        <button type="button" onClick={handleConnect}>
          Connect Wallet
        </button>
      )}
    </WalletContainer>
  );
};

export default Wallet;
