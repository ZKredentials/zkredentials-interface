import Navigation from "@/components/Navgiation";
import { useWorldID } from "@/context/WorldIDContext";
import GenerateProofView from "@/views/GenerateProofView";
import HomeView from "@/views/HomeView";
import NotVerified from "@/views/NotVerified";
import Proofs from "@/views/Proofs";
import Socials from "@/views/Socials";

export default function Home() {
  const { state: WorldIDState } = useWorldID();

  return (
    <>
      <Navigation />
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
    </>
  );
}
