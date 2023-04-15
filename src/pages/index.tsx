import Navigation from "@/components/Navgiation";
import { useSocials } from "@/context/SocialsContext";
import { useWorldID } from "@/context/WorldIDContext";
import { UPDATE_GITHUB_LOGGEDIN } from "@/context/actionType";
import { useMetaMask } from "@/hooks/useMetamask";
import { LOCAL_STORAGE_GITHUB_ACCESS_TOKEN } from "@/utils/constants";
import ExplorerView from "@/views/ExploreView";
import GenerateProofView from "@/views/GenerateProofView";
import HomeView from "@/views/HomeView";
import NotVerified from "@/views/NotVerified";
import Proofs from "@/views/Proofs";
import Socials from "@/views/Socials";
import * as PushAPI from "@pushprotocol/restapi";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

export default function Home() {
  const { state: WorldIDState } = useWorldID();
  const { dispatch } = useSocials();

  const {
    state: { wallet },
  } = useMetaMask();
  const [key, setKey] = useState("");
  useEffect(() => {
    async function createUser() {
      let user;
      try {
        if (wallet) {
          const user = await PushAPI.user.create({
            account: wallet,
          });
        }
      } catch (error) {
        console.log(error);
      }
      try {
        if (wallet) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          if (!provider) {
            return;
          }
          const signer = provider.getSigner();
          const user = await PushAPI.user.get({
            account: wallet,
          });
          const decryptedPvtKey = await PushAPI.chat.decryptPGPKey({
            encryptedPGPPrivateKey: user.encryptedPrivateKey,
            signer: signer as any,
          });
          setKey(decryptedPvtKey);
        }
      } catch (error) {
        console.log("index", error);
      }
    }
    createUser();
  }, [wallet]);

  const handleReceiveTwitterCallback = (event: any) => {
    if (event.key == LOCAL_STORAGE_GITHUB_ACCESS_TOKEN) {
      const handler = event.newValue;
      dispatch({ type: UPDATE_GITHUB_LOGGEDIN, isGithub: true });
    }
  };

  // Event Listener from Twitter Auth Window Pop Up to receive the callback
  useEffect(() => {
    window.addEventListener(`storage`, (event) => {
      handleReceiveTwitterCallback(event);
    });

    return () =>
      window.removeEventListener(`storage`, handleReceiveTwitterCallback);
  }, []);

  return (
    <>
      <Navigation signing={key} />
      <HomeView />

      {WorldIDState.isVerified ? (
        <>
          <Socials />
          <Proofs />
          <GenerateProofView />
        </>
      ) : (
        <NotVerified />
      )}
      <ExplorerView signing={key} />
    </>
  );
}
