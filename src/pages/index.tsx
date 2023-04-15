import Navigation from "@/components/Navgiation";
import { useWorldID } from "@/context/WorldIDContext";
import { useMetaMask } from "@/hooks/useMetamask";
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
  const {
    state: { wallet },
  } = useMetaMask();
  const [key, setKey] = useState("")
  useEffect(() => {
    async function createUser() {
      let user
      try {
        if(wallet){
          const user = await PushAPI.user.create({
            account: wallet
          });
        }
      } catch (error) {
        console.log(error)
      }
      try {
        if (wallet) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          if (!provider) {
            return;
          }
          const signer = provider.getSigner();
          const user = await PushAPI.user.get({
            account: wallet
          });
          const decryptedPvtKey = await PushAPI.chat.decryptPGPKey({
            encryptedPGPPrivateKey: user.encryptedPrivateKey,
            signer: signer as any
          });
          setKey(decryptedPvtKey)
        }
      } catch (error) {
        console.log('index',error)
      }
    }
    createUser()
  }, [wallet])

  return (
    <>
      <Navigation signing={key}/>
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
      <ExplorerView signing={key}/>
    </>
  );
}
