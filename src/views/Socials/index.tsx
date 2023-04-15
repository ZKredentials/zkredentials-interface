import GithubLogin from "@/components/GithubLogin";
import { SocialsContainer, SocialsTitle, SocialsContent } from "./style";
import TwitterLogin from "@/components/TwitterLogin";

const Socials = () => {
  return (
    <SocialsContainer>
      <SocialsTitle>Connected Socials</SocialsTitle>
      <SocialsContent>
        <GithubLogin />
        <TwitterLogin />
      </SocialsContent>
    </SocialsContainer>
  );
};

export default Socials;
