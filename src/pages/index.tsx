import GithubLogin from "@/components/GithubLogin";
import GithubStatistics from "@/components/GithubStatistics";
import Navigation from "@/components/Navgiation";
import WorldID from "@/components/WorldID";
import HomeView from "@/views/HomeView";

export default function Home() {
  return (
    <>
      <Navigation />
      <HomeView />
      <GithubStatistics />
    </>
  );
}
