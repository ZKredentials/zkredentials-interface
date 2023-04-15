import GithubLogin from "@/components/GithubLogin";
import Navigation from "@/components/Navgiation";
import WorldID from "@/components/WorldID";

export default function Home() {
  return (
    <>
      <Navigation />
      <GithubLogin />
      <WorldID />
    </>
  );
}
